/* Premium Events — effets propres au projet (direction « Coup d'envoi »).
   Le socle gère l'ouverture, les transitions (voile « coupe »), l'en-tête, le menu, les boucles, les mesures
   et la bibliothèque d'effets (lignes, cascade, rideau, parallaxe, zoom, galerie, plein écran, magnétique).
   Ici : l'intro coupée en biais, les métiers, le parcours de The Alters, la méthode, la signature de fin,
   la médaille EcoVadis, les filtres des réalisations et la demande de projet en 3 étapes.
   Chaque effet propre porte data-effet="nom-du-plan". */
import { demarrer, rafraichir, aller, quand } from './socle/index.js?v=1';

const gsap = window.gsap;
const $ = (s, r = document) => r.querySelector(s);
const $$ = (s, r = document) => [...r.querySelectorAll(s)];
const ordinateur = () => window.matchMedia('(min-width: 761px)').matches;
const ST = () => window.ScrollTrigger;

/* ——— Ouverture de chaque page : lignes du titre, textes, trait de la photo. ——— */
function animerOuverture(tl, t) {
  if ($$('.ouv-l').length) tl.fromTo('.ouv-l', { y: 0, yPercent: 120 }, { y: 0, yPercent: 0, duration: 0.85, stagger: 0.09, ease: 'power3.out' }, t);
  if ($$('.ouv-f').length) tl.fromTo('.ouv-f', { opacity: 0, y: 14 }, { opacity: 1, y: 0, duration: 0.6, stagger: 0.06, ease: 'power2.out' }, t + 0.18);
  if ($('.ouv-trait line')) tl.fromTo('.ouv-trait line', { opacity: 0 }, { opacity: 1, duration: 0.5 }, t);
  const medaille = $('.medaille--grande');
  if (medaille) tl.fromTo(medaille, { rotate: -120, scale: 0.7 }, { rotate: 0, scale: 1, duration: 1, ease: 'back.out(1.4)' }, t);
  return tl;
}

/* Intro « coupe » : le logo se pose, un trait blanc fend le panneau noir en biais (la barre oblique du logo),
   puis le panneau s'ouvre en deux le long du trait. Environ 2,1 s, sous les 3 s du socle. */
function jouerCoupe() {
  const panneau = $('[data-ouverture]');
  const tl = gsap.timeline({ defaults: { ease: 'power3.out' } });
  if (!panneau) return animerOuverture(tl, 0);
  const ligne = panneau.querySelector('.ouverture-coupe line');
  const logo = panneau.querySelector('.ouverture-logo');
  const sous = panneau.querySelector('.ouverture-ligne');
  const W = document.documentElement.clientWidth || innerWidth, H = innerHeight;
  const b = (Math.tan((14 * Math.PI) / 180) * H) / W * 100; /* même pente que la barre du logo, à toutes les tailles */
  const A = 50 + b / 2, B = 50 - b / 2;
  if (ligne) { ligne.setAttribute('x1', A.toFixed(2)); ligne.setAttribute('x2', B.toFixed(2)); }
  const ecart = { v: 0 };
  const poly = (v) => `polygon(-2% -2%, ${(A - v).toFixed(2)}% -2%, ${(B - v).toFixed(2)}% 102%, ${(B + v).toFixed(2)}% 102%, ${(A + v).toFixed(2)}% -2%, 102% -2%, 102% 102%, -2% 102%)`;
  tl.fromTo(logo, { opacity: 0, y: 14 }, { opacity: 1, y: 0, duration: 0.45 }, 0)
    .fromTo(sous, { opacity: 0 }, { opacity: 1, duration: 0.4 }, 0.15);
  if (ligne) tl.fromTo(ligne, { strokeDashoffset: 1, opacity: 1 }, { strokeDashoffset: 0, duration: 0.5, ease: 'power2.inOut' }, 0.3);
  tl.to(ecart, { v: 80, duration: 0.85, ease: 'power3.inOut', onUpdate: () => { panneau.style.clipPath = poly(ecart.v); } }, 0.9);
  if (ligne) tl.to(ligne, { opacity: 0, duration: 0.25 }, 0.95);
  animerOuverture(tl, 1.15);
  return tl;
}

/* ——— Les 5 métiers : la photo s'ouvre en biais quand la ligne arrive, glisse au défilement ; ligne active repérée. ——— */
function metiers() {
  $$('.metier').forEach((ligne) => {
    ST().create({ trigger: ligne, start: 'top 85%', once: true, onEnter: () => ligne.classList.add('ouvert') });
    ST().create({ trigger: ligne, start: 'top 58%', end: 'bottom 42%', onToggle: (s) => ligne.classList.toggle('actif', s.isActive) });
    const fig = ligne.querySelector('.metier-media');
    if (fig) gsap.fromTo(fig, { xPercent: ordinateur() ? 4 : 0, yPercent: ordinateur() ? 0 : 5 }, { xPercent: ordinateur() ? -4 : 0, yPercent: ordinateur() ? 0 : -5, ease: 'none', scrollTrigger: { trigger: ligne, start: 'top bottom', end: 'bottom top', scrub: 0.6 } });
  });
}

/* ——— Parcours de The Alters : tracé schématique qui se dessine, camion qui avance. ——— */
function parcours() {
  $$('.parcours').forEach((fig) => {
    const trait = fig.querySelector('.parcours-trait');
    const camion = fig.querySelector('.parcours-camion');
    if (!trait || !camion) return;
    const N = 80;
    let pts = null;
    const points = () => {
      if (pts) return pts;
      const L = trait.getTotalLength();
      pts = Array.from({ length: N + 1 }, (_, i) => { const p = trait.getPointAtLength((L * i) / N); return [p.x, p.y]; });
      return pts;
    };
    const poser = (p) => {
      const P = points(), f = Math.min(1, Math.max(0, p)) * N, i = Math.min(N - 1, Math.floor(f)), t = f - i;
      const x = P[i][0] + (P[i + 1][0] - P[i][0]) * t, y = P[i][1] + (P[i + 1][1] - P[i][1]) * t;
      camion.setAttribute('transform', `translate(${x.toFixed(1)} ${y.toFixed(1)})`);
      trait.style.strokeDashoffset = (1 - p).toFixed(4);
    };
    fig.__poser = poser;
    poser(0);
    const section = fig.closest('section');
    const colle = window.matchMedia('(min-width: 1024px) and (min-height: 700px)').matches && fig.closest('.alters-colle');
    ST().create({
      trigger: colle ? section : fig,
      start: colle ? 'top 55%' : 'top 88%',
      end: colle ? 'bottom 75%' : 'bottom 30%',
      scrub: 0.5,
      onUpdate: (s) => poser(s.progress),
    });
  });
}

/* ——— Paris Games Week : la rangée de photos glisse à l'horizontale pendant que la section passe (sans épinglage). ——— */
function rangeePgw() {
  const section = $('.pgw'), piste = section && section.querySelector('.galerie-piste');
  if (!piste || !ordinateur()) return;
  const barre = section.querySelector('.galerie-progres span');
  const course = () => -Math.max(0, piste.scrollWidth - (document.documentElement.clientWidth || innerWidth));
  const st = { trigger: section, start: 'top 75%', end: 'bottom 25%', scrub: 0.6, invalidateOnRefresh: true };
  gsap.fromTo(piste, { x: 0 }, { x: course, ease: 'none', scrollTrigger: st });
  if (barre) gsap.fromTo(barre, { scaleX: 0 }, { scaleX: 1, ease: 'none', scrollTrigger: { ...st } });
}

/* ——— Méthode : les « × » tournent, les mots se rejoignent. ——— */
function methode() {
  const t = $('.methode-titre');
  if (!t) return;
  const mots = $$('.methode-mot', t), xs = $$('.methode-x', t);
  const tl = gsap.timeline({ scrollTrigger: { trigger: t, start: 'top 92%', end: 'top 40%', scrub: 0.6 } });
  /* Les mots ne glissent que sur grand écran (sur téléphone, ils resteraient coupés au bord) ; les « × » tournent partout. */
  if (window.matchMedia('(min-width: 1024px)').matches) tl.fromTo(mots, { x: (i) => [-24, 24, -24][i] || 0 }, { x: 0, ease: 'none' }, 0);
  tl.fromTo(xs, { rotate: -180, scale: 0.5 }, { rotate: 0, scale: 1, ease: 'none' }, 0);
}

/* ——— Appel final : « we create & deliver », la barre se trace, le « & » se pose. ——— */
function signature() {
  $$('.fin-signature').forEach((s) => {
    const l = s.querySelector('.sig-barre line'), amp = s.querySelector('.sig-amp');
    gsap.timeline({ scrollTrigger: { trigger: s, start: 'top 90%', end: 'center 45%', scrub: 0.6 } })
      .fromTo(s.querySelector('.sig-l1'), { x: 24 }, { x: 0, ease: 'none' }, 0)
      .fromTo(s.querySelector('.sig-l2'), { x: -24 }, { x: 0, ease: 'none' }, 0)
      .fromTo(l, { strokeDashoffset: 1 }, { strokeDashoffset: 0, ease: 'none' }, 0)
      .fromTo(amp, { scale: 0.4, rotate: -30 }, { scale: 1, rotate: 0, ease: 'back.out(2)' }, 0.25);
  });
}

/* ——— Médaille EcoVadis : elle tourne et se pose (accueil), tourne doucement au défilement (engagements). ——— */
function badge() {
  $$('.medaille').forEach((m) => {
    if (m.classList.contains('medaille--grande')) {
      gsap.to(m, { rotate: 50, ease: 'none', scrollTrigger: { trigger: m, start: 'top top', end: 'bottom top', scrub: 0.6 } });
    } else {
      gsap.fromTo(m, { rotate: -160, scale: 0.7 }, { rotate: 0, scale: 1, ease: 'none', scrollTrigger: { trigger: m, start: 'top 95%', end: 'top 50%', scrub: 0.6 } });
    }
  });
}

/* ——— Réalisations : filtres des 5 métiers, gardés dans l'adresse (?metier=). ——— */
function filtres() {
  const zone = $('[data-filtres]');
  if (!zone) return;
  const boutons = $$('.filtre', zone), chapitres = $$('.chapitre'), compte = $('.filtres-etat', zone);
  const appliquer = (id, defiler) => {
    boutons.forEach((b) => b.setAttribute('aria-pressed', String(b.dataset.filtre === id)));
    chapitres.forEach((c) => {
      const montrer = id === 'tous' || c.dataset.metier === id;
      if (montrer && c.hidden) {
        c.hidden = false;
        $$('[data-anime]', c).forEach((el) => el.classList.add('vu'));
        if (defiler) gsap.fromTo(c, { opacity: 0, y: 24 }, { opacity: 1, y: 0, duration: 0.55, ease: 'power3.out', clearProps: 'opacity,transform' });
      } else if (!montrer) c.hidden = true;
    });
    const n = chapitres.filter((c) => !c.hidden).length;
    if (compte) compte.textContent = (n > 1 ? compte.dataset.resultatPlusieurs : compte.dataset.resultatUn).replace('{n}', n);
    try {
      const url = new URL(location.href);
      if (id === 'tous') url.searchParams.delete('metier'); else url.searchParams.set('metier', id);
      if (defiler) url.hash = '';
      history.replaceState(history.state, '', url);
    } catch {}
    rafraichir();
    if (defiler) aller($('#realisations'), { instant: true });
  };
  boutons.forEach((b) => b.addEventListener('click', () => appliquer(b.dataset.filtre, true)));
  const p = new URLSearchParams(location.search).get('metier');
  appliquer(p && chapitres.some((c) => c.dataset.metier === p) ? p : 'tous', false);
}

/* ——— Contact : demande en 3 étapes, récapitulatif « Votre brief » en direct. ——— */
function brief() {
  const f = $('[data-brief]');
  if (!f) return;
  const etapes = $$('.brief-etape', f), puces = $$('.brief-etapes li', f), recap = $('[data-recap]');
  let courante = 0;
  const montrer = (n, focus) => {
    const h0 = f.offsetHeight;
    etapes.forEach((e, i) => { e.hidden = i !== n; });
    puces.forEach((p, i) => { p.classList.toggle('actif', i === n); p.classList.toggle('fait', i < n); });
    courante = n;
    if (focus) {
      const h1 = f.offsetHeight;
      gsap.fromTo(f, { height: h0 }, { height: h1, duration: 0.4, ease: 'power2.out', clearProps: 'height', onComplete: rafraichir });
      gsap.fromTo(etapes[n], { opacity: 0, x: 18 }, { opacity: 1, x: 0, duration: 0.4, clearProps: 'opacity,transform' });
      const champ = etapes[n].querySelector('input:not([type="radio"]), select, textarea, input[type="radio"]');
      if (champ) champ.focus({ preventScroll: true });
    }
  };
  f.addEventListener('click', (e) => {
    if (e.target.closest('[data-suivant]')) montrer(Math.min(etapes.length - 1, courante + 1), true);
    else if (e.target.closest('[data-precedent]')) montrer(Math.max(0, courante - 1), true);
  });
  /* Envoi refusé (champ à compléter) : retour à l'étape du premier champ en erreur. */
  f.addEventListener('submit', () => {
    setTimeout(() => {
      const err = f.querySelector('[aria-invalid="true"]');
      if (err) { const i = etapes.indexOf(err.closest('.brief-etape')); if (i >= 0 && i !== courante) { montrer(i, false); err.focus(); } }
    }, 0);
  });
  const maj = () => {
    if (!recap) return;
    const val = {
      metier: (f.querySelector('input[name="metier"]:checked') || {}).dataset?.libelleRecap || '',
      periode: f.periode?.value.trim() || '',
      lieu: f.lieu?.value.trim() || '',
      invites: f.invites && f.invites.value ? f.invites.options[f.invites.selectedIndex].text : '',
      societe: [f.societe?.value.trim(), f.nom?.value.trim()].filter(Boolean).join(' · '),
    };
    $$('[data-recap-champ]', recap).forEach((dd) => {
      const v = val[dd.dataset.recapChamp];
      dd.textContent = v || dd.dataset.vide;
      dd.classList.toggle('rempli', !!v);
    });
  };
  f.addEventListener('input', maj);
  f.addEventListener('change', maj);
  montrer(0, false);
  maj();
  /* Le récapitulatif glisse doucement au défilement. */
  if (recap) gsap.fromTo(recap, { y: 24 }, { y: -24, ease: 'none', scrollTrigger: { trigger: recap, start: 'top bottom', end: 'bottom top', scrub: 0.6 } });
}

/* Images des scènes à venir (galerie PGW, plein écran) : chargées juste après l'ouverture, jamais une case vide à l'épinglage. */
function prechargerScenes() {
  quand('pret', () => {
    $$('.pgw img, .recevoir img').forEach((img) => {
      img.loading = 'eager';
      if (img.decode) img.decode().catch(() => {});
    });
  });
}

function etatFinalProjet() {
  if (!gsap) return;
  gsap.set('.ouv-l, .ouv-f, .ouv-trait line, .medaille', { clearProps: 'transform,opacity' });
  const panneau = $('[data-ouverture]');
  if (panneau) panneau.style.removeProperty('clip-path');
  $$('.metier').forEach((l) => l.classList.add('ouvert'));
  $$('.parcours').forEach((fig) => fig.__poser && fig.__poser(1));
}

demarrer({
  preparer() {
    if (!gsap || !ST()) return;
    [metiers, parcours, rangeePgw, methode, signature, badge, filtres, brief, prechargerScenes].forEach((f) => {
      try { f(); } catch (err) { console.error('[projet]', f.name, err); }
    });
  },
  jouer() {
    if (!gsap) return null;
    return jouerCoupe();
  },
  etatFinal: etatFinalProjet,
  arrivee() {
    if (!gsap) return;
    animerOuverture(gsap.timeline({ defaults: { ease: 'power3.out' } }), 0.1);
  },
});

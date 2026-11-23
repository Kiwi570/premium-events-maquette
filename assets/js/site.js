/* Premium Events — effets propres au projet (direction « Coup d'envoi »).
   Le socle gère l'ouverture, les transitions (voile « coupe »), l'en-tête, le menu, les boucles, les mesures
   et la bibliothèque d'effets (lignes, cascade, rideau, parallaxe, zoom, galerie, plein écran, magnétique).
   Ici : l'intro coupée en biais, les métiers, le parcours de The Alters, la méthode, la signature de fin,
   la médaille EcoVadis, les filtres des réalisations et la demande de projet en 3 étapes.
   Chaque effet propre porte data-effet="nom-du-plan". */
import { demarrer, rafraichir, aller, quand, boucle, bloquerDefilement, debloquerDefilement, suivre, lacher } from './socle/index.js?v=2';

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
  if ($('.partage-ligne')) tl.fromTo('.partage-ligne', { clipPath: 'inset(50% 0 50% 0)' }, { clipPath: 'inset(0% 0 0% 0)', duration: 0.6, ease: 'power3.inOut', clearProps: 'clip-path' }, t + 0.1);
  if ($('.partage-poignee')) tl.fromTo('.partage-poignee', { opacity: 0, scale: 0.4 }, { opacity: 1, scale: 1, duration: 0.55, ease: 'back.out(1.8)', clearProps: 'transform,opacity' }, t + 0.4);
  if ($('.partage-etiquette')) tl.fromTo('.partage-etiquette', { opacity: 0 }, { opacity: 1, duration: 0.45, stagger: 0.1, clearProps: 'opacity' }, t + 0.55);
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


/* ——— Ouverture de l'accueil : séparation en biais entre sport et divertissement, à faire glisser. ———
   Elle oscille doucement seule jusqu'au premier geste du visiteur (souris, toucher, clavier), puis suit le pointeur
   au survol (lissage rapide, stable en moins d'une seconde), se tire au doigt ou à la souris, et se règle au clavier. */
function separation() {
  const bloc = $('[data-separation]');
  if (!bloc) return;
  const poignee = bloc.querySelector('.partage-poignee');
  const MIN = ordinateur() ? 22 : 34, MAX = ordinateur() ? 84 : 72, REPOS = 56;
  let p = REPOS, cible = REPOS, demo = true, tire = false;
  const angle = () => {
    const r = bloc.getBoundingClientRect();
    const pente = ordinateur() ? 0.24 : 0.16;
    bloc.style.setProperty('--biais-angle', `${(-Math.atan((pente * r.width) / Math.max(1, r.height)) * 180) / Math.PI}deg`);
  };
  angle();
  window.addEventListener('resize', angle);
  const poser = (v) => {
    p = Math.min(MAX, Math.max(MIN, v));
    bloc.style.setProperty('--p', p.toFixed(2));
    if (poignee) poignee.setAttribute('aria-valuenow', String(Math.round(p)));
  };
  const arreterDemo = () => { if (demo) { demo = false; cible = p; } };
  ['pointerdown', 'keydown', 'wheel', 'touchstart'].forEach((ev) => window.addEventListener(ev, arreterDemo, { passive: true, once: true }));
  window.addEventListener('pointermove', (e) => { if (e.pointerType === 'mouse') arreterDemo(); }, { passive: true });
  const depuisX = (x) => { const r = bloc.getBoundingClientRect(); return ((x - r.left) / r.width) * 100; };
  /* Dès que le visiteur prend la séparation en main, les deux photos cessent de respirer : seul son geste les fait bouger. */
  const tenir = () => bloc.classList.add('tenu');
  bloc.addEventListener('pointermove', (e) => {
    if (e.pointerType === 'mouse' && !tire) { arreterDemo(); tenir(); cible = depuisX(e.clientX); }
    else if (tire) cible = depuisX(e.clientX);
  });
  bloc.addEventListener('pointerdown', (e) => { arreterDemo(); tenir(); tire = true; cible = depuisX(e.clientX); if (e.pointerType !== 'touch') bloc.setPointerCapture?.(e.pointerId); });
  const lacherPointeur = () => { tire = false; };
  bloc.addEventListener('pointerup', lacherPointeur);
  bloc.addEventListener('pointercancel', lacherPointeur);
  if (poignee) poignee.addEventListener('keydown', (e) => {
    const pas = { ArrowLeft: -5, ArrowDown: -5, ArrowRight: 5, ArrowUp: 5 }[e.key];
    if (!pas && e.key !== 'Home' && e.key !== 'End') return;
    e.preventDefault();
    arreterDemo();
    tenir();
    cible = pas ? Math.min(MAX, Math.max(MIN, cible + pas)) : e.key === 'Home' ? MIN : MAX;
  });
  /* Démonstration : un aller-retour d'environ 4,5 s après l'intro, puis retour au repos (jamais plus de 5 s de mouvement seul). */
  if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) demo = false;
  let debut = 0;
  quand('pret', () => { debut = performance.now(); });
  boucle(bloc, (dt) => {
    if (demo) {
      if (!debut) return;
      const t = (performance.now() - debut) / 1000;
      if (t > 4.6) { demo = false; cible = REPOS; return; }
      const enveloppe = Math.sin(Math.min(1, t / 4.6) * Math.PI);
      poser(REPOS + 10 * enveloppe * Math.sin(t * 1.37));
      return;
    }
    const k = 1 - Math.pow(0.0005, Math.min(0.1, dt)); /* lissage selon le temps écoulé : même vitesse partout */
    if (Math.abs(cible - p) < 0.05) { if (p !== cible) poser(cible); return; }
    poser(p + (cible - p) * k);
  });
  bloc.__repos = () => { demo = false; cible = REPOS; poser(REPOS); };
}


/* ——— Visionneuse : les photos des mosaïques en grand. ———
   Ouverte par chaque lien [data-visionneuse] (adresse propre #photo-<nom>, qui l'ouvre aussi à l'arrivée),
   photo qui grandit depuis sa vignette, flèches, clavier (← → Échap), glisser du doigt, focus gardé dans la fenêtre
   et rendu au lien d'origine à la fermeture. Les photos d'un chapitre masqué par les filtres sont sautées. */
function visionneuseProjet() {
  const fen = $('[data-visionneuse-fenetre]');
  if (!fen) return;
  const legende = fen.querySelector('.vis-legende'), compte = fen.querySelector('.vis-compte');
  /* L'image n'existe qu'à la première ouverture : aucune image vide dans la page fermée. */
  const img = document.createElement('img');
  img.className = 'vis-image';
  img.decoding = 'async';
  img.alt = '';
  const boutons = $$('.vis-bouton', fen);
  let liste = [], i = 0, origine = null, ouverte = false;
  const visibles = () => $$('[data-visionneuse]').filter((a) => a.offsetParent !== null);
  const plusGrande = (im) => {
    const set = (im.getAttribute('srcset') || '').split(',').map((x) => x.trim().split(/\s+/)).filter((x) => x[0]);
    const tri = set.map(([u, w]) => [u, parseInt(w, 10) || 0]).sort((a, b) => a[1] - b[1]);
    const choix = tri.filter(([, w]) => w <= 1600).pop() || tri.pop();
    return choix ? choix[0] : im.currentSrc || im.src;
  };
  const charger = (n, sens) => {
    i = (n + liste.length) % liste.length;
    const lien = liste[i], vignette = lien.querySelector('img');
    const w = vignette.getAttribute('width'), h = vignette.getAttribute('height');
    if (w && h) { img.setAttribute('width', w); img.setAttribute('height', h); img.style.setProperty('--ratio', (w / h).toFixed(4)); }
    img.src = plusGrande(vignette);
    img.alt = vignette.alt;
    legende.textContent = vignette.alt;
    compte.textContent = fen.dataset.compte.replace('{n}', i + 1).replace('{total}', liste.length);
    history.replaceState(history.state, '', '#' + lien.closest('[id]').id);
    if (sens) gsap.fromTo(img, { x: 60 * sens, opacity: 0 }, { x: 0, opacity: 1, duration: 0.45, ease: 'power3.out' });
    /* photo suivante préchargée : pas d'attente au prochain clic */
    const suiv = liste[(i + 1) % liste.length].querySelector('img');
    if (suiv) { const pre = new Image(); pre.src = plusGrande(suiv); }
  };
  const ouvrir = (lien, instant) => {
    liste = visibles();
    const n = liste.indexOf(lien);
    if (n < 0) return;
    origine = lien; ouverte = true;
    if (!img.isConnected) fen.querySelector('.vis-cadre').prepend(img);
    fen.hidden = false;
    bloquerDefilement('visionneuse');
    suivre(fen);
    charger(n, 0);
    const r = lien.getBoundingClientRect();
    const f = img.getBoundingClientRect();
    if (!instant && r.width && f.width) {
      const dx = r.left + r.width / 2 - (f.left + f.width / 2), dy = r.top + r.height / 2 - (f.top + f.height / 2);
      gsap.fromTo(fen, { backgroundColor: 'rgba(17,17,19,0)' }, { backgroundColor: 'rgba(17,17,19,.96)', duration: 0.35, clearProps: 'backgroundColor' });
      gsap.fromTo(img, { x: dx, y: dy, scale: Math.max(r.width / f.width, r.height / f.height) * 0.98 }, { x: 0, y: 0, scale: 1, duration: 0.6, ease: 'power3.out', clearProps: 'transform' });
      gsap.fromTo([legende, compte, ...boutons], { opacity: 0 }, { opacity: 1, duration: 0.3, delay: 0.25, clearProps: 'opacity' });
    }
    fen.querySelector('[data-vis-fermer]').focus({ preventScroll: true });
  };
  const fermer = () => {
    if (!ouverte) return;
    ouverte = false;
    const fin = () => { fen.hidden = true; lacher(fen); debloquerDefilement('visionneuse'); if (origine) origine.focus({ preventScroll: true }); };
    history.replaceState(history.state, '', location.pathname + location.search);
    gsap.to(fen, { opacity: 0, duration: 0.25, onComplete: () => { gsap.set(fen, { clearProps: 'opacity' }); fin(); } });
  };
  document.addEventListener('click', (e) => {
    const lien = e.target.closest('[data-visionneuse]');
    if (!lien) return;
    e.preventDefault();
    ouvrir(lien);
  });
  fen.addEventListener('click', (e) => {
    if (e.target.closest('[data-vis-fermer]') || e.target === fen) fermer();
    else if (e.target.closest('[data-vis-prec]')) charger(i - 1, -1);
    else if (e.target.closest('[data-vis-suiv]')) charger(i + 1, 1);
  });
  document.addEventListener('keydown', (e) => {
    if (!ouverte) return;
    if (e.key === 'Escape') { e.preventDefault(); fermer(); }
    else if (e.key === 'ArrowLeft') { e.preventDefault(); charger(i - 1, -1); }
    else if (e.key === 'ArrowRight') { e.preventDefault(); charger(i + 1, 1); }
    else if (e.key === 'Tab') {
      const premier = boutons[0], dernier = boutons[boutons.length - 1];
      if (!fen.contains(document.activeElement)) { e.preventDefault(); premier.focus(); }
      else if (e.shiftKey && document.activeElement === premier) { e.preventDefault(); dernier.focus(); }
      else if (!e.shiftKey && document.activeElement === dernier) { e.preventDefault(); premier.focus(); }
    }
  });
  let x0 = null;
  fen.addEventListener('pointerdown', (e) => { if (e.pointerType !== 'mouse') x0 = e.clientX; });
  fen.addEventListener('pointerup', (e) => {
    if (x0 === null) return;
    const dx = e.clientX - x0; x0 = null;
    if (Math.abs(dx) > 50) charger(i + (dx < 0 ? 1 : -1), dx < 0 ? 1 : -1);
  });
  /* Lien propre : #photo-<nom> ouvre la photo à l'arrivée. */
  const depuisAdresse = () => {
    const id = decodeURIComponent(location.hash.slice(1));
    if (!id.startsWith('photo-')) return;
    const lien = document.getElementById(id)?.querySelector('[data-visionneuse]');
    if (lien && !ouverte) ouvrir(lien, true);
  };
  quand('pret', depuisAdresse);
  window.addEventListener('hashchange', depuisAdresse);
}


/* ——— Ruban des clients : il accélère avec le défilement et repart en arrière quand on remonte. ——— */
function rubanVitesse() {
  const ruban = $('#ruban-clients');
  if (!ruban || window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;
  const anims = () => $$('.ruban-piste', ruban).flatMap((p) => p.getAnimations ? p.getAnimations() : []);
  let dernierY = window.scrollY, vitesse = 0, taux = 1;
  /* Les pistes partent loin dans leur boucle (multiple commun des deux durées, 80 s et 95 s : aucun saut visible),
     pour qu'en marche arrière elles n'atteignent jamais le début, où une animation CSS s'arrêterait. */
  anims().forEach((a) => { a.currentTime = (a.currentTime || 0) + 7600 * 1000 * 4; });
  window.addEventListener('scroll', () => {
    const d = window.scrollY - dernierY; dernierY = window.scrollY;
    vitesse = Math.max(-1, Math.min(1, vitesse + d / 400));
  }, { passive: true });
  boucle(ruban, (dt) => {
    vitesse *= Math.pow(0.04, dt); /* l'élan retombe en moins d'une seconde */
    const cible = 1 + vitesse * 7;
    const suivant = taux + (cible - taux) * (1 - Math.pow(0.002, dt));
    if (Math.abs(suivant - taux) < 0.002) return;
    taux = suivant;
    anims().forEach((a) => { a.playbackRate = taux; });
  });
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

/* ——— Engagements : les quatre thèmes EcoVadis sont cochés un à un à leur arrivée. ——— */
function coches() {
  const liste = $('[data-effet="coches"]');
  if (!liste) return;
  ST().create({ trigger: liste, start: 'top 80%', once: true, onEnter: () => liste.classList.add('coche') });
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
  const pendule = recap && recap.querySelector('[data-pendule]');
  let courante = 0, theta = 0, omega = 0;
  const pousser = (force, sens = Math.random() < 0.5 ? -1 : 1) => { if (pendule) omega += force * sens; };
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
    let remplis = 0;
    $$('[data-recap-champ]', recap).forEach((dd) => {
      const v = val[dd.dataset.recapChamp];
      const avant = dd.textContent;
      dd.textContent = v || dd.dataset.vide;
      if (v) remplis += 1;
      if (v && !dd.classList.contains('rempli')) { dd.classList.add('vient'); pousser(0.9); }
      else if (v && avant !== dd.textContent) pousser(0.25);
      dd.classList.toggle('rempli', !!v);
      if (!v) dd.classList.remove('vient');
    });
    const jauge = recap.querySelector('[data-pass-jauge]');
    if (jauge) jauge.style.width = `${(remplis / 5) * 100}%`;
  };
  f.addEventListener('input', maj);
  f.addEventListener('change', maj);
  montrer(0, false);
  maj();
  /* Le pass se balance au bout de son cordon : petite poussée à chaque champ rempli et selon la vitesse de défilement,
     ressort amorti (revient au calme en environ 2 s). */
  if (pendule) {
    let dernierY = window.scrollY;
    window.addEventListener('scroll', () => { const d = window.scrollY - dernierY; dernierY = window.scrollY; pousser(Math.min(1, Math.abs(d) / 120) * 0.35, d > 0 ? 1 : -1); }, { passive: true });
    boucle(pendule, (dt) => {
      const raideur = 38, amorti = 3.4;
      omega += (-raideur * theta - amorti * omega) * dt;
      theta += omega * dt;
      if (Math.abs(theta) < 0.002 && Math.abs(omega) < 0.002) { if (theta !== 0) { theta = 0; omega = 0; pendule.style.transform = ''; } return; }
      pendule.style.transform = `rotate(${(theta * 30).toFixed(3)}deg)`;
    });
  }
  /* Demande valide (simulée) : le pass est tamponné. */
  f.addEventListener('submit', () => {
    setTimeout(() => {
      const msg = f.querySelector('[data-message-envoi]');
      if (msg && !msg.hidden && recap) { recap.classList.add('valide'); pousser(1.4); }
    }, 0);
  });
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
  gsap.set('.ouv-l, .ouv-f, .ouv-trait line, .medaille, .partage-poignee, .partage-etiquette', { clearProps: 'transform,opacity' });
  gsap.set('.partage-ligne', { clearProps: 'clip-path' });
  const panneau = $('[data-ouverture]');
  if (panneau) panneau.style.removeProperty('clip-path');
  $$('.metier').forEach((l) => l.classList.add('ouvert'));
  $$('.parcours').forEach((fig) => fig.__poser && fig.__poser(1));
  const sep = $('[data-separation]');
  if (sep && sep.__repos) sep.__repos();
  $$('[data-effet="coches"]').forEach((l) => l.classList.add('coche'));
}

demarrer({
  preparer() {
    if (!gsap || !ST()) return;
    [separation, rubanVitesse, metiers, parcours, rangeePgw, methode, signature, badge, coches, filtres, brief, visionneuseProjet, prechargerScenes].forEach((f) => {
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

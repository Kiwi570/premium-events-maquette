/* Accueil de Premium Events (direction « Coup d'envoi »). */
import { html, brut } from '../../outils/gabarit.mjs';
import { lignesOuverture, alt, appelFinal } from '../gabarits/blocs.mjs';

export const page = { cle: 'accueil', fichier: 'index', imagePartage: 'accueil-ouverture-1280.webp' };

export default (c) => {
  const ct = c.site.contact;
  const metiers = c.donnees.metiers;
  const clients = c.donnees.clients;
  const pgw = [
    ['pgw-luffy', 'l1'], ['pgw-joie', 'l2'], ['pgw-xbox', 'l3'], ['pgw-onepiece', 'l4'], ['pgw-tortues', 'l5'], ['pgw-plateau', 'l6'],
  ];
  const rangee = (liste, cache) => html`<p class="ruban-rangee"${cache ? brut(' aria-hidden="true"') : ''}>${liste.map((n) => html`<span>${n}</span>`)}</p>`;
  return html`
<section class="ouv ouv--accueil" id="debut">
  <div class="ouv-texte">
    <p class="surtitre surtitre--clair ouv-f">${c.t('accueil.hero.surtitre')}</p>
    <h1 class="ouv-titre" data-anime="gsap">${lignesOuverture([
      c.t('accueil.hero.l1'),
      html`<span class="amp">${c.t('accueil.hero.l2a')}</span> ${c.t('accueil.hero.l2b')}`,
      c.t('accueil.hero.l3'),
      c.t('accueil.hero.l4'),
    ])}</h1>
    <p class="ouv-intro ouv-f masque-petit">${c.t('accueil.hero.texte')}</p>
    <p class="ouv-actions ouv-f">
      ${c.lien('contact', { ancre: 'brief', classe: 'bouton', texte: c.t('accueil.hero.action'), attrs: 'data-action-principale data-survol="magnetique"' })}
      ${c.lien('realisations', { classe: 'bouton bouton--contour-clair masque-ecran-tres-bas', texte: c.t('accueil.hero.secondaire') })}
    </p>
    <p class="ouv-info ouv-f" data-info-cle>${c.t('accueil.hero.info')} · <a href="tel:${ct.telephoneLien}">${ct.telephone}</a></p>
  </div>
  <div class="ouv-photo">
    ${c.media({ nom: 'accueil-ouverture', alt: alt(c, 'accueil-ouverture'), cadrage: '52% 42%', cadrageMobile: '50% 40%', priorite: true, classe: 'ouv-media', sizes: '(max-width: 760px) 100vw, 62vw', attrs: 'data-fx="parallaxe" data-fx-force="8" data-iris-centre data-boucle-css' })}
    <svg class="ouv-trait" viewBox="0 0 100 100" preserveAspectRatio="none" aria-hidden="true"><line x1="24" y1="0" x2="0" y2="100" vector-effect="non-scaling-stroke"/></svg>
  </div>
</section>

<section class="clients-ruban" id="clients" aria-labelledby="clients-titre">
  <h2 class="clients-titre" id="clients-titre" data-anime>${c.t('accueil.ruban.titre')} <span class="clients-nombre">${clients.length}</span></h2>
  <div class="ruban" id="ruban-clients" data-boucle-css data-ruban data-effet="ruban" role="region" aria-label="${c.s('accueil.ruban.region')}">
    <div class="ruban-piste">${rangee(clients, false)}${rangee(clients, true)}</div>
    <div class="ruban-piste ruban-piste--inverse" aria-hidden="true" data-audit-ignorer>${rangee([...clients].reverse(), true)}${rangee([...clients].reverse(), true)}</div>
  </div>
  <button type="button" class="ruban-pause" data-pause-pour="ruban-clients" data-libelle-pause="${c.s('commun.pause')}" data-libelle-lecture="${c.s('commun.lecture')}"><span data-libelle-bouton>${c.t('commun.pause')}</span></button>
</section>

<section class="metiers" id="metiers" aria-labelledby="metiers-titre">
  <div class="conteneur">
    <header class="tete-section">
      <p class="surtitre" data-anime>${c.t('accueil.metiers.surtitre')}</p>
      <h2 id="metiers-titre" data-anime>${c.t('accueil.metiers.titre1')} ${c.t('accueil.metiers.titre2')} <span class="surligne">${c.t('accueil.metiers.titre3')}</span> ${c.t('accueil.metiers.titre4')}</h2>
    </header>
    <ol class="metiers-liste">
      ${metiers.map((m) => html`<li class="metier" id="metier-${m.id}">
        <span class="metier-num" aria-hidden="true">${m.num}</span>
        <div class="metier-texte">
          <h3>${m.nom}</h3>
          <p>${m.court}</p>
          <p class="metier-projets">${m.projets.slice(0, 4).join(' · ')}</p>
          ${c.lien('realisations', { ancre: m.id, params: `metier=${m.id}`, classe: 'lien-fleche', texte: html`${c.t('commun.realisationsDe')}<span class="visuellement-cache"> : ${m.nom}</span>` })}
        </div>
        ${c.media({ nom: m.photo, alt: alt(c, m.photo), classe: 'metier-media', sizes: '(max-width: 760px) 100vw, 30vw', attrs: 'data-effet="metiers"' })}
      </li>`)}
    </ol>
  </div>
</section>

<section class="alters" id="the-alters" aria-labelledby="alters-titre">
  <div class="conteneur alters-grille">
    <div class="alters-colle">
      <p class="surtitre" data-anime>${c.t('accueil.alters.surtitre')}</p>
      <h2 id="alters-titre" data-anime="lignes">${c.t('accueil.alters.titre')}</h2>
      <p data-anime class="masque-ecran-bas">${c.t('accueil.alters.texte')}</p>
      <ul class="chiffres-ligne" data-anime="cascade">
        <li><strong data-compteur="1">1</strong> ${c.t('accueil.alters.c1')}</li>
        <li><strong data-compteur="5">5</strong> ${c.t('accueil.alters.c2')}</li>
        <li><strong data-compteur="2">2</strong> ${c.t('accueil.alters.c3')}</li>
      </ul>
      <figure class="parcours" data-visuel>
        <svg viewBox="0 0 400 220" role="img" aria-label="${c.s('accueil.alters.schema')} : ${c.s('accueil.alters.depart')} → ${c.s('accueil.alters.arrivee')}">
          <path class="parcours-fond" d="M350 150 C 310 105, 262 186, 214 140 S 128 64, 52 88"/>
          <path class="parcours-trait" d="M350 150 C 310 105, 262 186, 214 140 S 128 64, 52 88" pathLength="1"/>
          <circle class="parcours-borne" cx="350" cy="150" r="7"/>
          <circle class="parcours-borne parcours-borne--fin" cx="52" cy="88" r="7"/>
          <g class="parcours-camion" data-effet="parcours" transform="translate(52 88)"><rect x="-13" y="-8" width="26" height="16" rx="3"/><line x1="-3" y1="-8" x2="-8" y2="8"/></g>
          <text x="350" y="182" text-anchor="middle">${c.t('accueil.alters.depart')}</text>
          <text x="52" y="66" text-anchor="middle">${c.t('accueil.alters.arrivee')}</text>
        </svg>
        <figcaption>${c.t('accueil.alters.schema')}</figcaption>
      </figure>
      <p data-anime>${c.lien('the-alters', { classe: 'bouton bouton--noir', texte: c.t('commun.lireEtude'), attrs: 'data-survol="magnetique"' })}</p>
    </div>
    <ol class="alters-etapes">
      <li>${c.media({ nom: 'alters-camion', alt: alt(c, 'alters-camion'), classe: 'alters-media', sizes: '(max-width: 760px) 100vw, 44vw', attrs: 'data-anime="rideau"' })}<p><span>01</span> ${c.t('accueil.alters.etape1')}</p></li>
      <li>${c.media({ nom: 'alters-combinaison', alt: alt(c, 'alters-combinaison'), classe: 'alters-media', sizes: '(max-width: 760px) 100vw, 44vw', attrs: 'data-anime="rideau"' })}<p><span>02</span> ${c.t('accueil.alters.etape2')}</p></li>
      <li>${c.media({ nom: 'alters-bord', alt: alt(c, 'alters-bord'), classe: 'alters-media', sizes: '(max-width: 760px) 100vw, 44vw', attrs: 'data-anime="rideau"' })}<p><span>03</span> ${c.t('accueil.alters.etape3')}</p></li>
    </ol>
  </div>
</section>

<section class="pgw" id="paris-games-week" aria-labelledby="pgw-titre">
  <div class="conteneur galerie-tete">
    <div>
      <p class="surtitre surtitre--clair" data-anime>${c.t('accueil.pgw.surtitre')}</p>
      <h2 id="pgw-titre" data-anime="lignes">${c.t('accueil.pgw.titre1')} <span class="jaune">${c.t('accueil.pgw.titre2')}</span></h2>
    </div>
    <div class="pgw-cote">
      <p class="masque-ecran-bas" data-anime>${c.t('accueil.pgw.texte')}</p>
      <p class="pgw-chiffres" data-anime>${c.lien('paris-games-week', { classe: 'bouton', texte: c.t('commun.lireEtude'), attrs: 'data-survol="magnetique"' })}</p>
    </div>
  </div>
  <div class="pgw-fenetre" tabindex="0" role="region" aria-label="${c.s('accueil.pgw.region')}"><div class="galerie-piste" data-galerie data-effet="galerie-pgw">
    ${pgw.map(([nom, l], i) => html`<figure class="pgw-carte">
      ${c.media({ nom, alt: alt(c, nom), classe: 'pgw-media', sizes: '(max-width: 760px) 78vw, 30vw' })}
      <figcaption><span>${String(i + 1).padStart(2, '0')}</span> ${c.t('accueil.pgw.' + l)}</figcaption>
    </figure>`)}
  </div></div>
  <div class="galerie-progres" aria-hidden="true"><span></span></div>
</section>

<section class="recevoir" id="art-de-recevoir" data-fx="plein-ecran" aria-labelledby="recevoir-titre">
  <div data-collant>
    ${c.media({ nom: 'accueil-recevoir', alt: alt(c, 'accueil-recevoir'), classe: 'recevoir-media', sizes: '100vw' })}
    <p class="recevoir-mots" aria-hidden="true" data-visuel><span data-fx-ecarte="g">${c.t('accueil.recevoir.mot1')}</span> <span data-fx-ecarte="d">${c.t('accueil.recevoir.mot2')}</span></p>
    <div class="recevoir-carte" data-fx-apres>
      <h2 id="recevoir-titre">${c.t('accueil.recevoir.titre')}</h2>
      <p>${c.t('accueil.recevoir.texte')}</p>
      ${c.lien('realisations', { ancre: 'hospitalites', params: 'metier=hospitalites', classe: 'lien-fleche lien-fleche--clair', texte: c.t('accueil.recevoir.lien') })}
    </div>
  </div>
</section>

<section class="methode" id="methode" aria-labelledby="methode-titre">
  <div class="conteneur">
    <p class="surtitre" data-anime>${c.t('accueil.methode.surtitre')}</p>
    <h2 id="methode-titre" class="methode-titre" data-visuel>
      <span class="methode-mot">${c.t('accueil.methode.m1')}</span>
      <span class="methode-mot"><span class="methode-x" aria-hidden="true" data-effet="methode"><svg viewBox="0 0 20 20"><path d="M5 5 L15 15 M15 5 L5 15"/></svg></span> ${c.t('accueil.methode.m2')}</span>
      <span class="methode-mot"><span class="methode-x" aria-hidden="true" data-effet="methode"><svg viewBox="0 0 20 20"><path d="M5 5 L15 15 M15 5 L5 15"/></svg></span> ${c.t('accueil.methode.m3')}</span>
    </h2>
    <ol class="methode-etapes" data-anime="cascade">
      <li><span class="methode-num">01</span><h3>${c.t('accueil.methode.m1')}</h3><p>${c.t('accueil.methode.t1')}</p></li>
      <li><span class="methode-num">02</span><h3>${c.t('accueil.methode.m2')}</h3><p>${c.t('accueil.methode.t2')}</p></li>
      <li><span class="methode-num">03</span><h3>${c.t('accueil.methode.m3')}</h3><p>${c.t('accueil.methode.t3')}</p></li>
    </ol>
  </div>
</section>

<section class="engage" id="engagements" aria-labelledby="engage-titre">
  <div class="conteneur engage-grille">
    <div class="engage-texte">
      <p class="surtitre" data-anime>${c.t('accueil.engagements.surtitre')}</p>
      <h2 id="engage-titre" data-anime>${c.t('accueil.engagements.titre1')} <span class="surligne">${c.t('accueil.engagements.titre2')}</span> ${c.t('accueil.engagements.titre3')}</h2>
      <p data-anime>${c.t('accueil.engagements.texte')}</p>
      <ul class="chiffres-ligne chiffres-ligne--grand" data-anime="cascade">
        <li><strong data-compteur="9">9</strong> ${c.t('accueil.engagements.c1')}</li>
        <li><strong><span class="petit">top </span><span data-compteur="15">15</span> %</strong> ${c.t('accueil.engagements.c2')}</li>
      </ul>
      <p data-anime>${c.lien('engagements', { classe: 'lien-fleche', texte: c.t('accueil.engagements.lien') })}</p>
    </div>
    <div class="engage-visuel">
      ${c.media({ nom: 'accueil-engagements', alt: alt(c, 'accueil-engagements'), classe: 'engage-media', sizes: '(max-width: 760px) 100vw, 40vw', attrs: 'data-anime="rideau"' })}
      <img class="medaille" src="/assets/images/ecovadis-240.webp" width="240" height="240" alt="${c.s('commun.ecovadis')}" loading="lazy" data-effet="badge">
    </div>
  </div>
</section>

${appelFinal(c)}
`;
};

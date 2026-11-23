/* Engagements RSE : médaille EcoVadis, démarche CLIMEET, achats labellisés, thèmes EcoVadis, 9 chartes, diversité. */
import { html } from '../../outils/gabarit.mjs';
import { lignesOuverture, alt, appelFinal } from '../gabarits/blocs.mjs';

export const page = { cle: 'engagements', fichier: 'engagements', imagePartage: 'engagements-ouverture-1280.webp' };

export default (c) => {
  const labels1 = ['EcoVadis', 'ISO 9001', 'ISO 14001', 'ISO 20121', 'ISO 26000', 'Prestadd'];
  const labels2 = ['FSC', 'PEFC', 'NF', 'Écolabel européen'];
  return html`
<section class="ouv ouv--engagements" id="debut">
  <div class="conteneur ouv-eng">
    <div class="ouv-eng-texte">
      <p class="surtitre ouv-f">${c.t('engagements.surtitre')}</p>
      <h1 class="ouv-titre" data-anime="gsap">${lignesOuverture([c.t('engagements.titre1'), html`<span class="surligne surligne--fixe">${c.t('engagements.titre2')}</span>`, c.t('engagements.titre3')])}</h1>
      <p class="ouv-intro ouv-f masque-petit">${c.t('engagements.texte')}</p>
      <p class="ouv-actions ouv-f">${c.lien('contact', { ancre: 'brief', classe: 'bouton bouton--noir', texte: c.t('commun.actionLongue'), attrs: 'data-action-principale data-survol="magnetique"' })}</p>
      <p class="ouv-info ouv-f" data-info-cle>${c.t('engagements.info')}</p>
    </div>
    <div class="ouv-eng-medaille" data-iris-centre>
      <img class="medaille medaille--grande" src="/assets/images/ecovadis-480.webp" width="480" height="480" alt="${c.s('commun.ecovadis')}" fetchpriority="high" loading="eager" data-effet="badge">
      <ul class="eng-chiffres ouv-f">
        <li><strong data-compteur="9">9</strong> ${c.t('engagements.c1')}</li>
        <li><strong>15 %</strong> ${c.t('engagements.c2')}</li>
      </ul>
    </div>
  </div>
  <div class="conteneur ouv-eng-bande">
    ${c.media({ nom: 'engagements-ouverture', alt: alt(c, 'engagements-ouverture'), cadrage: '50% 60%', classe: 'eng-bande-media', sizes: '(max-width: 760px) 100vw, 90vw', attrs: 'data-fx="zoom" data-fx-force="12"' })}
  </div>
</section>

<section class="etude-bloc" id="demarche" aria-labelledby="demarche-titre">
  <div class="conteneur etude-bloc-grille">
    <div>
      <p class="surtitre" data-anime>${c.t('engagements.demarcheSur')}</p>
      <h2 id="demarche-titre" data-anime="lignes">${c.t('engagements.demarcheTitre')}</h2>
      <p data-anime>${c.t('engagements.demarche1')}</p>
      <p data-anime>${c.t('engagements.demarche2')}</p>
    </div>
    ${c.media({ nom: 'engagements-nature', alt: alt(c, 'engagements-nature'), classe: 'etude-bloc-media', sizes: '(max-width: 760px) 100vw, 45vw', attrs: 'data-fx="parallaxe"' })}
  </div>
</section>

<section class="achats" id="achats" aria-labelledby="achats-titre">
  <div class="conteneur achats-grille">
    ${c.media({ nom: 'engagements-table', alt: alt(c, 'engagements-table'), classe: 'achats-media', sizes: '(max-width: 760px) 100vw, 40vw', attrs: 'data-anime="rideau"' })}
    <div>
      <p class="surtitre surtitre--clair" data-anime>${c.t('engagements.achatsSur')}</p>
      <h2 id="achats-titre" data-anime="lignes">${c.t('engagements.achatsTitre')}</h2>
      <h3 data-anime>${c.t('engagements.achats1')}</h3>
      <ul class="etiquettes" data-anime="cascade">${labels1.map((l) => html`<li>${l}</li>`)}</ul>
      <h3 data-anime>${c.t('engagements.achats2')}</h3>
      <ul class="etiquettes" data-anime="cascade">${labels2.map((l) => html`<li>${l}</li>`)}</ul>
    </div>
  </div>
</section>

<section class="themes" id="ecovadis" aria-labelledby="themes-titre">
  <div class="conteneur">
    <p class="surtitre" data-anime>${c.t('engagements.ecovadisSur')}</p>
    <h2 id="themes-titre" data-anime="lignes">${c.t('engagements.ecovadisTitre')}</h2>
    <p class="themes-texte" data-anime>${c.t('engagements.ecovadisTexte')}</p>
    <ol class="themes-liste" data-anime="cascade" data-visuel data-effet="coches">
      ${['th1', 'th2', 'th3', 'th4'].map((t, i) => html`<li style="--i:${i}"><span>${String(i + 1).padStart(2, '0')}</span>${c.t('engagements.' + t)}<svg class="theme-coche" viewBox="0 0 48 48" aria-hidden="true"><circle cx="24" cy="24" r="21"/><path d="M14 25l7 7 13-15" pathLength="1"/></svg></li>`)}
    </ol>
  </div>
</section>

<section class="chartes" id="chartes" aria-labelledby="chartes-titre">
  <div class="conteneur chartes-grille">
    <div class="chartes-tete">
      <p class="surtitre" data-anime>${c.t('engagements.chartesSur')}</p>
      <h2 id="chartes-titre" data-anime="lignes">${c.t('engagements.chartesTitre')}</h2>
      <p data-anime>${c.t('engagements.chartesNote')}</p>
      <figure class="diversite" data-anime>
        ${c.media({ nom: 'charte-diversite', alt: alt(c, 'charte-diversite'), classe: 'diversite-media', sizes: '200px' })}
        <figcaption>${c.t('engagements.diversite')}</figcaption>
      </figure>
    </div>
    <ol class="chartes-liste" data-anime="cascade" data-visuel>
      ${c.donnees.chartes.map((t, i) => html`<li><span>${String(i + 1).padStart(2, '0')}</span>${t}</li>`)}
    </ol>
  </div>
</section>

${appelFinal(c)}
`;
};

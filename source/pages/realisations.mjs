/* Réalisations : bande de photos, filtres des 5 métiers (gardés dans l'adresse), chapitres, études de cas, clients. */
import { html, brut } from '../../outils/gabarit.mjs';
import { lignesOuverture, alt, appelFinal, carteEtude } from '../gabarits/blocs.mjs';

export const page = { cle: 'realisations', fichier: 'realisations', imagePartage: 'realisations-partage-1168.webp' };

export default (c) => {
  const metiers = c.donnees.metiers;
  const bande = ['bande-1', 'bande-2', 'bande-3', 'bande-4', 'bande-5', 'bande-6', 'bande-7', 'bande-8'];
  const vignette = (nom, cache) => html`<li${cache ? brut(' aria-hidden="true"') : ''}>${c.media({ nom, alt: cache ? '' : alt(c, nom), classe: 'bande-media', sizes: '(max-width: 760px) 40vw, 18vw', priorite: !cache && bande.indexOf(nom) < 4 })}</li>`;
  return html`
<section class="ouv ouv--realisations" id="debut">
  <div class="conteneur ouv-rea">
    <div class="ouv-rea-titre">
      <p class="surtitre ouv-f">${c.t('realisations.surtitre')}</p>
      <h1 class="ouv-titre" data-anime="gsap">${lignesOuverture([c.t('realisations.titre1'), html`<span class="surligne surligne--fixe">${c.t('realisations.titre2')}</span>`, c.t('realisations.titre3')])}</h1>
    </div>
    <div class="ouv-rea-cote">
      <p class="ouv-intro ouv-f masque-petit">${c.t('realisations.texte')}</p>
      <p class="ouv-actions ouv-f">${c.lien('contact', { ancre: 'brief', classe: 'bouton bouton--noir', texte: c.t('commun.actionLongue'), attrs: 'data-action-principale data-survol="magnetique"' })}</p>
      <p class="ouv-info ouv-f" data-info-cle>${c.t('realisations.info')}</p>
    </div>
  </div>
  <div class="bande" id="bande" data-boucle-css data-effet="bande" data-iris-centre role="region" aria-label="${c.s('realisations.region')}">
    <ul class="bande-piste">${bande.map((n) => vignette(n, false))}${bande.map((n) => vignette(n, true))}</ul>
  </div>
  <p class="bande-pause-zone conteneur"><button type="button" class="ruban-pause ruban-pause--sombre" data-pause-pour="bande" data-libelle-pause="${c.s('commun.pause')}" data-libelle-lecture="${c.s('commun.lecture')}"><span data-libelle-bouton>${c.t('commun.pause')}</span></button></p>
</section>

<section class="rea" id="realisations" aria-labelledby="filtres-titre">
  <div class="filtres" data-filtres>
    <div class="conteneur filtres-rangee">
      <h2 class="filtres-titre" id="filtres-titre">${c.t('realisations.filtres')}</h2>
      <div class="filtres-boutons" role="group" aria-labelledby="filtres-titre">
        <button type="button" class="filtre" data-filtre="tous" aria-pressed="true">${c.t('realisations.tous')}</button>
        ${metiers.map((m) => html`<button type="button" class="filtre" data-filtre="${m.id}" aria-pressed="false">${m.nom}</button>`)}
      </div>
      <p class="filtres-etat" aria-live="polite" data-resultat-un="${c.s('realisations.resultat')}" data-resultat-plusieurs="${c.s('realisations.resultats')}"></p>
    </div>
  </div>
  ${metiers.map((m) => html`<article class="chapitre" id="${m.id}" data-metier="${m.id}" aria-labelledby="chap-${m.id}">
    <div class="conteneur chapitre-tete">
      <p class="chapitre-num" aria-hidden="true">${m.num}</p>
      <div>
        <p class="surtitre" data-anime>${m.nom}</p>
        <h2 id="chap-${m.id}" data-anime="lignes">${m.titreSite}</h2>
      </div>
      <div class="chapitre-texte" data-anime>
        <p>${m.texte}</p>
        <p class="chapitre-projets-titre">${m.projetsTitre || c.s('commun.projetsCites')}</p>
        <ul class="puces">${m.projets.map((p) => html`<li>${p}</li>`)}</ul>
      </div>
    </div>
    <ul class="conteneur mosaique" data-anime="cascade">
      ${m.photos.slice(0, 5).map((nom, i) => html`<li class="mosaique-${i + 1}">${c.media({ nom, alt: alt(c, nom), legende: alt(c, nom), classe: 'mosaique-media', sizes: i === 0 ? '(max-width: 760px) 100vw, 50vw' : '(max-width: 760px) 50vw, 25vw' })}</li>`)}
    </ul>
  </article>`)}
</section>

<section class="etudes" id="etudes" aria-labelledby="etudes-titre">
  <div class="conteneur">
    <p class="surtitre" data-anime>${c.t('realisations.etudes.surtitre')}</p>
    <h2 id="etudes-titre" data-anime="lignes">${c.t('realisations.etudes.titre')}</h2>
    <div class="etudes-grille" data-anime="cascade">${carteEtude(c, 'the-alters')}${carteEtude(c, 'paris-games-week')}</div>
  </div>
</section>

<section class="index-clients" id="clients" aria-labelledby="index-titre">
  <div class="conteneur">
    <p class="surtitre surtitre--clair" data-anime>${c.t('realisations.clients.surtitre')}</p>
    <h2 id="index-titre" data-anime="lignes">${c.t('realisations.clients.titre')}</h2>
    <ul class="index-liste" data-anime="cascade">${c.donnees.clients.map((n) => html`<li>${n}</li>`)}</ul>
    <p class="index-note" data-anime>${c.t('realisations.clients.note')}</p>
  </div>
</section>

${appelFinal(c)}
`;
};

/* Blocs partagés par les pages de Premium Events : appel final, carte d'étude de cas, titres en lignes. */
import { html, brut } from '../../outils/gabarit.mjs';

/* Titre de premier écran : chaque ligne dans un masque (.ouv-m), animée par la classe .ouv-l (intro et voile, site.js).
   lignes : tableau de fragments déjà échappés. */
export const lignesOuverture = (lignes) => lignes.map((l) => html`<span class="ouv-m"><span class="ouv-l">${l}</span></span>`);

/* Alt d'une image, depuis donnees/images.json. */
export const alt = (c, nom) => (c.donnees.images && c.donnees.images[nom] && c.donnees.images[nom].alt) || '';

/* Appel final de chaque page : « we create & deliver » géant (barre oblique qui se trace, & jaune), titre, actions. */
export function appelFinal(c, { sansFormulaire = false, titre, texte } = {}) {
  const ct = c.site.contact;
  return html`<section class="fin" id="fin" aria-labelledby="fin-titre">
  <div class="fin-signature" data-visuel aria-hidden="true" data-audit-ignorer>
    <span class="sig-l1" data-effet="signature">${c.t('commun.fin.signature1')}</span>
    <span class="sig-l2"><span class="sig-amp">&amp;</span> ${c.t('commun.fin.signature2')}</span>
    <svg class="sig-barre" viewBox="0 0 100 100" preserveAspectRatio="none"><line x1="64" y1="2" x2="40" y2="98" pathLength="1" vector-effect="non-scaling-stroke"/></svg>
  </div>
  <div class="conteneur fin-corps">
    <p class="surtitre surtitre--clair" data-anime>${c.t('commun.fin.surtitre')}</p>
    <h2 id="fin-titre" data-anime="lignes">${titre || html`${c.t('commun.fin.titre1')} ${c.t('commun.fin.titre2')}`}</h2>
    <p class="fin-texte" data-anime>${texte || c.t('commun.fin.texte')}</p>
    <p class="fin-actions" data-anime>
      ${sansFormulaire ? '' : c.lien('contact', { ancre: 'brief', classe: 'bouton', texte: c.t('commun.fin.action'), attrs: 'data-survol="magnetique"' })}
      <a class="bouton bouton--contour-clair" href="tel:${ct.telephoneLien}" data-survol="magnetique">${ct.telephone}</a>
      <a class="fin-mail" href="mailto:${ct.email}">${ct.email}</a>
    </p>
  </div>
</section>`;
}

/* Carte d'étude de cas (accueil, réalisations, pied des études). */
export function carteEtude(c, cle) {
  const image = { 'the-alters': 'alters-camion', 'paris-games-week': 'pgw-luffy' }[cle];
  const d = { image, sur: c.t(`cartes.${cle}.sur`), titre: c.t(`cartes.${cle}.titre`), texte: c.t(`cartes.${cle}.texte`) };
  return html`<article class="etude-carte">
  ${c.media({ nom: d.image, alt: alt(c, d.image), classe: 'etude-carte-media', sizes: '(max-width: 760px) 100vw, 45vw', attrs: 'data-fx="zoom"' })}
  <div class="etude-carte-texte">
    <p class="surtitre">${c.t('commun.etudeCas')} · ${d.sur}</p>
    <h3>${d.titre}</h3>
    <p>${d.texte}</p>
    ${c.lien(cle, { classe: 'lien-fleche', texte: c.t('commun.lireEtude') })}
  </div>
</article>`;
}

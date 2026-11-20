/* Page 404 : « Vous êtes en coulisses. », sur la photo d'une régie. */
import { html } from '../../outils/gabarit.mjs';
import { lignesOuverture, alt } from '../gabarits/blocs.mjs';

export const page = { cle: '404', fichier: '404', langues: ['fr'], partage: false };

export default (c) => html`
<section class="ouv ouv--404" id="debut">
  ${c.media({ nom: 'page-404', alt: alt(c, 'page-404'), cadrage: '50% 50%', priorite: true, classe: 'ouv-404-media', sizes: '100vw', attrs: 'data-fx="parallaxe" data-fx-force="6" data-iris-centre data-boucle-css' })}
  <div class="conteneur ouv-404-texte">
    <p class="surtitre surtitre--clair ouv-f">${c.t('introuvable.surtitre')}</p>
    <h1 class="ouv-titre" data-anime="gsap">${lignesOuverture([c.t('introuvable.titre1'), html`<span class="jaune">${c.t('introuvable.titre2')}</span>`])}</h1>
    <p class="ouv-intro ouv-f masque-petit">${c.t('introuvable.texte')}</p>
    <p class="ouv-actions ouv-f">${c.lien('accueil', { classe: 'bouton', texte: c.t('introuvable.retour'), attrs: 'data-action-principale' })} ${c.lien('realisations', { classe: 'bouton bouton--contour-clair' })}</p>
    <p class="ouv-info ouv-f" data-info-cle><a href="tel:${c.site.contact.telephoneLien}">${c.site.contact.telephone}</a></p>
  </div>
</section>
`;

/* Modèle d'étude de cas (The Alters, Paris Games Week) : ouverture scindée photo et chiffres, l'idée, le temps fort,
   le public ou les marques, galerie, autre étude, appel final. */
import { html, brut } from '../../outils/gabarit.mjs';
import { lignesOuverture, alt, appelFinal, carteEtude } from './blocs.mjs';

export function etude(c, o) {
  const k = (s) => `etude.${o.cle}.${s}`;
  return html`
<section class="ouv ouv--etude" id="debut">
  <div class="ouv-etude-texte">
    <p class="fil ouv-f masque-petit">${c.lien('realisations', { texte: c.t('etude.fil') })} <span aria-hidden="true">/</span> ${c.t(`pages.${o.page}.nav`)}</p>
    <p class="surtitre ouv-f">${c.t(k('surtitre'))}</p>
    <h1 class="ouv-titre" data-anime="gsap">${lignesOuverture([c.t(k('titre1')), c.t(k('titre2')), html`<span class="surligne surligne--fixe">${c.t(k('titre3'))}</span>`])}</h1>
    <p class="ouv-intro ouv-f masque-petit">${c.t(k('accroche'))}</p>
    <p class="ouv-actions ouv-f">${c.lien('contact', { ancre: 'brief', classe: 'bouton bouton--noir', texte: c.t('commun.actionLongue'), attrs: 'data-action-principale data-survol="magnetique"' })}</p>
    <p class="ouv-info ouv-f" data-info-cle>${c.t(k('info'))}</p>
    <dl class="etude-fiche ouv-f masque-ecran-bas">
      <div><dt>${o.cleClient}</dt><dd>${c.t(k('client'))}</dd></div>
      <div><dt>${o.cleMission}</dt><dd>${c.t(k('mission'))}</dd></div>
    </dl>
  </div>
  <div class="ouv-etude-photo">
    ${c.media({ nom: o.ouverture, alt: alt(c, o.ouverture), cadrage: o.cadrage || '50% 50%', priorite: true, classe: 'ouv-media', sizes: '(max-width: 760px) 100vw, 55vw', attrs: 'data-fx="parallaxe" data-fx-force="8" data-iris-centre data-boucle-css' })}
  </div>
</section>

<section class="etude-chiffres" id="chiffres" aria-label="${c.s('etude.galerie')}">
  <ul class="conteneur chiffres-bande" data-anime="cascade">
    ${o.chiffres.map(([n, cle, avant, apres]) => html`<li><strong>${avant ? html`<span class="petit">${avant}</span>` : ''}<span data-compteur="${n}">${n}</span>${apres || ''}</strong><span>${c.t(k(cle))}</span></li>`)}
  </ul>
</section>

<section class="etude-bloc" id="idee" aria-labelledby="idee-titre">
  <div class="conteneur etude-bloc-grille">
    <div>
      <p class="surtitre" data-anime>${c.t(k('ideeSur'))}</p>
      <h2 id="idee-titre" data-anime="lignes">${c.t(k('ideeTitre'))}</h2>
      <p data-anime>${c.t(k('idee'))}</p>
    </div>
    ${c.media({ nom: o.photos[0], alt: alt(c, o.photos[0]), classe: 'etude-bloc-media', sizes: '(max-width: 760px) 100vw, 45vw', attrs: 'data-fx="parallaxe"' })}
  </div>
</section>

<section class="etude-fort" id="temps-fort" aria-labelledby="fort-titre">
  <div class="conteneur etude-fort-grille">
    <div class="etude-fort-texte">
      <p class="surtitre surtitre--clair" data-anime>${c.t(k('parcoursSur'))}</p>
      <h2 id="fort-titre" data-anime="lignes">${c.t(k('parcoursTitre'))}</h2>
      ${o.fort(c)}
    </div>
    <div class="etude-fort-photos" data-anime="cascade">
      ${c.media({ nom: o.photos[1], alt: alt(c, o.photos[1]), classe: 'etude-fort-media', sizes: '(max-width: 760px) 50vw, 25vw' })}
      ${c.media({ nom: o.photos[2], alt: alt(c, o.photos[2]), classe: 'etude-fort-media etude-fort-media--decale', sizes: '(max-width: 760px) 50vw, 25vw' })}
    </div>
  </div>
</section>

<section class="etude-bloc etude-bloc--inverse" id="public" aria-labelledby="public-titre">
  <div class="conteneur etude-bloc-grille">
    <div>
      <p class="surtitre" data-anime>${c.t(k('publicSur'))}</p>
      <h2 id="public-titre" data-anime="lignes">${c.t(k('publicTitre'))}</h2>
      <p data-anime>${c.t(k('public'))}</p>
      <blockquote class="etude-citation" data-anime><p>${c.t(k('conclusion'))}</p></blockquote>
    </div>
    ${c.media({ nom: o.photos[3], alt: alt(c, o.photos[3]), classe: 'etude-bloc-media', sizes: '(max-width: 760px) 100vw, 45vw', attrs: 'data-anime="rideau"' })}
  </div>
</section>

<section class="etude-galerie" id="galerie" aria-labelledby="galerie-titre">
  <div class="conteneur">
    <h2 id="galerie-titre" class="surtitre-titre" data-anime>${c.t('etude.galerie')}</h2>
    <ul class="mosaique mosaique--etude" data-anime="cascade">
      ${o.galerie.slice(0, 5).map((nom, i) => html`<li class="mosaique-${i + 1}">${c.media({ nom, alt: alt(c, nom), legende: alt(c, nom), classe: 'mosaique-media', sizes: i === 0 ? '(max-width: 760px) 100vw, 50vw' : '(max-width: 760px) 50vw, 25vw' })}</li>`)}
    </ul>
  </div>
</section>

<section class="etudes etudes--suite" id="suite" aria-labelledby="suite-titre">
  <div class="conteneur">
    <h2 id="suite-titre" class="surtitre-titre" data-anime>${c.t('etude.suivante')}</h2>
    <div data-anime>${carteEtude(c, o.autre)}</div>
  </div>
</section>

${appelFinal(c)}
`;
}

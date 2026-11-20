/* Étude de cas : The Alters à la Fashion Week. */
import { html } from '../../outils/gabarit.mjs';
import { etude } from '../gabarits/etude.mjs';

export const page = { cle: 'the-alters', fichier: 'the-alters', imagePartage: 'alters-ouverture-1280.webp' };

export default (c) => etude(c, {
  cle: 'alters', page: 'the-alters', autre: 'paris-games-week',
  cleClient: c.t('etude.pour'), cleMission: c.t('etude.mission'),
  ouverture: 'alters-ouverture', cadrage: '30% 55%',
  chiffres: [[1, 'c1'], [5, 'c2'], [2, 'c3']],
  photos: ['alters-1', 'alters-combinaison', 'alters-5', 'alters-3'],
  galerie: ['alters-6', 'alters-2', 'alters-4', 'alters-7', 'alters-camion', 'alters-bord'],
  fort: (c) => html`<p data-anime>${c.t('etude.alters.parcours')}</p>
      <figure class="parcours parcours--clair" data-visuel>
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
      </figure>`,
});

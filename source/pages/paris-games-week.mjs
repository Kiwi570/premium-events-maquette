/* Étude de cas : Paris Games Week. */
import { html } from '../../outils/gabarit.mjs';
import { etude } from '../gabarits/etude.mjs';

export const page = { cle: 'paris-games-week', fichier: 'paris-games-week', imagePartage: 'pgw-ouverture-1280.webp' };

export default (c) => etude(c, {
  cle: 'pgw', page: 'paris-games-week', autre: 'the-alters',
  cleClient: c.t('etude.marques'), cleMission: c.t('etude.mission'),
  ouverture: 'pgw-ouverture', cadrage: '45% 45%',
  chiffres: [[10, 'c1', 'près de '], [8, 'c2'], [360, 'c3', '', '°']],
  photos: ['pgw-2', 'pgw-1', 'pgw-6', 'pgw-4'],
  galerie: ['pgw-5', 'pgw-3', 'pgw-7', 'pgw-8', 'pgw-joie', 'pgw-onepiece'],
  fort: (c) => html`<ol class="dispositifs" data-anime="cascade">
        <li><span>01</span> ${c.t('etude.pgw.d1')}</li>
        <li><span>02</span> ${c.t('etude.pgw.d2')}</li>
        <li><span>03</span> ${c.t('etude.pgw.d3')}</li>
      </ol>`,
});

/* Contact : demande de projet en 3 étapes (simulée) avec récapitulatif en direct, coordonnées, agence, carrière. */
import { html, brut } from '../../outils/gabarit.mjs';
import { lignesOuverture, alt, appelFinal } from '../gabarits/blocs.mjs';

export const page = { cle: 'contact', fichier: 'contact', imagePartage: 'contact-paris-1280.webp' };

export default (c) => {
  const ct = c.site.contact;
  const f = (k) => c.t('contact.form.' + k);
  const metiers = c.donnees.metiers;
  return html`
<section class="ouv ouv--contact" id="debut">
  <div class="conteneur ouv-contact">
    <div class="ouv-contact-texte">
      <p class="surtitre ouv-f">${c.t('contact.surtitre')}</p>
      <h1 class="ouv-titre" data-anime="gsap">${lignesOuverture([c.t('contact.titre1'), c.t('contact.titre2'), html`<span class="surligne surligne--fixe">${c.t('contact.titre3')}</span>`])}</h1>
      <p class="ouv-intro ouv-f masque-petit">${c.t('contact.texte')}</p>
      <p class="ouv-actions ouv-f"><a class="bouton bouton--noir" href="#brief" data-action-principale data-sans-transition>${c.t('contact.action')}</a></p>
      <dl class="coordonnees ouv-f" data-iris-centre>
        <div data-info-cle><dt>${c.t('contact.tel')}</dt><dd><a href="tel:${ct.telephoneLien}">${ct.telephoneInter}</a></dd></div>
        <div><dt>${c.t('contact.email')}</dt><dd><a href="mailto:${ct.email}">${ct.email}</a></dd></div>
        <div class="masque-ecran-bas"><dt>${c.t('contact.adresse')}</dt><dd>${ct.rue}, ${ct.ville}</dd></div>
      </dl>
    </div>
    <div class="brief-zone" id="brief">
      <form class="brief" data-formulaire data-brief aria-labelledby="brief-titre">
        <h2 id="brief-titre" class="brief-titre">${f('titre')}</h2>
        <p class="brief-deroule">${f('deroule')}</p>
        <ol class="brief-etapes" aria-hidden="true"><li class="actif">${f('e1')}</li><li>${f('e2')}</li><li>${f('e3')}</li></ol>
        <fieldset class="brief-etape" data-etape="1">
          <legend><span class="brief-n">${c.t('contact.form.etape', { n: 1 })}</span> ${f('e1')}</legend>
          <div class="champ" role="radiogroup" aria-labelledby="q-metier">
            <p class="champ-titre" id="q-metier">${f('metier')}</p>
            <div class="choix">
              ${metiers.map((m) => html`<label class="choix-item"><input type="radio" name="metier" value="${m.id}" data-libelle-recap="${m.nom}"><span>${m.nom}</span></label>`)}
              <label class="choix-item"><input type="radio" name="metier" value="autre" data-libelle-recap="${c.s('contact.form.autre')}"><span>${f('autre')}</span></label>
            </div>
          </div>
          <div class="champ"><label for="projet">${f('projet')}</label><textarea id="projet" name="projet" rows="3" aria-describedby="projet-aide"></textarea><p class="champ-aide" id="projet-aide">${f('projetAide')}</p></div>
          <p class="brief-nav"><button type="button" class="bouton bouton--noir" data-suivant>${f('suivant')}</button></p>
        </fieldset>
        <fieldset class="brief-etape" data-etape="2">
          <legend><span class="brief-n">${c.t('contact.form.etape', { n: 2 })}</span> ${f('e2')}</legend>
          <div class="champ"><label for="periode">${f('periode')}</label><input id="periode" name="periode" type="text" autocomplete="off" aria-describedby="periode-aide"><p class="champ-aide" id="periode-aide">${f('periodeAide')}</p></div>
          <div class="champ"><label for="lieu">${f('lieu')}</label><input id="lieu" name="lieu" type="text" autocomplete="address-level2"></div>
          <div class="champ"><label for="invites">${f('invites')}</label>
            <select id="invites" name="invites"><option value="">${f('i0')}</option><option>${f('i1')}</option><option>${f('i2')}</option><option>${f('i3')}</option><option>${f('i4')}</option></select></div>
          <p class="brief-nav"><button type="button" class="bouton bouton--contour" data-precedent>${f('precedent')}</button> <button type="button" class="bouton bouton--noir" data-suivant>${f('suivant')}</button></p>
        </fieldset>
        <fieldset class="brief-etape" data-etape="3">
          <legend><span class="brief-n">${c.t('contact.form.etape', { n: 3 })}</span> ${f('e3')}</legend>
          <div class="champ"><label for="nom">${f('nom')}</label><input id="nom" name="nom" type="text" autocomplete="name" required></div>
          <div class="champ"><label for="societe">${f('societe')}</label><input id="societe" name="societe" type="text" autocomplete="organization" required></div>
          <div class="champ"><label for="email">${f('email')}</label><input id="email" name="email" type="email" autocomplete="email" required></div>
          <div class="champ"><label for="telephone">${f('telephone')}</label><input id="telephone" name="telephone" type="tel" autocomplete="tel"></div>
          <p class="mention-donnees">${f('donnees')}</p>
          <p class="brief-nav"><button type="button" class="bouton bouton--contour" data-precedent>${f('precedent')}</button> <button type="submit" class="bouton">${f('envoyer')}</button></p>
          <p data-message-envoi hidden tabindex="-1" data-texte="${c.s('contact.form.envoye')}"></p>
        </fieldset>
      </form>
      <aside class="recap pass" aria-labelledby="recap-titre" data-recap data-effet="brief" data-grille="retour">
        <div class="pass-pendule" data-pendule>
          <span class="pass-cordon" aria-hidden="true"></span>
          <span class="pass-pince" aria-hidden="true"></span>
          <div class="pass-carte">
            <div class="pass-tete">
              <img src="/assets/images/logo-clair.png" alt="" width="298" height="124" loading="lazy">
              <span>${f('passTete')}</span>
            </div>
            <p class="recap-titre" id="recap-titre">${f('recap')}</p>
            <dl>
              <div><dt>${f('rType')}</dt><dd data-recap-champ="metier" data-vide="${c.s('contact.form.recapVide')}">${f('recapVide')}</dd></div>
              <div><dt>${f('rPeriode')}</dt><dd data-recap-champ="periode" data-vide="${c.s('contact.form.recapVide')}">${f('recapVide')}</dd></div>
              <div><dt>${f('rLieu')}</dt><dd data-recap-champ="lieu" data-vide="${c.s('contact.form.recapVide')}">${f('recapVide')}</dd></div>
              <div><dt>${f('rInvites')}</dt><dd data-recap-champ="invites" data-vide="${c.s('contact.form.recapVide')}">${f('recapVide')}</dd></div>
              <div><dt>${f('rContact')}</dt><dd data-recap-champ="societe" data-vide="${c.s('contact.form.recapVide')}">${f('recapVide')}</dd></div>
            </dl>
            <div class="pass-pied" aria-hidden="true"><span class="pass-code"></span><span class="pass-num">${f('passNum')}</span></div>
            <p class="pass-jauge" aria-hidden="true"><span data-pass-jauge></span></p>
            <p class="pass-tampon" aria-hidden="true" data-pass-tampon data-audit-ignorer><span>${f('passTampon')}</span><small>${f('passValide')}</small></p>
          </div>
        </div>
      </aside>
    </div>
  </div>
</section>

<section class="agence" id="agence" aria-labelledby="agence-titre">
  ${c.media({ nom: 'contact-paris', alt: alt(c, 'contact-paris'), classe: 'agence-media', sizes: '100vw', attrs: 'data-fx="parallaxe"' })}
  <div class="conteneur agence-grille">
    <div>
      <p class="surtitre surtitre--clair" data-anime>${c.t('contact.venirSur')}</p>
      <h2 id="agence-titre" data-anime="lignes">${c.t('contact.venirTitre')}</h2>
    </div>
    <dl class="coordonnees coordonnees--clair" data-anime="cascade">
      <div><dt>${c.t('contact.adresse')}</dt><dd>${ct.rue}<br>${ct.ville}</dd></div>
      <div><dt>${c.t('contact.acces')}</dt><dd>${c.t('commun.metro')}</dd></div>
      <div><dt>${c.t('contact.tel')}</dt><dd><a href="tel:${ct.telephoneLien}">${ct.telephoneInter}</a></dd></div>
    </dl>
  </div>
</section>

<section class="carriere" id="carriere" aria-labelledby="carriere-titre">
  <div class="conteneur carriere-grille">
    ${c.media({ nom: 'contact-equipe', alt: alt(c, 'contact-equipe'), classe: 'carriere-media', sizes: '(max-width: 760px) 100vw, 35vw', attrs: 'data-anime="rideau"' })}
    <div>
      <p class="surtitre" data-anime>${c.t('contact.carriereSur')}</p>
      <h2 id="carriere-titre" data-anime="lignes">${c.t('contact.carriereTitre')}</h2>
      <p data-anime>${c.t('contact.carriere')} <a href="mailto:${ct.emailRecrutement}">${ct.emailRecrutement}</a></p>
    </div>
  </div>
</section>

${appelFinal(c, { sansFormulaire: true, titre: c.t('contact.signature'), texte: c.t('contact.finTexte') })}
`;
};

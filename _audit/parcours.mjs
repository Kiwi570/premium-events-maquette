/* Parcours propres à Premium Events (v2) :
   - visionneuse des mosaïques : ouverture, flèches, focus gardé dans la fenêtre, Échap, focus rendu, lien propre #photo-… ;
   - séparation sport / divertissement de l'accueil : clavier (← → Début Fin) et valeur annoncée ;
   - demande de projet en 3 étapes : récapitulatif (pass) rempli, jauge, tampon après un envoi valide. */
export default async function ({ contexte, attendrePret, attendre, BASE, R, T }) {
  for (const taille of [T('390×844'), T('1440×900')]) {
    const { ctx, page } = await contexte({ taille });
    try {
      /* Visionneuse */
      await page.goto(BASE + '/realisations', { waitUntil: 'load' });
      await attendrePret(page);
      const lien = page.locator('[data-visionneuse]').nth(1);
      await lien.scrollIntoViewIfNeeded();
      await attendre(400);
      await lien.click();
      await attendre(800);
      let e = await page.evaluate(() => {
        const f = document.querySelector('[data-visionneuse-fenetre]');
        const im = f.querySelector('.vis-image').getBoundingClientRect();
        return { ouverte: !f.hidden, focusDedans: f.contains(document.activeElement), hash: location.hash, image: im.width > 100 && im.top >= 0 && im.bottom <= innerHeight + 1 };
      });
      if (!e.ouverte) R.echec('visionneuse', 'la visionneuse ne s’ouvre pas au clic sur une photo', { page: '/realisations', taille: taille.nom });
      if (!e.focusDedans) R.echec('visionneuse', 'le focus n’entre pas dans la visionneuse', { page: '/realisations', taille: taille.nom });
      if (!e.hash.startsWith('#photo-')) R.echec('visionneuse', 'la photo ouverte n’a pas son lien propre dans l’adresse', { page: '/realisations', taille: taille.nom });
      if (!e.image) R.echec('visionneuse', 'la photo en grand ne tient pas dans l’écran', { page: '/realisations', taille: taille.nom });
      const avant = e.hash;
      await page.keyboard.press('ArrowRight');
      await attendre(500);
      const apres = await page.evaluate(() => location.hash);
      if (apres === avant) R.echec('visionneuse', 'la flèche droite ne passe pas à la photo suivante', { page: '/realisations', taille: taille.nom });
      for (let k = 0; k < 6; k++) await page.keyboard.press('Tab');
      const garde = await page.evaluate(() => document.querySelector('[data-visionneuse-fenetre]').contains(document.activeElement));
      if (!garde) R.echec('visionneuse', 'la tabulation sort de la visionneuse ouverte', { page: '/realisations', taille: taille.nom });
      await page.keyboard.press('Escape');
      await attendre(600);
      e = await page.evaluate(() => ({ fermee: document.querySelector('[data-visionneuse-fenetre]').hidden, retour: !!document.activeElement.closest('[data-visionneuse]'), bloque: document.documentElement.classList.contains('defilement-bloque') }));
      if (!e.fermee) R.echec('visionneuse', 'Échap ne ferme pas la visionneuse', { page: '/realisations', taille: taille.nom });
      if (!e.retour) R.echec('visionneuse', 'le focus ne revient pas sur la photo d’origine', { page: '/realisations', taille: taille.nom });
      if (e.bloque) R.echec('visionneuse', 'le défilement reste bloqué après la fermeture', { page: '/realisations', taille: taille.nom });
      /* Lien propre d'une photo d'étude */
      await page.goto(BASE + '/the-alters#photo-alters-4', { waitUntil: 'load' });
      await attendrePret(page);
      await attendre(500);
      const direct = await page.evaluate(() => !document.querySelector('[data-visionneuse-fenetre]').hidden);
      if (!direct) R.echec('visionneuse', 'le lien #photo-alters-4 n’ouvre pas la photo', { page: '/the-alters', taille: taille.nom });

      /* Séparation de l'accueil, au clavier */
      await page.goto(BASE + '/', { waitUntil: 'load' });
      await attendrePret(page);
      await page.focus('.partage-poignee');
      await page.keyboard.press('End');
      await attendre(900);
      const fin = await page.evaluate(() => +document.querySelector('.partage-poignee').getAttribute('aria-valuenow'));
      await page.keyboard.press('Home');
      await attendre(900);
      const debut = await page.evaluate(() => +document.querySelector('.partage-poignee').getAttribute('aria-valuenow'));
      if (!(fin > 60 && debut < 40)) R.echec('separation', `la poignée ne se règle pas au clavier (Fin : ${fin}, Début : ${debut})`, { page: '/', taille: taille.nom });

      /* Demande de projet : pass rempli puis tamponné */
      await page.goto(BASE + '/contact', { waitUntil: 'load' });
      await attendrePret(page);
      await page.locator('label.choix-item').nth(0).click();
      await page.click('[data-etape="1"] [data-suivant]');
      await page.fill('#periode', 'Juin 2027');
      await page.fill('#lieu', 'Paris');
      await page.selectOption('#invites', { index: 1 });
      await page.click('[data-etape="2"] [data-suivant]');
      await page.fill('#nom', 'Camille Martin');
      await page.fill('#societe', 'Maison Test');
      await page.fill('#email', 'camille@exemple.fr');
      await page.click('[data-etape="3"] [type="submit"]');
      await page.dblclick('[data-etape="3"] [type="submit"]').catch(() => {});
      await attendre(700);
      const pass = await page.evaluate(() => ({
        remplis: document.querySelectorAll('[data-recap-champ].rempli').length,
        jauge: document.querySelector('[data-pass-jauge]').style.width,
        valide: document.querySelector('[data-recap]').classList.contains('valide'),
        message: !document.querySelector('[data-message-envoi]').hidden,
      }));
      if (pass.remplis !== 5) R.echec('brief', `le pass n’affiche que ${pass.remplis} champs sur 5`, { page: '/contact', taille: taille.nom });
      if (pass.jauge !== '100%') R.echec('brief', `la jauge du pass est à ${pass.jauge}`, { page: '/contact', taille: taille.nom });
      if (!pass.valide || !pass.message) R.echec('brief', 'l’envoi valide ne tamponne pas le pass ou n’affiche pas le message', { page: '/contact', taille: taille.nom });
    } finally { await ctx.close(); }
  }
}

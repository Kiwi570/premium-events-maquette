# Premium Events — maquette v1

Maquette du futur site de Premium Events (agence événementielle, Paris 9e), direction « Coup d'envoi » : le noir et le blanc du logo, le jaune du « & », la barre oblique de « /events », et les vraies photos d'événements de l'agence en grand.

Adresse prévue : https://premium-events-maquette.vercel.app

## Pages

| Page | Adresse | Contenu |
|---|---|---|
| Accueil | `/` | Ouverture coupée en biais, 25 clients, 5 métiers, The Alters, Paris Games Week, L'art de recevoir, méthode, engagements, appel final |
| Réalisations | `/realisations` | Filtres des 5 métiers (gardés dans l'adresse : `/realisations?metier=stands`), photos légendées, études de cas, index des clients |
| The Alters | `/the-alters` | Étude de cas (texte repris du site actuel) |
| Paris Games Week | `/paris-games-week` | Étude de cas (texte repris du site actuel) |
| Engagements | `/engagements` | EcoVadis, CLIMEET, achats, 9 chartes, Charte de la diversité |
| Contact | `/contact` | Demande de projet en 3 étapes (simulée), coordonnées, accès, carrière |
| 404 | — | « Vous êtes en coulisses. » |

Pages du site actuel non reprises en v1 (possibles en v2) : une page par métier, une page Clients à part, la page Carrière (offres d'emploi), d'autres études de cas dès que les textes existent.

## Travailler sur la maquette

```
node outils/generer.mjs                        pages HTML depuis donnees/ et source/
node _biblio/images/produire.mjs plan-images.json   images WebP (pipeline de la bibliothèque)
node _biblio/images/partage.mjs                images de partage 1200×630
node _audit/audit.mjs                          audit standard
```

- Textes : `donnees/textes/fr.json` ; métiers, clients, chartes : `donnees/*.json`. Ne jamais modifier les pages `.html` à la main.
- Styles : `assets/css/site.css` ; effets propres : `assets/js/site.js` ; forme de voile « coupe » ajoutée dans `assets/js/socle/voile.js`.
- `_suivi/` : relevé du site actuel, directions, plans (jamais mis en ligne).

## Fiche à compléter par Premium Events

À fournir avant la mise en ligne définitive :
- **Mentions légales** : à compléter (raison sociale, forme juridique, capital, SIRET, RCS, directeur de la publication).
- **Politique de confidentialité** : à compléter (formulaire de contact, durée de conservation, droits RGPD).
- **Hébergeur** : Vercel Inc., 440 N Barranca Ave #4133, Covina, CA 91723, États-Unis (adresse vérifiée le 20 novembre 2026).
- **Logos des 25 clients** : à fournir (la maquette les cite en texte, sans reproduire les logos des marques).
- **Chartes RSE** : les 9 PDF, si l'agence veut les rendre téléchargeables (la maquette indique « disponibles sur demande »).
- **Crédits photo** : nom des photographes des événements, si l'agence souhaite les citer.
- **Offres d'emploi** : lien ou liste, pour remplacer la seule candidature spontanée.

Informations retirées ou remplacées faute de source sur le site actuel :
- Aucun chiffre d'affaires, nombre d'événements, de collaborateurs ni témoignage : rien de tel n'existe sur le site actuel, donc rien n'est affiché.
- Galeries : les photos sont légendées d'après ce qu'elles montrent et la page où elles étaient publiées ; aucun nom de projet n'est attribué à une photo sans certitude.
- Horaires de l'agence : non publiés, donc aucun statut « ouvert maintenant ».

## Points à confirmer avec l'agence

- Ancienneté : le site actuel dit « près de 15 ans » (Activations) et « plus de 15 ans » (Stands). La maquette ne l'affiche pas en chiffre ; à trancher.
- Médaille EcoVadis : le badge du site indique « Silver, Top 15 %, SEP 2026 ». La maquette écrit « médaille d'argent EcoVadis, top 15 % » ; date et validité à confirmer.
- Photos de tennis : Roland-Garros est reconnaissable sur plusieurs photos d'hospitalités, mais le site actuel ne le cite pas. La maquette ne le nomme pas.
- Titre anglais du site actuel : « Entertainement » corrigé en « Entertainment ».
- Accès : « Métro Bonne Nouvelle ou Grands Boulevards, lignes 8 et 9 » (d'après le plan du site actuel), à confirmer.

## À la mise en ligne définitive

À retirer : la consigne `noindex` (balise robots dans `source/gabarits/commun.mjs` et en-tête `X-Robots-Tag` dans `vercel.json`), le formulaire simulé (à brancher sur un vrai envoi), les mentions « à compléter » du pied de page, la phrase « Maquette de démonstration ».

À garder : aucune image générée par IA n'est utilisée dans cette version (toutes les photos viennent du site de l'agence). Si des illustrations générées sont ajoutées plus tard, garder la mention « Illustration générée ».

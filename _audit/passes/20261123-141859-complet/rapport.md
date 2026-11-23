# Rapport d’audit

Projet : `premium-events-travail` · 23/11/2026 15:46:12 · 27 min · 7 page(s) · audit complet

## Résumé

- Statut : **16 échec(s)**
- Passe : `20261123-141859-complet` · version ?v=2
- Échecs : **16**
- À regarder : **19**
- Non lancé : **1**
- Contrôles passés : vercel.json (1), .vercelignore (1), robots.txt (1), numéro de version (1), langues (1), grille wouahou (3), mesures (273), balayage (6), films d’ouverture (12), films de transition (12), bords de l’écran (7), intro accélérable et passable (7), menu (1), clavier (7), liens et boutons (7), liens profonds (10), liens vers la page en cours (6), changements de hauteur (6), parcours du projet (1), tient dans l’écran (8), fluidité (12), défilement selon l’appareil (5), mouvement (12), effets du plan (11), souris immobile (6), vitesse (6), captures (1)

## Grille wouahou

| Point | État | Détail |
|---|---|---|
| 1. L’effet signature se manipule | ✓ présent | accueil |
| 2. L’intro devient la page | ✗ absent | versObjet absent |
| 3. La transition reprend le motif | ✓ présent | voile en coupe |
| 4. Quelque chose relie les sections et les pages | ✗ absent | sur aucune page |
| 5. Un titre fait l’événement sur chaque page | ✗ absent | sur aucune page |
| 6. La scène est un geste du métier | · sans objet | aucune scène épinglée marquée ni galerie générique |
| 7. L’action principale a un retour physique | ✗ absent | sur aucune page |

Le script vérifie les marques (`data-grille`, `data-iris-centre`, forme du voile, `versObjet`) ; la force et la justesse de chaque point se jugent sur les captures et les films.

## Échecs

### contraste insuffisant (2)

- **contraste insuffisant** — `/` — section#art-de-recevoir > div > p.recevoir-mots > span:nth-of-type(1) « L’art » — 1.11:1 (minimum 3:1) _(390×844 normal, 375×667 normal, 320×568 normal, 844×390 normal, 768×1024 normal, 1024×768 normal, +20)_
- **contraste insuffisant** — `/` — section#art-de-recevoir > div > p.recevoir-mots > span:nth-of-type(2) « de recevoir » — 1.11:1 (minimum 3:1) _(390×844 normal, 375×667 normal, 320×568 normal, 844×390 normal, 768×1024 normal, 1024×768 normal, +20)_

### texte sous 12 px (7)

- **texte sous 12 px** — `/contact` — div.pass-pendule > div.pass-carte > div.pass-tete:nth-of-type(1) > span « PASS PROJET » — 11.5 px _(320×568 normal, 375×667 normal, 390×844 normal, 844×390 normal, 768×1024 normal, 1024×768 normal, +33)_
- **texte sous 12 px** — `/contact` — div.pass-carte > dl > div:nth-of-type(1) > dt « ÉVÉNEMENT » — 11.8 px _(320×568 normal, 375×667 normal, 390×844 normal, 844×390 normal, 768×1024 normal, 1024×768 normal, +33)_
- **texte sous 12 px** — `/contact` — div.pass-carte > dl > div:nth-of-type(2) > dt « PÉRIODE » — 11.8 px _(320×568 normal, 375×667 normal, 390×844 normal, 844×390 normal, 768×1024 normal, 1024×768 normal, +33)_
- **texte sous 12 px** — `/contact` — div.pass-carte > dl > div:nth-of-type(3) > dt « LIEU » — 11.8 px _(320×568 normal, 375×667 normal, 390×844 normal, 844×390 normal, 768×1024 normal, 1024×768 normal, +33)_
- **texte sous 12 px** — `/contact` — div.pass-carte > dl > div:nth-of-type(4) > dt « INVITÉS » — 11.8 px _(320×568 normal, 375×667 normal, 390×844 normal, 844×390 normal, 768×1024 normal, 1024×768 normal, +33)_
- **texte sous 12 px** — `/contact` — div.pass-carte > dl > div:nth-of-type(5) > dt « CONTACT » — 11.8 px _(320×568 normal, 375×667 normal, 390×844 normal, 844×390 normal, 768×1024 normal, 1024×768 normal, +33)_
- **texte sous 12 px** — `/contact` — div.pass-pendule > div.pass-carte > div.pass-pied:nth-of-type(2) > span.pass-num:nth-of-type(2) « N° PE-2026 » — 11.5 px _(320×568 normal, 375×667 normal, 390×844 normal, 844×390 normal, 768×1024 normal, 1024×768 normal, +33)_

### image non chargée (3)

- **image non chargée** — `/paris-games-week` — main#contenu > div.visionneuse > figure.vis-cadre > img.vis-image _(320×568 normal, 375×667 normal, 390×844 normal, 844×390 normal, 768×1024 normal, 1024×768 normal, +33)_
- **image non chargée** — `/realisations` — main#contenu > div.visionneuse > figure.vis-cadre > img.vis-image _(320×568 normal, 375×667 normal, 390×844 normal, 844×390 normal, 768×1024 normal, 1024×768 normal, +33)_
- **image non chargée** — `/the-alters` — main#contenu > div.visionneuse > figure.vis-cadre > img.vis-image _(375×667 normal, 320×568 normal, 390×844 normal, 844×390 normal, 1024×768 normal, 768×1024 normal, +33)_

### separation (2)

- **separation** — `/` — la poignée ne se règle pas au clavier (Fin : 56, Début : 34) _(390×844)_
- **separation** — `/` — la poignée ne se règle pas au clavier (Fin : 56, Début : 22) _(1440×900)_

### section sans effet au défilement (1)

- **section sans effet au défilement** — `/contact` — section#debut.ouv.ouv--contact — ses effets (brief) ne bougent pas, ou sont cachés à cette taille _(390×844 normal)_

### effet qui dérive sous la souris immobile (1)

- **effet qui dérive sous la souris immobile** — `/` — [data-souris] separation — l’image change encore 6.7 % plus qu’au repos, 1,5 à 4,5 s après l’arrêt de la souris _(1366×768 souris)_

## À regarder

### « à compléter » visible (1)

- **« à compléter » visible** — `contact.html` — 1 fois hors du pied de page : remplacer par une phrase vraie qui oriente le visiteur (« Tarifs selon la saison, donnés à la réservation ») ou retirer l'élément, et le noter dans la fiche du README (sauf sens propre : « dossier à compléter »)

### grille : l’intro ne finit pas sur la page (point 2) (1)

- **grille : l’intro ne finit pas sur la page (point 2)** — versObjet(tl, …) absent de assets/js : l’intro doit finir sur l’objet d’ouverture (socle : import { versObjet } from './socle/index.js')

### grille : rien ne relie les sections (point 4) (1)

- **grille : rien ne relie les sections (point 4)** — sur aucune page : élément du métier qui relie les sections et les pages (fil dans la marge, objet unique qui change, lumière qui passe, carte, folio, frise), marqué data-grille="fil"

### grille : aucun titre ne fait l’événement (point 5) (1)

- **grille : aucun titre ne fait l’événement (point 5)** — sur aucune page : titre fabriqué par le métier, axe de police animé ou titre joué avec l’image (modules axes-au-defilement, titre-cousu, texte-grave-en-direct), marqué data-grille="typo"

### grille : action principale sans retour physique (point 7) (1)

- **grille : action principale sans retour physique (point 7)** — ajout au panier, réservation, envoi ou filtre : quelque chose de l’objet part, se pose ou se transforme (module envol-vers-le-panier, tampon « reçu »), marqué data-grille="retour"

### section sans visuel (7)

- **section sans visuel** — `/` — section#clients « ILS NOUS FONT CONFIANCE 25 Emirates Accor Lavazza  » — une belle photo ou un visuel animé quand le contenu s’y prête ; une section de texte peut rester typographique (v11) _(390×844 normal, 375×667 normal, 320×568 normal, 844×390 normal, 768×1024 normal, 1024×768 normal, +33)_
- **section sans visuel** — `/contact` — section#debut « CONTACT Parlons de votre prochain événement. Comme » — une belle photo ou un visuel animé quand le contenu s’y prête ; une section de texte peut rester typographique (v11) _(320×568 normal, 375×667 normal, 1000×560 normal, 320×568 sansJs, 375×667 sansJs, 320×568 sansWebgl, +3)_
- **section sans visuel** — `/contact` — section#debut « CONTACT Parlons de votre prochain événement. Décri » — une belle photo ou un visuel animé quand le contenu s’y prête ; une section de texte peut rester typographique (v11) _(390×844 normal, 768×1024 normal, 1024×768 normal, 1280×720 normal, 1440×900 normal, 1366×768 normal, +21)_
- **section sans visuel** — `/contact` — section#debut « Parlons de votre prochain événement. Commencer la  » — une belle photo ou un visuel animé quand le contenu s’y prête ; une section de texte peut rester typographique (v11) _(844×390 normal, 844×390 sansJs, 844×390 sansWebgl)_
- **section sans visuel** — `/paris-games-week` — section#chiffres « près de 10 ans à la Paris Games Week 8 marques acc » — une belle photo ou un visuel animé quand le contenu s’y prête ; une section de texte peut rester typographique (v11) _(320×568 normal, 375×667 normal, 390×844 normal, 844×390 normal, 768×1024 normal, 1024×768 normal, +33)_
- **section sans visuel** — `/realisations` — section#clients « 25 MARQUES Ils nous font confiance. Emirates Accor » — une belle photo ou un visuel animé quand le contenu s’y prête ; une section de texte peut rester typographique (v11) _(320×568 normal, 375×667 normal, 390×844 normal, 844×390 normal, 768×1024 normal, 1024×768 normal, +33)_
- **section sans visuel** — `/the-alters` — section#chiffres « 1 camion vitré 5 mannequins à bord 2 marques réuni » — une belle photo ou un visuel animé quand le contenu s’y prête ; une section de texte peut rester typographique (v11) _(375×667 normal, 320×568 normal, 390×844 normal, 844×390 normal, 1024×768 normal, 768×1024 normal, +33)_

### retour avant : changement brusque (1)

- **retour avant : changement brusque** — `/realisations` — à 87 ms (différence 61 %) (films/retour-avant-1366.png) _(1366×768 retour avant)_

### retour arrière : changement brusque (1)

- **retour arrière : changement brusque** — `/` — à 83 ms (différence 48 %) (films/retour-arrière-390.png) _(390×844 retour arrière)_

### rechargement au milieu de la page (3)

- **rechargement au milieu de la page** — `/engagements` — écran différent à la même position après rechargement (7.3 %), voir comparaisons/rechargement-engagements-*.png _(1366×768)_
- **rechargement au milieu de la page** — `/paris-games-week` — écran différent à la même position après rechargement (25.7 %), voir comparaisons/rechargement-paris-games-week-*.png _(1366×768)_
- **rechargement au milieu de la page** — `/the-alters` — écran différent à la même position après rechargement (17.3 %), voir comparaisons/rechargement-the-alters-*.png _(1366×768)_

### effet qui ne bouge pas au défilement (2)

- **effet qui ne bouge pas au défilement** — `/` — div.galerie-piste — galerie-pgw : il ne bouge ni au défilement ni tout seul à cette taille (effet au survol, au clic, ou réservé à l'ordinateur ?) ; il ne compte pas comme effet de section _(390×844 normal)_
- **effet qui ne bouge pas au défilement** — `/contact` — aside.recap.pass — brief : il ne bouge ni au défilement ni tout seul à cette taille (effet au survol, au clic, ou réservé à l'ordinateur ?) ; il ne compte pas comme effet de section _(390×844 normal)_

## Non lancé

- **Safari (WebKit)** : WebKit ne peut pas s’installer ici : vérification à faire dans Safari sur le Mac (liste dans le rapport)

### À vérifier dans Safari sur le Mac (WebKit indisponible ici)

- Ouverture de chaque page : rien qui clignote, intro complète au premier chargement et au rechargement.
- Changement de page : le voile couvre l’écran, pas de page blanche ; retour arrière sans intro ni voile resté.
- Défilement : fluide (natif), en-tête qui se cache et revient sans clignoter, sections épinglées entières.
- Menu sur iPhone (mode Responsive de Safari) : ouverture, fermeture, page bloquée derrière.
- Polices, images, mention « Illustration générée », formulaires et barre fixe du bas.

## Repères

- Numéro de version des fichiers : ?v=2
- Journal v2 : 2 étape(s) notée(s), 18 min de travail pour 75 min de budget, 0 min d’attente de l’utilisateur.
- Accessibilité : axe-core 4.12.1 en plus des contrôles intégrés.
- Ouverture / (1366×768) : 2581 ms depuis le premier octet
- Ouverture /contact (1366×768) : 2335 ms depuis le premier octet
- Ouverture /engagements (1366×768) : 2348 ms depuis le premier octet
- Ouverture /paris-games-week (1366×768) : 2428 ms depuis le premier octet
- Ouverture /realisations (1366×768) : 2416 ms depuis le premier octet
- Ouverture /the-alters (1366×768) : 2422 ms depuis le premier octet
- Ouverture / (390×844) : 2454 ms depuis le premier octet
- film de l'ouverture / 390×844 : réussi à la tentative 2 (avant : cdpSession.send: Protocol error (Page.startScreencast): Not attached to an active page)
- Ouverture /contact (390×844) : 2341 ms depuis le premier octet
- film de l'ouverture /contact 390×844 : réussi à la tentative 2 (avant : cdpSession.send: Protocol error (Page.startScreencast): Not attached to an active page)
- Ouverture /engagements (390×844) : 2335 ms depuis le premier octet
- Ouverture /paris-games-week (390×844) : 2385 ms depuis le premier octet
- Ouverture /realisations (390×844) : 2427 ms depuis le premier octet
- Ouverture /the-alters (390×844) : 2401 ms depuis le premier octet
- bords de l’écran / 1920×1080 : réussi à la tentative 2 (avant : cdpSession.send: Protocol error (Page.startScreencast): Not attached to an active page)
- Bords de l’écran : 369 images d’intro, 63 de voile et 221 de menu jugées (panneau immobile couvrant tout l’écran), barre de défilement classique de 15 px.
- Tient dans l'écran /contact : aucune section épinglée ou plein écran.
- Tient dans l'écran /engagements : aucune section épinglée ou plein écran.
- Tient dans l'écran /paris-games-week : aucune section épinglée ou plein écran.
- Tient dans l'écran /realisations : aucune section épinglée ou plein écran.
- Tient dans l'écran /the-alters : aucune section épinglée ou plein écran.
- Fluidité / 1366×768 (molette) : 0 % d'images lentes sur 428, tâche la plus longue 55 ms
- Fluidité /contact 1366×768 (molette) : 0 % d'images lentes sur 174, tâche la plus longue 0 ms
- Fluidité /engagements 1366×768 (molette) : 0 % d'images lentes sur 282, tâche la plus longue 0 ms
- Fluidité /paris-games-week 1366×768 (molette) : 0 % d'images lentes sur 333, tâche la plus longue 0 ms
- Fluidité /realisations 1366×768 (molette) : 0 % d'images lentes sur 381, tâche la plus longue 0 ms
- Fluidité /the-alters 1366×768 (molette) : 0 % d'images lentes sur 329, tâche la plus longue 0 ms
- Fluidité / 390×844 (doigt) : 0 % d'images lentes sur 1361, tâche la plus longue 0 ms
- Fluidité /contact 390×844 (doigt) : 0 % d'images lentes sur 1341, tâche la plus longue 0 ms
- Fluidité /engagements 390×844 (doigt) : 0 % d'images lentes sur 1351, tâche la plus longue 0 ms
- Fluidité /paris-games-week 390×844 (doigt) : 0 % d'images lentes sur 1355, tâche la plus longue 0 ms
- Fluidité /realisations 390×844 (doigt) : 0 % d'images lentes sur 1357, tâche la plus longue 0 ms
- Fluidité /the-alters 390×844 (doigt) : 0 % d'images lentes sur 1359, tâche la plus longue 0 ms
- Vitesse / : 0.72 s de calcul au chargement (téléphone ralenti).
- Vitesse /contact : 0.40 s de calcul au chargement (téléphone ralenti).
- Vitesse /engagements : 0.34 s de calcul au chargement (téléphone ralenti).
- Vitesse /paris-games-week : 0.34 s de calcul au chargement (téléphone ralenti).
- Vitesse /realisations : 0.44 s de calcul au chargement (téléphone ralenti).
- Vitesse /the-alters : 0.28 s de calcul au chargement (téléphone ralenti).

## Fichiers

- Captures : `captures/` (téléphone, tablette, ordinateur, écran par écran)
- Films : `films/` (planches contact de l’ouverture, des transitions, des retours, des ancres et des épinglages ; ⚠ = image signalée)
- Comparaisons : `comparaisons/`
- Détail complet : `rapport.json`


## Relancer seulement ce qui a échoué

Après correction, si elle ne touche que ces pages (sinon, relancer l’audit standard en entier) :

```
node _audit/audit.mjs --complet --pages=/,/contact,/paris-games-week,/realisations,/the-alters --seulement=fichiers,mesures,parcours,mouvement
```

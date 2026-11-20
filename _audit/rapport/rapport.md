# Rapport d’audit

Projet : `premium-events-maquette` · 20/11/2026 19:51:14 · 25 min · 7 page(s) · audit complet

## Résumé

- Statut : **tout a tourné, aucun échec**
- Passe : `20261120-182549-complet` · version ?v=1
- Échecs : **0**
- À regarder : **20**
- Non lancé : **1**
- Contrôles passés : vercel.json (1), .vercelignore (1), robots.txt (1), numéro de version (1), langues (1), grille wouahou (2), mesures (273), balayage (6), films d’ouverture (12), films de transition (12), bords de l’écran (7), intro accélérable et passable (7), menu (1), clavier (7), liens et boutons (7), liens profonds (10), liens vers la page en cours (6), changements de hauteur (6), tient dans l’écran (8), fluidité (12), défilement selon l’appareil (5), mouvement (12), effets du plan (9), souris immobile (6), vitesse (6), captures (1)

## Grille wouahou

| Point | État | Détail |
|---|---|---|
| 1. L’effet signature se manipule | ✗ absent | aucun data-grille="manipuler" sur l’accueil |
| 2. L’intro devient la page | ✗ absent | versObjet absent |
| 3. La transition reprend le motif | ✓ présent | voile en coupe |
| 4. Quelque chose relie les sections et les pages | ✗ absent | sur aucune page |
| 5. Un titre fait l’événement sur chaque page | ✗ absent | sur aucune page |
| 6. La scène est un geste du métier | · sans objet | aucune scène épinglée marquée ni galerie générique |
| 7. L’action principale a un retour physique | ✗ absent | sur aucune page |

Le script vérifie les marques (`data-grille`, `data-iris-centre`, forme du voile, `versObjet`) ; la force et la justesse de chaque point se jugent sur les captures et les films.

## Passes de cette version (?v=1)

Chaque passe garde son rapport dans `_audit/passes/` : une relance ciblée ne fait pas disparaître la preuve d’une passe plus large.

| Passe | Niveau | Pages | Étapes | Échecs | À regarder | Non lancé | Statut |
|---|---|---|---|---:|---:|---:|---|
| 20261120-170449-standard | standard | toutes | toutes | 128 | 58 | 1 | échecs |
| 20261120-172655-standard | standard | toutes | toutes | 5 | 16 | 1 | échecs |
| 20261120-174545-complet-partiel | complet | toutes | mesures, ecran | 11 | 7 | 0 | échecs |
| 20261120-175355-complet-cible-partiel | complet | /,/404,/engagements,/paris-games-week | fichiers, mesures, ecran | 3 | 3 | 0 | échecs |
| 20261120-175926-standard | standard | toutes | toutes | 0 | 17 | 1 | complet |
| 20261120-181809-complet-cible-partiel | complet | /realisations,/the-alters,/contact,/ | mesures, ecran | 0 | 6 | 0 | complet |
| **20261120-182549-complet** (celle-ci) | complet | toutes | toutes | 0 | 20 | 1 | complet |

## Échecs

Aucun.

## À regarder

### « à compléter » visible (1)

- **« à compléter » visible** — `contact.html` — 1 fois hors du pied de page : remplacer par une phrase vraie qui oriente le visiteur (« Tarifs selon la saison, donnés à la réservation ») ou retirer l'élément, et le noter dans la fiche du README (sauf sens propre : « dossier à compléter »)

### numéro de version (1)

- **numéro de version** — ?v=1 est celui de la dernière livraison : à changer avant de livrer

### grille : effet signature qui ne se manipule pas (point 1) (1)

- **grille : effet signature qui ne se manipule pas (point 1)** — `/` — aucun élément data-grille="manipuler" sur l’accueil : objet à attraper, faire tourner ou glisser (module objet-a-faire-tourner, lumiere-au-pointeur…)

### grille : l’intro ne finit pas sur la page (point 2) (1)

- **grille : l’intro ne finit pas sur la page (point 2)** — versObjet(tl, …) absent de assets/js : l’intro doit finir sur l’objet d’ouverture (socle : import { versObjet } from './socle/index.js')

### grille : rien ne relie les sections (point 4) (1)

- **grille : rien ne relie les sections (point 4)** — sur aucune page : élément du métier qui relie les sections et les pages (fil dans la marge, objet unique qui change, lumière qui passe, carte, folio, frise), marqué data-grille="fil"

### grille : aucun titre ne fait l’événement (point 5) (1)

- **grille : aucun titre ne fait l’événement (point 5)** — sur aucune page : titre fabriqué par le métier, axe de police animé ou titre joué avec l’image (modules axes-au-defilement, titre-cousu, texte-grave-en-direct), marqué data-grille="typo"

### grille : action principale sans retour physique (point 7) (1)

- **grille : action principale sans retour physique (point 7)** — ajout au panier, réservation, envoi ou filtre : quelque chose de l’objet part, se pose ou se transforme (module envol-vers-le-panier, tampon « reçu »), marqué data-grille="retour"

### section sans visuel (7)

- **section sans visuel** — `/` — section#clients « ILS NOUS FONT CONFIANCE 25 Emirates Accor Lavazza  » — une belle photo ou un visuel animé quand le contenu s’y prête ; une section de texte peut rester typographique (v11) _(390×844 normal, 320×568 normal, 375×667 normal, 844×390 normal, 1024×768 normal, 768×1024 normal, +33)_
- **section sans visuel** — `/contact` — section#debut « CONTACT Parlons de votre prochain événement. Comme » — une belle photo ou un visuel animé quand le contenu s’y prête ; une section de texte peut rester typographique (v11) _(320×568 normal, 375×667 normal, 1000×560 normal, 320×568 sansJs, 375×667 sansJs, 320×568 sansWebgl, +3)_
- **section sans visuel** — `/contact` — section#debut « CONTACT Parlons de votre prochain événement. Décri » — une belle photo ou un visuel animé quand le contenu s’y prête ; une section de texte peut rester typographique (v11) _(390×844 normal, 768×1024 normal, 1024×768 normal, 1280×720 normal, 1366×768 normal, 1440×900 normal, +21)_
- **section sans visuel** — `/contact` — section#debut « Parlons de votre prochain événement. Commencer la  » — une belle photo ou un visuel animé quand le contenu s’y prête ; une section de texte peut rester typographique (v11) _(844×390 normal, 844×390 sansJs, 844×390 sansWebgl)_
- **section sans visuel** — `/paris-games-week` — section#chiffres « près de 10 ans à la Paris Games Week 8 marques acc » — une belle photo ou un visuel animé quand le contenu s’y prête ; une section de texte peut rester typographique (v11) _(320×568 normal, 375×667 normal, 390×844 normal, 844×390 normal, 768×1024 normal, 1024×768 normal, +33)_
- **section sans visuel** — `/realisations` — section#clients « 25 MARQUES Ils nous font confiance. Emirates Accor » — une belle photo ou un visuel animé quand le contenu s’y prête ; une section de texte peut rester typographique (v11) _(320×568 normal, 375×667 normal, 390×844 normal, 844×390 normal, 768×1024 normal, 1024×768 normal, +33)_
- **section sans visuel** — `/the-alters` — section#chiffres « 1 camion vitré 5 mannequins à bord 2 marques réuni » — une belle photo ou un visuel animé quand le contenu s’y prête ; une section de texte peut rester typographique (v11) _(320×568 normal, 375×667 normal, 390×844 normal, 844×390 normal, 768×1024 normal, 1024×768 normal, +33)_

### retour avant : changement brusque (2)

- **retour avant : changement brusque** — `/realisations` — à 70 ms (différence 65 %) (films/retour-avant-1366.png) _(1366×768 retour avant)_
- **retour avant : changement brusque** — `/realisations` — à 80 ms (différence 62 %) (films/retour-avant-390.png) _(390×844 retour avant)_

### rechargement au milieu de la page (3)

- **rechargement au milieu de la page** — `/engagements` — écran différent à la même position après rechargement (7.3 %), voir comparaisons/rechargement-engagements-*.png _(1366×768)_
- **rechargement au milieu de la page** — `/paris-games-week` — écran différent à la même position après rechargement (25.7 %), voir comparaisons/rechargement-paris-games-week-*.png _(1366×768)_
- **rechargement au milieu de la page** — `/the-alters` — écran différent à la même position après rechargement (17.2 %), voir comparaisons/rechargement-the-alters-*.png _(1366×768)_

### effet qui ne bouge pas au défilement (1)

- **effet qui ne bouge pas au défilement** — `/` — div.galerie-piste — galerie-pgw : il ne bouge ni au défilement ni tout seul à cette taille (effet au survol, au clic, ou réservé à l'ordinateur ?) ; il ne compte pas comme effet de section _(390×844 normal)_

## Non lancé

- **Safari (WebKit)** : WebKit ne peut pas s’installer ici : vérification à faire dans Safari sur le Mac (liste dans le rapport)

### À vérifier dans Safari sur le Mac (WebKit indisponible ici)

- Ouverture de chaque page : rien qui clignote, intro complète au premier chargement et au rechargement.
- Changement de page : le voile couvre l’écran, pas de page blanche ; retour arrière sans intro ni voile resté.
- Défilement : fluide (natif), en-tête qui se cache et revient sans clignoter, sections épinglées entières.
- Menu sur iPhone (mode Responsive de Safari) : ouverture, fermeture, page bloquée derrière.
- Polices, images, mention « Illustration générée », formulaires et barre fixe du bas.

## Repères

- Numéro de version des fichiers : ?v=1
- Journal v1 : 7 étape(s) notée(s), 117 min de travail pour 149 min de budget, 2 min d’attente de l’utilisateur.
- Journal : « audit standard, passe des formats, regard neuf et corrections » 77 min pour 29 prévues.
- Accessibilité : axe-core 4.12.1 en plus des contrôles intégrés.
- Ouverture / (1366×768) : 2617 ms depuis le premier octet
- Ouverture /contact (1366×768) : 2351 ms depuis le premier octet
- film de l'ouverture /contact 1366×768 : réussi à la tentative 2 (avant : cdpSession.send: Protocol error (Page.startScreencast): Not attached to an active page)
- Ouverture /engagements (1366×768) : 2392 ms depuis le premier octet
- film de l'ouverture /engagements 1366×768 : réussi à la tentative 2 (avant : cdpSession.send: Protocol error (Page.startScreencast): Not attached to an active page)
- Ouverture /paris-games-week (1366×768) : 2391 ms depuis le premier octet
- film de l'ouverture /paris-games-week 1366×768 : réussi à la tentative 2 (avant : cdpSession.send: Protocol error (Page.startScreencast): Not attached to an active page)
- Ouverture /realisations (1366×768) : 2454 ms depuis le premier octet
- Ouverture /the-alters (1366×768) : 2416 ms depuis le premier octet
- Ouverture / (390×844) : 2461 ms depuis le premier octet
- Ouverture /contact (390×844) : 2322 ms depuis le premier octet
- film de l'ouverture /contact 390×844 : réussi à la tentative 2 (avant : cdpSession.send: Protocol error (Page.startScreencast): Not attached to an active page)
- Ouverture /engagements (390×844) : 2325 ms depuis le premier octet
- Ouverture /paris-games-week (390×844) : 2411 ms depuis le premier octet
- Ouverture /realisations (390×844) : 2429 ms depuis le premier octet
- film de l'ouverture /realisations 390×844 : réussi à la tentative 2 (avant : cdpSession.send: Protocol error (Page.startScreencast): Not attached to an active page)
- Ouverture /the-alters (390×844) : 2394 ms depuis le premier octet
- bords de l’écran /engagements 1366×768 : réussi à la tentative 2 (avant : cdpSession.send: Protocol error (Page.startScreencast): Not attached to an active page)
- bords de l’écran /realisations 1366×768 : réussi à la tentative 2 (avant : cdpSession.send: Protocol error (Page.startScreencast): Not attached to an active page)
- Bords de l’écran : 363 images d’intro, 52 de voile et 224 de menu jugées (panneau immobile couvrant tout l’écran), barre de défilement classique de 15 px.
- Aucun parcours propre au projet (_audit/parcours.mjs) : filtres, calculateurs, panier, réservation, fenêtres testés seulement par les contrôles généraux.
- Tient dans l'écran /contact : aucune section épinglée ou plein écran.
- Tient dans l'écran /engagements : aucune section épinglée ou plein écran.
- Tient dans l'écran /paris-games-week : aucune section épinglée ou plein écran.
- Tient dans l'écran /realisations : aucune section épinglée ou plein écran.
- Tient dans l'écran /the-alters : aucune section épinglée ou plein écran.
- Fluidité / 1366×768 (molette) : 0 % d'images lentes sur 432, tâche la plus longue 0 ms
- Fluidité /contact 1366×768 (molette) : 0 % d'images lentes sur 183, tâche la plus longue 0 ms
- Fluidité /engagements 1366×768 (molette) : 0 % d'images lentes sur 299, tâche la plus longue 0 ms
- Fluidité /paris-games-week 1366×768 (molette) : 0 % d'images lentes sur 331, tâche la plus longue 0 ms
- Fluidité /realisations 1366×768 (molette) : 0 % d'images lentes sur 395, tâche la plus longue 0 ms
- Fluidité /the-alters 1366×768 (molette) : 0 % d'images lentes sur 335, tâche la plus longue 0 ms
- Fluidité / 390×844 (doigt) : 0 % d'images lentes sur 1357, tâche la plus longue 0 ms
- Fluidité /contact 390×844 (doigt) : 0 % d'images lentes sur 1346, tâche la plus longue 0 ms
- Fluidité /engagements 390×844 (doigt) : 0 % d'images lentes sur 1345, tâche la plus longue 0 ms
- Fluidité /paris-games-week 390×844 (doigt) : 0 % d'images lentes sur 1363, tâche la plus longue 0 ms
- Fluidité /realisations 390×844 (doigt) : 0 % d'images lentes sur 1349, tâche la plus longue 0 ms
- Fluidité /the-alters 390×844 (doigt) : 0 % d'images lentes sur 1362, tâche la plus longue 0 ms
- Vitesse / : 0.76 s de calcul au chargement (téléphone ralenti).
- Vitesse /contact : 0.25 s de calcul au chargement (téléphone ralenti).
- Vitesse /engagements : 0.31 s de calcul au chargement (téléphone ralenti).
- Vitesse /paris-games-week : 0.28 s de calcul au chargement (téléphone ralenti).
- Vitesse /realisations : 0.47 s de calcul au chargement (téléphone ralenti).
- Vitesse /the-alters : 0.28 s de calcul au chargement (téléphone ralenti).

## Fichiers

- Captures : `captures/` (téléphone, tablette, ordinateur, écran par écran)
- Films : `films/` (planches contact de l’ouverture, des transitions, des retours, des ancres et des épinglages ; ⚠ = image signalée)
- Comparaisons : `comparaisons/`
- Détail complet : `rapport.json`

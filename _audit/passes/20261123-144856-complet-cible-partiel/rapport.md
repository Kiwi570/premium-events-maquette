# Rapport d’audit

Projet : `premium-events-travail` · 23/11/2026 16:01:46 · 13 min · 5 page(s) · audit complet ciblé sur /,/contact,/paris-games-week,/realisations,/the-alters (étapes : fichiers, grille, mesures, parcours, mouvement)

## Résumé

- Statut : **1 échec(s)**
- Passe : `20261123-144856-complet-cible-partiel` · version ?v=2
- Échecs : **1**
- À regarder : **12**
- Non lancé : **0**
- Contrôles passés : vercel.json (1), .vercelignore (1), robots.txt (1), numéro de version (1), langues (1), grille wouahou (5), mesures (195), balayage (5), intro accélérable et passable (7), menu (1), clavier (5), liens et boutons (5), liens profonds (10), liens vers la page en cours (5), changements de hauteur (5), parcours du projet (1), mouvement (10), effets du plan (11), souris immobile (5)

## Grille wouahou

| Point | État | Détail |
|---|---|---|
| 1. L’effet signature se manipule | ✓ présent | accueil |
| 2. L’intro devient la page | ✗ absent | versObjet absent |
| 3. La transition reprend le motif | ✓ présent | voile en coupe |
| 4. Quelque chose relie les sections et les pages | ✗ absent | sur aucune page |
| 5. Un titre fait l’événement sur chaque page | ✓ présent | sur les 6 page(s) |
| 6. La scène est un geste du métier | · sans objet | aucune scène épinglée marquée ni galerie générique |
| 7. L’action principale a un retour physique | ✓ présent | sur /contact |

Le script vérifie les marques (`data-grille`, `data-iris-centre`, forme du voile, `versObjet`) ; la force et la justesse de chaque point se jugent sur les captures et les films.

## Passes de cette version (?v=2)

Chaque passe garde son rapport dans `_audit/passes/` : une relance ciblée ne fait pas disparaître la preuve d’une passe plus large.

| Passe | Niveau | Pages | Étapes | Échecs | À regarder | Non lancé | Statut |
|---|---|---|---|---:|---:|---:|---|
| 20261123-141859-complet | complet | toutes | toutes | 16 | 19 | 1 | échecs |
| **20261123-144856-complet-cible-partiel** (celle-ci) | complet | /,/contact,/paris-games-week,/realisations,/the-alters | fichiers, grille, mesures, parcours, mouvement | 1 | 12 | 0 | échecs |

## Échecs

### effet qui dérive sous la souris immobile (1)

- **effet qui dérive sous la souris immobile** — `/` — [data-souris] separation — l’image change encore 6.7 % plus qu’au repos, 1,5 à 4,5 s après l’arrêt de la souris _(1366×768 souris)_

## À regarder

### grille : l’intro ne finit pas sur la page (point 2) (1)

- **grille : l’intro ne finit pas sur la page (point 2)** — versObjet(tl, …) absent de assets/js : l’intro doit finir sur l’objet d’ouverture (socle : import { versObjet } from './socle/index.js')

### grille : rien ne relie les sections (point 4) (1)

- **grille : rien ne relie les sections (point 4)** — sur aucune page : élément du métier qui relie les sections et les pages (fil dans la marge, objet unique qui change, lumière qui passe, carte, folio, frise), marqué data-grille="fil"

### section sans visuel (7)

- **section sans visuel** — `/` — section#clients « ILS NOUS FONT CONFIANCE 25 Emirates Accor Lavazza  » — une belle photo ou un visuel animé quand le contenu s’y prête ; une section de texte peut rester typographique (v11) _(390×844 normal, 375×667 normal, 320×568 normal, 844×390 normal, 768×1024 normal, 1024×768 normal, +33)_
- **section sans visuel** — `/contact` — section#debut « CONTACT Parlons de votre prochain événement. Comme » — une belle photo ou un visuel animé quand le contenu s’y prête ; une section de texte peut rester typographique (v11) _(320×568 normal, 375×667 normal, 1000×560 normal, 320×568 sansJs, 375×667 sansJs, 320×568 sansWebgl, +3)_
- **section sans visuel** — `/contact` — section#debut « CONTACT Parlons de votre prochain événement. Décri » — une belle photo ou un visuel animé quand le contenu s’y prête ; une section de texte peut rester typographique (v11) _(390×844 normal, 768×1024 normal, 1024×768 normal, 1366×768 normal, 1280×720 normal, 1440×900 normal, +21)_
- **section sans visuel** — `/contact` — section#debut « Parlons de votre prochain événement. Commencer la  » — une belle photo ou un visuel animé quand le contenu s’y prête ; une section de texte peut rester typographique (v11) _(844×390 normal, 844×390 sansJs, 844×390 sansWebgl)_
- **section sans visuel** — `/paris-games-week` — section#chiffres « près de 10 ans à la Paris Games Week 8 marques acc » — une belle photo ou un visuel animé quand le contenu s’y prête ; une section de texte peut rester typographique (v11) _(320×568 normal, 375×667 normal, 390×844 normal, 844×390 normal, 768×1024 normal, 1024×768 normal, +33)_
- **section sans visuel** — `/realisations` — section#clients « 25 MARQUES Ils nous font confiance. Emirates Accor » — une belle photo ou un visuel animé quand le contenu s’y prête ; une section de texte peut rester typographique (v11) _(320×568 normal, 375×667 normal, 390×844 normal, 844×390 normal, 768×1024 normal, 1024×768 normal, +33)_
- **section sans visuel** — `/the-alters` — section#chiffres « 1 camion vitré 5 mannequins à bord 2 marques réuni » — une belle photo ou un visuel animé quand le contenu s’y prête ; une section de texte peut rester typographique (v11) _(320×568 normal, 375×667 normal, 390×844 normal, 844×390 normal, 768×1024 normal, 1024×768 normal, +33)_

### rechargement au milieu de la page (2)

- **rechargement au milieu de la page** — `/paris-games-week` — écran différent à la même position après rechargement (25.7 %), voir comparaisons/rechargement-paris-games-week-*.png _(1366×768)_
- **rechargement au milieu de la page** — `/the-alters` — écran différent à la même position après rechargement (17.3 %), voir comparaisons/rechargement-the-alters-*.png _(1366×768)_

### effet qui ne bouge pas au défilement (1)

- **effet qui ne bouge pas au défilement** — `/` — div.galerie-piste — galerie-pgw : il ne bouge ni au défilement ni tout seul à cette taille (effet au survol, au clic, ou réservé à l'ordinateur ?) ; il ne compte pas comme effet de section _(390×844 normal)_

## Non lancé

Tout a été lancé.


## Repères

- Numéro de version des fichiers : ?v=2
- Journal v2 : 2 étape(s) notée(s), 18 min de travail pour 75 min de budget, 0 min d’attente de l’utilisateur.
- Accessibilité : axe-core 4.12.1 en plus des contrôles intégrés.

## Fichiers

- Captures : `captures/` (téléphone, tablette, ordinateur, écran par écran)
- Films : `films/` (planches contact de l’ouverture, des transitions, des retours, des ancres et des épinglages ; ⚠ = image signalée)
- Comparaisons : `comparaisons/`
- Détail complet : `rapport.json`


## Relancer seulement ce qui a échoué

Après correction, si elle ne touche que ces pages (sinon, relancer l’audit standard en entier) :

```
node _audit/audit.mjs --complet --pages=/ --seulement=fichiers,mouvement
```

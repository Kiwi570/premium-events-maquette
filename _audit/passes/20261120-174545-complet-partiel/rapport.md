# Rapport d’audit

Projet : `premium-events-maquette` · 20/11/2026 18:53:19 · 8 min · 7 page(s) · audit complet (étapes : mesures, ecran)

## Résumé

- Statut : **11 échec(s)**
- Passe : `20261120-174545-complet-partiel` · version ?v=1
- Échecs : **11**
- À regarder : **7**
- Non lancé : **0**
- Contrôles passés : mesures (273), balayage (6), tient dans l’écran (8), films des épinglages (1)

## Passes de cette version (?v=1)

Chaque passe garde son rapport dans `_audit/passes/` : une relance ciblée ne fait pas disparaître la preuve d’une passe plus large.

| Passe | Niveau | Pages | Étapes | Échecs | À regarder | Non lancé | Statut |
|---|---|---|---|---:|---:|---:|---|
| 20261120-170449-standard | standard | toutes | toutes | 128 | 58 | 1 | échecs |
| 20261120-172655-standard | standard | toutes | toutes | 5 | 16 | 1 | échecs |
| **20261120-174545-complet-partiel** (celle-ci) | complet | toutes | mesures, ecran | 11 | 7 | 0 | échecs |

## Échecs

### premier écran : information clé hors de l’écran (4)

- **premier écran : information clé hors de l’écran** — `/` — section#debut > div.ouv-texte:nth-of-type(1) > p.ouv-info.ouv-f:nth-of-type(4) « Paris 9e · 01 72 69 43 43 » _(390×844 sansJs, 1000×560 sansJs)_
- **premier écran : information clé hors de l’écran** — `/404` — section#debut > div.conteneur.ouv-404-texte > p.ouv-info.ouv-f:nth-of-type(4) « 01 72 69 43 43 » _(320×568 sansJs)_
- **premier écran : information clé hors de l’écran** — `/engagements` — section#debut > div.conteneur.ouv-eng:nth-of-type(1) > div.ouv-eng-texte:nth-of-type(1) > p.ouv-info.ouv-f:nth-of-type(4) « Médaille d’argent EcoVadis · top 15 % » _(1000×560 normal, 1000×560 sansJs, 1000×560 sansWebgl)_
- **premier écran : information clé hors de l’écran** — `/paris-games-week` — section#debut > div.ouv-etude-texte:nth-of-type(1) > p.ouv-info.ouv-f:nth-of-type(5) « Près de 10 ans à la PGW » _(1000×560 sansJs)_

### premier écran : bouton principal hors de l’écran (1)

- **premier écran : bouton principal hors de l’écran** — `/engagements` — div.conteneur.ouv-eng:nth-of-type(1) > div.ouv-eng-texte:nth-of-type(1) > p.ouv-actions.ouv-f:nth-of-type(3) > a.bouton.bouton--noir « Parler de votre projet » _(1000×560 normal, 1000×560 sansJs, 1000×560 sansWebgl)_

### épinglage : image isolée différente (flash) (6)

- **épinglage : image isolée différente (flash)** — `/` — à 267 ms (films/epinglage-1.png) _(1366×768)_
- **épinglage : image isolée différente (flash)** — `/` — à 283 ms (films/epinglage-1.png) _(1366×768)_
- **épinglage : image isolée différente (flash)** — `/` — à 300 ms (films/epinglage-1.png) _(1366×768)_
- **épinglage : image isolée différente (flash)** — `/` — à 317 ms (films/epinglage-1.png) _(1366×768)_
- **épinglage : image isolée différente (flash)** — `/` — à 333 ms (films/epinglage-1.png) _(1366×768)_
- **épinglage : image isolée différente (flash)** — `/` — à 350 ms (films/epinglage-1.png) _(1366×768)_

## À regarder

### section sans visuel (7)

- **section sans visuel** — `/` — section#clients « ILS NOUS FONT CONFIANCE 25 Emirates Accor Lavazza  » — une belle photo ou un visuel animé quand le contenu s’y prête ; une section de texte peut rester typographique (v11) _(390×844 normal, 375×667 normal, 320×568 normal, 844×390 normal, 768×1024 normal, 1024×768 normal, +33)_
- **section sans visuel** — `/contact` — section#debut « CONTACT Parlons de votre prochain événement. Comme » — une belle photo ou un visuel animé quand le contenu s’y prête ; une section de texte peut rester typographique (v11) _(320×568 normal, 375×667 normal, 320×568 sansJs, 375×667 sansJs, 320×568 sansWebgl, 375×667 sansWebgl)_
- **section sans visuel** — `/contact` — section#debut « CONTACT Parlons de votre prochain événement. Décri » — une belle photo ou un visuel animé quand le contenu s’y prête ; une section de texte peut rester typographique (v11) _(390×844 normal, 768×1024 normal, 1024×768 normal, 1000×560 normal, 1280×720 normal, 1366×768 normal, +24)_
- **section sans visuel** — `/contact` — section#debut « Parlons de votre prochain événement. Commencer la  » — une belle photo ou un visuel animé quand le contenu s’y prête ; une section de texte peut rester typographique (v11) _(844×390 normal, 844×390 sansJs, 844×390 sansWebgl)_
- **section sans visuel** — `/paris-games-week` — section#chiffres « près de 10 ans à la Paris Games Week 8 marques acc » — une belle photo ou un visuel animé quand le contenu s’y prête ; une section de texte peut rester typographique (v11) _(320×568 normal, 375×667 normal, 390×844 normal, 844×390 normal, 768×1024 normal, 1024×768 normal, +33)_
- **section sans visuel** — `/realisations` — section#clients « 25 MARQUES Ils nous font confiance. Emirates Accor » — une belle photo ou un visuel animé quand le contenu s’y prête ; une section de texte peut rester typographique (v11) _(320×568 normal, 375×667 normal, 390×844 normal, 844×390 normal, 768×1024 normal, 1024×768 normal, +33)_
- **section sans visuel** — `/the-alters` — section#chiffres « 1 camion vitré 5 mannequins à bord 2 marques réuni » — une belle photo ou un visuel animé quand le contenu s’y prête ; une section de texte peut rester typographique (v11) _(320×568 normal, 375×667 normal, 390×844 normal, 844×390 normal, 768×1024 normal, 1024×768 normal, +33)_

## Non lancé

Tout a été lancé.


## Repères

- Accessibilité : axe-core 4.12.1 en plus des contrôles intégrés.
- Tient dans l'écran /contact : aucune section épinglée ou plein écran.
- Tient dans l'écran /engagements : aucune section épinglée ou plein écran.
- Tient dans l'écran /paris-games-week : aucune section épinglée ou plein écran.
- Tient dans l'écran /realisations : aucune section épinglée ou plein écran.
- Tient dans l'écran /the-alters : aucune section épinglée ou plein écran.

## Fichiers

- Captures : `captures/` (téléphone, tablette, ordinateur, écran par écran)
- Films : `films/` (planches contact de l’ouverture, des transitions, des retours, des ancres et des épinglages ; ⚠ = image signalée)
- Comparaisons : `comparaisons/`
- Détail complet : `rapport.json`


## Relancer seulement ce qui a échoué

Après correction, si elle ne touche que ces pages (sinon, relancer l’audit standard en entier) :

```
node _audit/audit.mjs --complet --pages=/,/404,/engagements,/paris-games-week --seulement=fichiers,mesures,ecran
```

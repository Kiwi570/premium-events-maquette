# Rapport d’audit

Projet : `premium-events-maquette` · 20/11/2026 18:23:37 · 19 min · 7 page(s) · audit standard

## Résumé

- Statut : **128 échec(s)**
- Passe : `20261120-170449-standard` · version ?v=1
- Échecs : **128**
- À regarder : **58**
- Non lancé : **1**
- Contrôles passés : vercel.json (1), .vercelignore (1), robots.txt (1), numéro de version (1), langues (1), grille wouahou (1), mesures (77), balayage (6), films d’ouverture (10), films de transition (10), bords de l’écran (6), intro accélérable et passable (7), menu (1), clavier (7), liens et boutons (7), liens profonds (10), liens vers la page en cours (6), changements de hauteur (5), tient dans l’écran (5), films des épinglages (1), fluidité (10), défilement selon l’appareil (5), mouvement (10), effets du plan (8), souris immobile (5), vitesse (6), captures (1)

## Grille wouahou

| Point | État | Détail |
|---|---|---|
| 1. L’effet signature se manipule | ✗ absent | aucun data-grille="manipuler" sur l’accueil |
| 2. L’intro devient la page | ✗ absent | versObjet absent |
| 3. La transition reprend le motif | ✓ présent | voile en coupe |
| 4. Quelque chose relie les sections et les pages | ✗ absent | sur aucune page |
| 5. Un titre fait l’événement sur chaque page | ✗ absent | sur aucune page |
| 6. La scène est un geste du métier | ⚠ à regarder | galerie générique sur / |
| 7. L’action principale a un retour physique | ✗ absent | sur aucune page |

Le script vérifie les marques (`data-grille`, `data-iris-centre`, forme du voile, `versObjet`) ; la force et la justesse de chaque point se jugent sur les captures et les films.

## Échecs

### lien vers le site actuel (8)

- **lien vers le site actuel** — `404.html` — mailto:info@premium-events.fr
- **lien vers le site actuel** — `contact.html` — mailto:info@premium-events.fr
- **lien vers le site actuel** — `contact.html` — mailto:recrutement@premium-events.fr
- **lien vers le site actuel** — `engagements.html` — mailto:info@premium-events.fr
- **lien vers le site actuel** — `index.html` — mailto:info@premium-events.fr
- **lien vers le site actuel** — `paris-games-week.html` — mailto:info@premium-events.fr
- **lien vers le site actuel** — `realisations.html` — mailto:info@premium-events.fr
- **lien vers le site actuel** — `the-alters.html` — mailto:info@premium-events.fr

### premier écran : information clé hors de l’écran (5)

- **premier écran : information clé hors de l’écran** — `/` — section#debut > div.ouv-texte:nth-of-type(1) > p.ouv-info.ouv-f:nth-of-type(4) « Paris 9e · 01 72 69 43 43 » _(320×568 normal, 1366×768 sansJs, 320×568 sansJs)_
- **premier écran : information clé hors de l’écran** — `/404` — section#debut > div.conteneur.ouv-404-texte > p.ouv-info.ouv-f:nth-of-type(4) « 01 72 69 43 43 » _(390×844 sansJs, 1366×768 sansJs, 320×568 sansJs)_
- **premier écran : information clé hors de l’écran** — `/contact` — section#debut > div.conteneur.ouv-contact > div.ouv-contact-texte:nth-of-type(1) > dl.coordonnees.ouv-f « Téléphone +33 (0)1 72 69 43 43 E-mail info@premium » _(320×568 sansJs)_
- **premier écran : information clé hors de l’écran** — `/paris-games-week` — section#debut > div.ouv-etude-texte:nth-of-type(1) > p.ouv-info.ouv-f:nth-of-type(5) « Près de 10 ans à la PGW » _(320×568 normal, 390×844 normal, 390×844 sansJs, 390×844 sansWebgl, 1366×768 sansJs, 320×568 sansJs)_
- **premier écran : information clé hors de l’écran** — `/the-alters` — section#debut > div.ouv-etude-texte:nth-of-type(1) > p.ouv-info.ouv-f:nth-of-type(5) « 1 camion vitré · 5 mannequins » _(320×568 normal, 390×844 normal, 390×844 sansJs, 390×844 sansWebgl, 1366×768 sansJs, 320×568 sansJs)_

### zone tactile sous 44 px (17)

- **zone tactile sous 44 px** — `/` — li#metier-popup > div.metier-texte > a.lien-fleche « Voir les réalisations : Pop-up & Boutiques » — 166 × 25 px _(390×844 normal, 768×1024 normal, 320×568 normal, 844×390 normal, 390×844 sansJs, 390×844 sansWebgl, +1)_
- **zone tactile sous 44 px** — `/` — li#metier-activations > div.metier-texte > a.lien-fleche « Voir les réalisations : Activations & Expériences » — 166 × 25 px _(390×844 normal, 768×1024 normal, 320×568 normal, 844×390 normal, 390×844 sansJs, 390×844 sansWebgl, +1)_
- **zone tactile sous 44 px** — `/` — li#metier-stands > div.metier-texte > a.lien-fleche « Voir les réalisations : Stands & Scénographie » — 166 × 25 px _(390×844 normal, 768×1024 normal, 320×568 normal, 844×390 normal, 390×844 sansJs, 390×844 sansWebgl, +1)_
- **zone tactile sous 44 px** — `/` — li#metier-soirees > div.metier-texte > a.lien-fleche « Voir les réalisations : Soirées & Séminaires » — 166 × 25 px _(390×844 normal, 768×1024 normal, 320×568 normal, 844×390 normal, 390×844 sansJs, 390×844 sansWebgl, +1)_
- **zone tactile sous 44 px** — `/` — li#metier-hospitalites > div.metier-texte > a.lien-fleche « Voir les réalisations : Hospitalités & Sport » — 166 × 25 px _(390×844 normal, 768×1024 normal, 320×568 normal, 844×390 normal, 390×844 sansJs, 390×844 sansWebgl, +1)_
- **zone tactile sous 44 px** — `/` — div.conteneur.engage-grille > div.engage-texte:nth-of-type(1) > p:nth-of-type(3) > a.lien-fleche « Nos engagements » — 159 × 25 px _(390×844 normal, 768×1024 normal, 320×568 normal, 844×390 normal, 390×844 sansJs, 390×844 sansWebgl, +1)_
- **zone tactile sous 44 px** — `/` — section#art-de-recevoir > div > div.recevoir-carte > a.lien-fleche.lien-fleche--clair « Voir nos hospitalités » — 174 × 25 px _(390×844 sansJs, 320×568 sansJs)_
- **zone tactile sous 44 px** — `/404` — section#debut > div.conteneur.ouv-404-texte > p.ouv-info.ouv-f:nth-of-type(4) > a « 01 72 69 43 43 » — 106 × 20 px _(320×568 normal, 390×844 normal, 844×390 normal, 768×1024 normal, 390×844 sansJs, 390×844 sansWebgl, +1)_
- **zone tactile sous 44 px** — `/contact` — dl.coordonnees.ouv-f > div:nth-of-type(1) > dd > a « +33 (0)1 72 69 43 43 » — 147 × 28 px _(390×844 normal, 768×1024 normal, 320×568 normal, 844×390 normal, 390×844 sansJs, 390×844 sansWebgl, +1)_
- **zone tactile sous 44 px** — `/contact` — dl.coordonnees.ouv-f > div:nth-of-type(2) > dd > a « info@premium-events.fr » — 186 × 28 px _(390×844 normal, 768×1024 normal, 844×390 normal, 390×844 sansJs, 390×844 sansWebgl)_
- **zone tactile sous 44 px** — `/contact` — dl.coordonnees.coordonnees--clair > div:nth-of-type(3) > dd > a « +33 (0)1 72 69 43 43 » — 147 × 28 px _(390×844 normal, 768×1024 normal, 320×568 normal, 844×390 normal, 390×844 sansJs, 390×844 sansWebgl, +1)_
- **zone tactile sous 44 px** — `/paris-games-week` — div > article.etude-carte > div.etude-carte-texte > a.lien-fleche « Lire l’étude de cas » — 153 × 25 px _(320×568 normal, 390×844 normal, 768×1024 normal, 844×390 normal, 390×844 sansJs, 390×844 sansWebgl, +1)_
- **zone tactile sous 44 px** — `/realisations` — div.etudes-grille.fx-fini > article.etude-carte:nth-of-type(1) > div.etude-carte-texte > a.lien-fleche « Lire l’étude de cas » — 161 × 26 px _(768×1024 normal, 390×844 normal, 320×568 normal, 844×390 normal, 390×844 sansWebgl)_
- **zone tactile sous 44 px** — `/realisations` — div.etudes-grille.fx-fini > article.etude-carte:nth-of-type(2) > div.etude-carte-texte > a.lien-fleche « Lire l’étude de cas » — 161 × 26 px _(768×1024 normal, 390×844 normal, 320×568 normal, 844×390 normal, 390×844 sansWebgl)_
- **zone tactile sous 44 px** — `/realisations` — div.etudes-grille > article.etude-carte:nth-of-type(1) > div.etude-carte-texte > a.lien-fleche « Lire l’étude de cas » — 155 × 25 px _(390×844 sansJs, 320×568 sansJs)_
- **zone tactile sous 44 px** — `/realisations` — div.etudes-grille > article.etude-carte:nth-of-type(2) > div.etude-carte-texte > a.lien-fleche « Lire l’étude de cas » — 155 × 25 px _(390×844 sansJs, 320×568 sansJs)_
- **zone tactile sous 44 px** — `/the-alters` — div > article.etude-carte > div.etude-carte-texte > a.lien-fleche « Lire l’étude de cas » — 155 × 25 px _(390×844 normal, 320×568 normal, 768×1024 normal, 844×390 normal, 390×844 sansJs, 390×844 sansWebgl, +1)_

### texte coupé (14)

- **texte coupé** — `/` — h2#methode-titre > span.methode-mot:nth-of-type(1) « Conseil » — coupé par section#methode « NOTRE FAÇON DE FAIRE Conseil Conception Évènement  » _(390×844 normal, 320×568 normal, 390×844 sansWebgl)_
- **texte coupé** — `/` — h2#methode-titre > span.methode-mot:nth-of-type(3) « Évènement » — coupé par section#methode « NOTRE FAÇON DE FAIRE Conseil Conception Évènement  » _(390×844 normal, 320×568 normal, 390×844 sansWebgl)_
- **texte coupé** — `/` — section#fin > div.fin-signature:nth-of-type(1) > span.sig-l1:nth-of-type(1) « we create » — coupé par section#fin « we create & deliver VOTRE PROCHAIN ÉVÉNEMENT Parlo » _(390×844 normal, 768×1024 normal, 320×568 normal, 844×390 normal, 1366×768 normal, 390×844 sansWebgl, +1)_
- **texte coupé** — `/` — section#fin > div.fin-signature:nth-of-type(1) > span.sig-l2:nth-of-type(2) « & deliver » — coupé par section#fin « we create & deliver VOTRE PROCHAIN ÉVÉNEMENT Parlo » _(320×568 normal)_
- **texte coupé** — `/contact` — section#fin > div.fin-signature:nth-of-type(1) > span.sig-l1:nth-of-type(1) « we create » — coupé par section#fin « we create & deliver VOTRE PROCHAIN ÉVÉNEMENT Toujo » _(768×1024 normal, 320×568 normal, 844×390 normal, 1366×768 normal, 1366×768 sansWebgl)_
- **texte coupé** — `/contact` — section#fin > div.fin-signature:nth-of-type(1) > span.sig-l2:nth-of-type(2) « & deliver » — coupé par section#fin « we create & deliver VOTRE PROCHAIN ÉVÉNEMENT Toujo » _(320×568 normal)_
- **texte coupé** — `/engagements` — section#fin > div.fin-signature:nth-of-type(1) > span.sig-l1:nth-of-type(1) « we create » — coupé par section#fin « we create & deliver VOTRE PROCHAIN ÉVÉNEMENT Parlo » _(390×844 normal, 320×568 normal, 768×1024 normal, 844×390 normal, 1366×768 normal, 390×844 sansWebgl, +1)_
- **texte coupé** — `/engagements` — section#fin > div.fin-signature:nth-of-type(1) > span.sig-l2:nth-of-type(2) « & deliver » — coupé par section#fin « we create & deliver VOTRE PROCHAIN ÉVÉNEMENT Parlo » _(320×568 normal)_
- **texte coupé** — `/paris-games-week` — section#fin > div.fin-signature:nth-of-type(1) > span.sig-l1:nth-of-type(1) « we create » — coupé par section#fin « we create & deliver VOTRE PROCHAIN ÉVÉNEMENT Parlo » _(320×568 normal, 390×844 normal, 768×1024 normal, 844×390 normal, 1366×768 normal, 390×844 sansWebgl, +1)_
- **texte coupé** — `/paris-games-week` — section#fin > div.fin-signature:nth-of-type(1) > span.sig-l2:nth-of-type(2) « & deliver » — coupé par section#fin « we create & deliver VOTRE PROCHAIN ÉVÉNEMENT Parlo » _(320×568 normal)_
- **texte coupé** — `/realisations` — section#fin > div.fin-signature:nth-of-type(1) > span.sig-l1:nth-of-type(1) « we create » — coupé par section#fin « we create & deliver VOTRE PROCHAIN ÉVÉNEMENT Parlo » _(768×1024 normal, 390×844 normal, 320×568 normal, 844×390 normal, 1366×768 normal, 390×844 sansWebgl, +1)_
- **texte coupé** — `/realisations` — section#fin > div.fin-signature:nth-of-type(1) > span.sig-l2:nth-of-type(2) « & deliver » — coupé par section#fin « we create & deliver VOTRE PROCHAIN ÉVÉNEMENT Parlo » _(320×568 normal)_
- **texte coupé** — `/the-alters` — section#fin > div.fin-signature:nth-of-type(1) > span.sig-l1:nth-of-type(1) « we create » — coupé par section#fin « we create & deliver VOTRE PROCHAIN ÉVÉNEMENT Parlo » _(390×844 normal, 320×568 normal, 768×1024 normal, 844×390 normal, 1366×768 normal, 390×844 sansWebgl, +1)_
- **texte coupé** — `/the-alters` — section#fin > div.fin-signature:nth-of-type(1) > span.sig-l2:nth-of-type(2) « & deliver » — coupé par section#fin « we create & deliver VOTRE PROCHAIN ÉVÉNEMENT Parlo » _(320×568 normal)_

### textes qui se chevauchent (12)

- **textes qui se chevauchent** — `/` — section#fin > div.fin-signature:nth-of-type(1) > span.sig-l1:nth-of-type(1) « we create » — avec section#fin > div.fin-signature:nth-of-type(1) > span.sig-l2:nth-of-type(2) « & deliver » _(390×844 normal, 768×1024 normal, 320×568 normal, 844×390 normal, 390×844 sansJs, 1366×768 normal, +5)_
- **textes qui se chevauchent** — `/` — section#fin > div.fin-signature:nth-of-type(1) > span.sig-l1:nth-of-type(1) « we create » — avec section#fin > div.fin-signature:nth-of-type(1) > span.sig-l2:nth-of-type(2) > span.sig-amp « & » _(390×844 sansJs, 1366×768 sansJs, 320×568 sansJs)_
- **textes qui se chevauchent** — `/contact` — section#fin > div.fin-signature:nth-of-type(1) > span.sig-l1:nth-of-type(1) « we create » — avec section#fin > div.fin-signature:nth-of-type(1) > span.sig-l2:nth-of-type(2) > span.sig-amp « & » _(390×844 normal, 390×844 sansJs, 390×844 sansWebgl, 1366×768 sansJs, 320×568 sansJs)_
- **textes qui se chevauchent** — `/contact` — section#fin > div.fin-signature:nth-of-type(1) > span.sig-l1:nth-of-type(1) « we create » — avec section#fin > div.fin-signature:nth-of-type(1) > span.sig-l2:nth-of-type(2) « & deliver » _(390×844 normal, 768×1024 normal, 320×568 normal, 844×390 normal, 390×844 sansJs, 1366×768 normal, +5)_
- **textes qui se chevauchent** — `/engagements` — section#fin > div.fin-signature:nth-of-type(1) > span.sig-l1:nth-of-type(1) « we create » — avec section#fin > div.fin-signature:nth-of-type(1) > span.sig-l2:nth-of-type(2) « & deliver » _(390×844 normal, 320×568 normal, 768×1024 normal, 844×390 normal, 390×844 sansJs, 1366×768 normal, +5)_
- **textes qui se chevauchent** — `/engagements` — section#fin > div.fin-signature:nth-of-type(1) > span.sig-l1:nth-of-type(1) « we create » — avec section#fin > div.fin-signature:nth-of-type(1) > span.sig-l2:nth-of-type(2) > span.sig-amp « & » _(390×844 sansJs, 1366×768 sansJs, 320×568 sansJs)_
- **textes qui se chevauchent** — `/paris-games-week` — section#fin > div.fin-signature:nth-of-type(1) > span.sig-l1:nth-of-type(1) « we create » — avec section#fin > div.fin-signature:nth-of-type(1) > span.sig-l2:nth-of-type(2) « & deliver » _(320×568 normal, 390×844 normal, 768×1024 normal, 844×390 normal, 390×844 sansJs, 1366×768 normal, +5)_
- **textes qui se chevauchent** — `/paris-games-week` — section#fin > div.fin-signature:nth-of-type(1) > span.sig-l1:nth-of-type(1) « we create » — avec section#fin > div.fin-signature:nth-of-type(1) > span.sig-l2:nth-of-type(2) > span.sig-amp « & » _(390×844 sansJs, 1366×768 sansJs, 320×568 sansJs)_
- **textes qui se chevauchent** — `/realisations` — section#fin > div.fin-signature:nth-of-type(1) > span.sig-l1:nth-of-type(1) « we create » — avec section#fin > div.fin-signature:nth-of-type(1) > span.sig-l2:nth-of-type(2) « & deliver » _(768×1024 normal, 390×844 normal, 320×568 normal, 844×390 normal, 390×844 sansJs, 1366×768 normal, +5)_
- **textes qui se chevauchent** — `/realisations` — section#fin > div.fin-signature:nth-of-type(1) > span.sig-l1:nth-of-type(1) « we create » — avec section#fin > div.fin-signature:nth-of-type(1) > span.sig-l2:nth-of-type(2) > span.sig-amp « & » _(390×844 sansJs, 1366×768 sansJs, 320×568 sansJs)_
- **textes qui se chevauchent** — `/the-alters` — section#fin > div.fin-signature:nth-of-type(1) > span.sig-l1:nth-of-type(1) « we create » — avec section#fin > div.fin-signature:nth-of-type(1) > span.sig-l2:nth-of-type(2) « & deliver » _(390×844 normal, 320×568 normal, 768×1024 normal, 844×390 normal, 390×844 sansJs, 1366×768 normal, +5)_
- **textes qui se chevauchent** — `/the-alters` — section#fin > div.fin-signature:nth-of-type(1) > span.sig-l1:nth-of-type(1) « we create » — avec section#fin > div.fin-signature:nth-of-type(1) > span.sig-l2:nth-of-type(2) > span.sig-amp « & » _(390×844 sansJs, 1366×768 sansJs, 320×568 sansJs)_

### contraste insuffisant (50)

- **contraste insuffisant** — `/` — div#ruban-clients > div.ruban-piste.ruban-piste--inverse:nth-of-type(2) > p.ruban-rangee:nth-of-type(1) > span:nth-of-type(1) « Orange » — 1.00:1 (minimum 3:1) _(390×844 normal, 768×1024 normal, 320×568 normal, 844×390 normal, 390×844 sansJs, 1366×768 normal, +5)_
- **contraste insuffisant** — `/` — div#ruban-clients > div.ruban-piste.ruban-piste--inverse:nth-of-type(2) > p.ruban-rangee:nth-of-type(1) > span:nth-of-type(2) « Europcar » — 1.00:1 (minimum 3:1) _(390×844 normal, 768×1024 normal, 320×568 normal, 844×390 normal, 390×844 sansJs, 1366×768 normal, +5)_
- **contraste insuffisant** — `/` — div#ruban-clients > div.ruban-piste.ruban-piste--inverse:nth-of-type(2) > p.ruban-rangee:nth-of-type(1) > span:nth-of-type(3) « Nickelodeon » — 1.00:1 (minimum 3:1) _(390×844 normal, 768×1024 normal, 320×568 normal, 844×390 normal, 390×844 sansJs, 1366×768 normal, +5)_
- **contraste insuffisant** — `/` — div#ruban-clients > div.ruban-piste.ruban-piste--inverse:nth-of-type(2) > p.ruban-rangee:nth-of-type(1) > span:nth-of-type(4) « J One » — 1.00:1 (minimum 3:1) _(390×844 normal, 768×1024 normal, 320×568 normal, 844×390 normal, 390×844 sansJs, 1366×768 normal, +5)_
- **contraste insuffisant** — `/` — div#ruban-clients > div.ruban-piste.ruban-piste--inverse:nth-of-type(2) > p.ruban-rangee:nth-of-type(1) > span:nth-of-type(5) « Xbox » — 1.00:1 (minimum 3:1) _(390×844 normal, 768×1024 normal, 320×568 normal, 844×390 normal, 390×844 sansJs, 1366×768 normal, +5)_
- **contraste insuffisant** — `/` — div#ruban-clients > div.ruban-piste.ruban-piste--inverse:nth-of-type(2) > p.ruban-rangee:nth-of-type(1) > span:nth-of-type(6) « Game One » — 1.00:1 (minimum 3:1) _(390×844 normal, 768×1024 normal, 320×568 normal, 844×390 normal, 390×844 sansJs, 1366×768 normal, +5)_
- **contraste insuffisant** — `/` — div#ruban-clients > div.ruban-piste.ruban-piste--inverse:nth-of-type(2) > p.ruban-rangee:nth-of-type(1) > span:nth-of-type(7) « Conti » — 1.00:1 (minimum 3:1) _(390×844 normal, 768×1024 normal, 320×568 normal, 844×390 normal, 390×844 sansJs, 1366×768 normal, +5)_
- **contraste insuffisant** — `/` — div#ruban-clients > div.ruban-piste.ruban-piste--inverse:nth-of-type(2) > p.ruban-rangee:nth-of-type(1) > span:nth-of-type(8) « CNC » — 1.00:1 (minimum 3:1) _(390×844 normal, 768×1024 normal, 320×568 normal, 844×390 normal, 390×844 sansJs, 1366×768 normal, +5)_
- **contraste insuffisant** — `/` — div#ruban-clients > div.ruban-piste.ruban-piste--inverse:nth-of-type(2) > p.ruban-rangee:nth-of-type(1) > span:nth-of-type(9) « Carte Noire » — 1.00:1 (minimum 3:1) _(390×844 normal, 768×1024 normal, 320×568 normal, 844×390 normal, 390×844 sansJs, 1366×768 normal, +5)_
- **contraste insuffisant** — `/` — div#ruban-clients > div.ruban-piste.ruban-piste--inverse:nth-of-type(2) > p.ruban-rangee:nth-of-type(1) > span:nth-of-type(10) « Eurosport » — 1.00:1 (minimum 3:1) _(390×844 normal, 768×1024 normal, 320×568 normal, 844×390 normal, 390×844 sansJs, 1366×768 normal, +5)_
- **contraste insuffisant** — `/` — div#ruban-clients > div.ruban-piste.ruban-piste--inverse:nth-of-type(2) > p.ruban-rangee:nth-of-type(1) > span:nth-of-type(11) « Paramount » — 1.00:1 (minimum 3:1) _(390×844 normal, 768×1024 normal, 320×568 normal, 844×390 normal, 390×844 sansJs, 1366×768 normal, +5)_
- **contraste insuffisant** — `/` — div#ruban-clients > div.ruban-piste.ruban-piste--inverse:nth-of-type(2) > p.ruban-rangee:nth-of-type(1) > span:nth-of-type(12) « Geekvape » — 1.00:1 (minimum 3:1) _(390×844 normal, 768×1024 normal, 320×568 normal, 844×390 normal, 390×844 sansJs, 1366×768 normal, +5)_
- **contraste insuffisant** — `/` — div#ruban-clients > div.ruban-piste.ruban-piste--inverse:nth-of-type(2) > p.ruban-rangee:nth-of-type(1) > span:nth-of-type(13) « Air Caraïbes » — 1.00:1 (minimum 3:1) _(390×844 normal, 768×1024 normal, 320×568 normal, 844×390 normal, 390×844 sansJs, 1366×768 normal, +5)_
- **contraste insuffisant** — `/` — div#ruban-clients > div.ruban-piste.ruban-piste--inverse:nth-of-type(2) > p.ruban-rangee:nth-of-type(1) > span:nth-of-type(14) « Disney » — 1.00:1 (minimum 3:1) _(390×844 normal, 768×1024 normal, 320×568 normal, 844×390 normal, 390×844 sansJs, 1366×768 normal, +5)_
- **contraste insuffisant** — `/` — div#ruban-clients > div.ruban-piste.ruban-piste--inverse:nth-of-type(2) > p.ruban-rangee:nth-of-type(1) > span:nth-of-type(15) « Warner Bros. Discovery » — 1.00:1 (minimum 3:1) _(390×844 normal, 768×1024 normal, 320×568 normal, 844×390 normal, 390×844 sansJs, 1366×768 normal, +5)_
- **contraste insuffisant** — `/` — div#ruban-clients > div.ruban-piste.ruban-piste--inverse:nth-of-type(2) > p.ruban-rangee:nth-of-type(1) > span:nth-of-type(16) « Bandai » — 1.00:1 (minimum 3:1) _(390×844 normal, 768×1024 normal, 320×568 normal, 844×390 normal, 390×844 sansJs, 1366×768 normal, +5)_
- **contraste insuffisant** — `/` — div#ruban-clients > div.ruban-piste.ruban-piste--inverse:nth-of-type(2) > p.ruban-rangee:nth-of-type(1) > span:nth-of-type(17) « Crunchyroll » — 1.00:1 (minimum 3:1) _(390×844 normal, 768×1024 normal, 320×568 normal, 844×390 normal, 390×844 sansJs, 1366×768 normal, +5)_
- **contraste insuffisant** — `/` — div#ruban-clients > div.ruban-piste.ruban-piste--inverse:nth-of-type(2) > p.ruban-rangee:nth-of-type(1) > span:nth-of-type(18) « Toei Animation » — 1.00:1 (minimum 3:1) _(390×844 normal, 768×1024 normal, 320×568 normal, 844×390 normal, 390×844 sansJs, 1366×768 normal, +5)_
- **contraste insuffisant** — `/` — div#ruban-clients > div.ruban-piste.ruban-piste--inverse:nth-of-type(2) > p.ruban-rangee:nth-of-type(1) > span:nth-of-type(19) « Coloplast » — 1.00:1 (minimum 3:1) _(390×844 normal, 768×1024 normal, 320×568 normal, 844×390 normal, 390×844 sansJs, 1366×768 normal, +5)_
- **contraste insuffisant** — `/` — div#ruban-clients > div.ruban-piste.ruban-piste--inverse:nth-of-type(2) > p.ruban-rangee:nth-of-type(1) > span:nth-of-type(20) « Fédération Française du Bâtiment » — 1.00:1 (minimum 3:1) _(390×844 normal, 768×1024 normal, 320×568 normal, 844×390 normal, 390×844 sansJs, 1366×768 normal, +5)_
- **contraste insuffisant** — `/` — div#ruban-clients > div.ruban-piste.ruban-piste--inverse:nth-of-type(2) > p.ruban-rangee:nth-of-type(1) > span:nth-of-type(21) « Burger King » — 1.00:1 (minimum 3:1) _(390×844 normal, 768×1024 normal, 320×568 normal, 844×390 normal, 390×844 sansJs, 1366×768 normal, +5)_
- **contraste insuffisant** — `/` — div#ruban-clients > div.ruban-piste.ruban-piste--inverse:nth-of-type(2) > p.ruban-rangee:nth-of-type(1) > span:nth-of-type(22) « FNCF » — 1.00:1 (minimum 3:1) _(390×844 normal, 768×1024 normal, 320×568 normal, 844×390 normal, 390×844 sansJs, 1366×768 normal, +5)_
- **contraste insuffisant** — `/` — div#ruban-clients > div.ruban-piste.ruban-piste--inverse:nth-of-type(2) > p.ruban-rangee:nth-of-type(1) > span:nth-of-type(23) « Lavazza » — 1.00:1 (minimum 3:1) _(390×844 normal, 768×1024 normal, 320×568 normal, 844×390 normal, 390×844 sansJs, 1366×768 normal, +5)_
- **contraste insuffisant** — `/` — div#ruban-clients > div.ruban-piste.ruban-piste--inverse:nth-of-type(2) > p.ruban-rangee:nth-of-type(1) > span:nth-of-type(24) « Accor » — 1.00:1 (minimum 3:1) _(390×844 normal, 768×1024 normal, 320×568 normal, 844×390 normal, 390×844 sansJs, 1366×768 normal, +5)_
- **contraste insuffisant** — `/` — div#ruban-clients > div.ruban-piste.ruban-piste--inverse:nth-of-type(2) > p.ruban-rangee:nth-of-type(1) > span:nth-of-type(25) « Emirates » — 1.00:1 (minimum 3:1) _(390×844 normal, 768×1024 normal, 320×568 normal, 844×390 normal, 390×844 sansJs, 1366×768 normal, +5)_
- **contraste insuffisant** — `/` — div#ruban-clients > div.ruban-piste.ruban-piste--inverse:nth-of-type(2) > p.ruban-rangee:nth-of-type(2) > span:nth-of-type(1) « Orange » — 1.00:1 (minimum 3:1) _(390×844 normal, 768×1024 normal, 320×568 normal, 844×390 normal, 390×844 sansJs, 1366×768 normal, +5)_
- **contraste insuffisant** — `/` — div#ruban-clients > div.ruban-piste.ruban-piste--inverse:nth-of-type(2) > p.ruban-rangee:nth-of-type(2) > span:nth-of-type(2) « Europcar » — 1.00:1 (minimum 3:1) _(390×844 normal, 768×1024 normal, 320×568 normal, 844×390 normal, 390×844 sansJs, 1366×768 normal, +5)_
- **contraste insuffisant** — `/` — div#ruban-clients > div.ruban-piste.ruban-piste--inverse:nth-of-type(2) > p.ruban-rangee:nth-of-type(2) > span:nth-of-type(3) « Nickelodeon » — 1.00:1 (minimum 3:1) _(390×844 normal, 768×1024 normal, 320×568 normal, 844×390 normal, 390×844 sansJs, 1366×768 normal, +5)_
- **contraste insuffisant** — `/` — div#ruban-clients > div.ruban-piste.ruban-piste--inverse:nth-of-type(2) > p.ruban-rangee:nth-of-type(2) > span:nth-of-type(4) « J One » — 1.00:1 (minimum 3:1) _(390×844 normal, 768×1024 normal, 320×568 normal, 844×390 normal, 390×844 sansJs, 1366×768 normal, +5)_
- **contraste insuffisant** — `/` — div#ruban-clients > div.ruban-piste.ruban-piste--inverse:nth-of-type(2) > p.ruban-rangee:nth-of-type(2) > span:nth-of-type(5) « Xbox » — 1.00:1 (minimum 3:1) _(390×844 normal, 768×1024 normal, 320×568 normal, 844×390 normal, 390×844 sansJs, 1366×768 normal, +5)_
- **contraste insuffisant** — `/` — div#ruban-clients > div.ruban-piste.ruban-piste--inverse:nth-of-type(2) > p.ruban-rangee:nth-of-type(2) > span:nth-of-type(6) « Game One » — 1.00:1 (minimum 3:1) _(390×844 normal, 768×1024 normal, 320×568 normal, 844×390 normal, 390×844 sansJs, 1366×768 normal, +5)_
- **contraste insuffisant** — `/` — div#ruban-clients > div.ruban-piste.ruban-piste--inverse:nth-of-type(2) > p.ruban-rangee:nth-of-type(2) > span:nth-of-type(7) « Conti » — 1.00:1 (minimum 3:1) _(390×844 normal, 768×1024 normal, 320×568 normal, 844×390 normal, 390×844 sansJs, 1366×768 normal, +5)_
- **contraste insuffisant** — `/` — div#ruban-clients > div.ruban-piste.ruban-piste--inverse:nth-of-type(2) > p.ruban-rangee:nth-of-type(2) > span:nth-of-type(8) « CNC » — 1.00:1 (minimum 3:1) _(390×844 normal, 768×1024 normal, 320×568 normal, 844×390 normal, 390×844 sansJs, 1366×768 normal, +5)_
- **contraste insuffisant** — `/` — div#ruban-clients > div.ruban-piste.ruban-piste--inverse:nth-of-type(2) > p.ruban-rangee:nth-of-type(2) > span:nth-of-type(9) « Carte Noire » — 1.00:1 (minimum 3:1) _(390×844 normal, 768×1024 normal, 320×568 normal, 844×390 normal, 390×844 sansJs, 1366×768 normal, +5)_
- **contraste insuffisant** — `/` — div#ruban-clients > div.ruban-piste.ruban-piste--inverse:nth-of-type(2) > p.ruban-rangee:nth-of-type(2) > span:nth-of-type(10) « Eurosport » — 1.00:1 (minimum 3:1) _(390×844 normal, 768×1024 normal, 320×568 normal, 844×390 normal, 390×844 sansJs, 1366×768 normal, +5)_
- **contraste insuffisant** — `/` — div#ruban-clients > div.ruban-piste.ruban-piste--inverse:nth-of-type(2) > p.ruban-rangee:nth-of-type(2) > span:nth-of-type(11) « Paramount » — 1.00:1 (minimum 3:1) _(390×844 normal, 768×1024 normal, 320×568 normal, 844×390 normal, 390×844 sansJs, 1366×768 normal, +5)_
- **contraste insuffisant** — `/` — div#ruban-clients > div.ruban-piste.ruban-piste--inverse:nth-of-type(2) > p.ruban-rangee:nth-of-type(2) > span:nth-of-type(12) « Geekvape » — 1.00:1 (minimum 3:1) _(390×844 normal, 768×1024 normal, 320×568 normal, 844×390 normal, 390×844 sansJs, 1366×768 normal, +5)_
- **contraste insuffisant** — `/` — div#ruban-clients > div.ruban-piste.ruban-piste--inverse:nth-of-type(2) > p.ruban-rangee:nth-of-type(2) > span:nth-of-type(13) « Air Caraïbes » — 1.00:1 (minimum 3:1) _(390×844 normal, 768×1024 normal, 320×568 normal, 844×390 normal, 390×844 sansJs, 1366×768 normal, +5)_
- **contraste insuffisant** — `/` — div#ruban-clients > div.ruban-piste.ruban-piste--inverse:nth-of-type(2) > p.ruban-rangee:nth-of-type(2) > span:nth-of-type(14) « Disney » — 1.00:1 (minimum 3:1) _(390×844 normal, 768×1024 normal, 320×568 normal, 844×390 normal, 390×844 sansJs, 1366×768 normal, +5)_
- **contraste insuffisant** — `/` — div#ruban-clients > div.ruban-piste.ruban-piste--inverse:nth-of-type(2) > p.ruban-rangee:nth-of-type(2) > span:nth-of-type(15) « Warner Bros. Discovery » — 1.00:1 (minimum 3:1) _(390×844 normal, 768×1024 normal, 320×568 normal, 844×390 normal, 390×844 sansJs, 1366×768 normal, +5)_
- … et 10 autres (rapport.json)

### élément sans nom accessible (7)

- **élément sans nom accessible** — `/` — body#haut > header > div.entete-rangee > a.entete-logo _(390×844 normal, 390×844 sansJs, 1366×768 normal, 1366×768 sansJs)_
- **élément sans nom accessible** — `/404` — body#haut > header > div.entete-rangee > a.entete-logo _(390×844 normal, 390×844 sansJs, 1366×768 normal, 1366×768 sansJs)_
- **élément sans nom accessible** — `/contact` — body#haut > header > div.entete-rangee > a.entete-logo _(390×844 normal, 390×844 sansJs, 1366×768 normal, 1366×768 sansJs)_
- **élément sans nom accessible** — `/engagements` — body#haut > header > div.entete-rangee > a.entete-logo _(390×844 normal, 390×844 sansJs, 1366×768 normal, 1366×768 sansJs)_
- **élément sans nom accessible** — `/paris-games-week` — body#haut > header > div.entete-rangee > a.entete-logo _(390×844 normal, 390×844 sansJs, 1366×768 normal, 1366×768 sansJs)_
- **élément sans nom accessible** — `/realisations` — body#haut > header > div.entete-rangee > a.entete-logo _(390×844 normal, 390×844 sansJs, 1366×768 normal, 1366×768 sansJs)_
- **élément sans nom accessible** — `/the-alters` — body#haut > header > div.entete-rangee > a.entete-logo _(390×844 normal, 390×844 sansJs, 1366×768 normal, 1366×768 sansJs)_

### premier écran : bouton principal hors de l’écran (4)

- **premier écran : bouton principal hors de l’écran** — `/` — section#debut > div.ouv-texte:nth-of-type(1) > p.ouv-actions.ouv-f:nth-of-type(3) > a.bouton:nth-of-type(1) « Parler de votre projet » _(1366×768 sansJs)_
- **premier écran : bouton principal hors de l’écran** — `/404` — section#debut > div.conteneur.ouv-404-texte > p.ouv-actions.ouv-f:nth-of-type(3) > a.bouton:nth-of-type(1) « Revenir à l’accueil » _(390×844 sansJs)_
- **premier écran : bouton principal hors de l’écran** — `/paris-games-week` — section#debut > div.ouv-etude-texte:nth-of-type(1) > p.ouv-actions.ouv-f:nth-of-type(4) > a.bouton.bouton--noir « Parler de votre projet » _(320×568 normal, 390×844 normal, 390×844 sansJs, 390×844 sansWebgl, 1366×768 sansJs, 320×568 sansJs)_
- **premier écran : bouton principal hors de l’écran** — `/the-alters` — section#debut > div.ouv-etude-texte:nth-of-type(1) > p.ouv-actions.ouv-f:nth-of-type(4) > a.bouton.bouton--noir « Parler de votre projet » _(320×568 normal, 390×844 normal, 390×844 sansJs, 390×844 sansWebgl, 1366×768 sansJs, 320×568 sansJs)_

### photo faible affichée en grand (5)

- **photo faible affichée en grand** — `/engagements` — div.conteneur.etude-bloc-grille > figure.media.etude-bloc-media > picture > img « Sous-bois de fougères dans une lumière douce » — engagements-nature (4/5, faible, 65 % de l'écran) : en vignette, ou une meilleure image _(390×844 normal)_
- **photo faible affichée en grand** — `/engagements` — div.conteneur.etude-bloc-grille > figure.media.etude-bloc-media > picture > img « Sous-bois de fougères dans une lumière douce » — engagements-nature (4/5, faible, 53 % de l'écran) : en vignette, ou une meilleure image _(1366×768 normal)_
- **photo faible affichée en grand** — `/engagements` — div.conteneur.etude-bloc-grille > figure.media.etude-bloc-media > picture > img « Sous-bois de fougères dans une lumière douce » — engagements-nature (4/5, faible, 34 % de l'écran) : en vignette, ou une meilleure image _(1920×1080 normal)_
- **photo faible affichée en grand** — `/realisations` — li.mosaique-1:nth-of-type(1) > figure.media.mosaique-media > picture > img « Bus rouge à impériale habillé pour Les 101 Dalmati » — activations-1 (5/5, faible, 28 % de l'écran) : en vignette, ou une meilleure image _(1366×768 normal)_
- **photo faible affichée en grand** — `/realisations` — li.mosaique-1:nth-of-type(1) > figure.media.mosaique-media > picture > img « Stand bleu avec bar et tabourets dans un hall d’ex » — stands-1 (4/5, faible, 28 % de l'écran) : en vignette, ou une meilleure image _(1366×768 normal)_

### premier écran : titre hors de l’écran (1)

- **premier écran : titre hors de l’écran** — `/paris-games-week` — section#debut > div.ouv-etude-texte:nth-of-type(1) > h1.ouv-titre « PGW et Premium Events, une partie sans fin. » — haut 358 px, bas 518 px, zone 64–490 px _(320×568 normal, 320×568 sansJs)_

### épinglage : image isolée différente (flash) (5)

- **épinglage : image isolée différente (flash)** — `/` — à 300 ms (films/epinglage-1.png) _(1366×768)_
- **épinglage : image isolée différente (flash)** — `/` — à 317 ms (films/epinglage-1.png) _(1366×768)_
- **épinglage : image isolée différente (flash)** — `/` — à 450 ms (films/epinglage-1.png) _(1366×768)_
- **épinglage : image isolée différente (flash)** — `/` — à 467 ms (films/epinglage-1.png) _(1366×768)_
- **épinglage : image isolée différente (flash)** — `/` — à 1583 ms (films/epinglage-1.png) _(1366×768)_

## À regarder

### « à compléter » visible (1)

- **« à compléter » visible** — `contact.html` — 1 fois hors du pied de page : remplacer par une phrase vraie qui oriente le visiteur (« Tarifs selon la saison, donnés à la réservation ») ou retirer l'élément, et le noter dans la fiche du README (sauf sens propre : « dossier à compléter »)

### journal du projet (1)

- **journal du projet** — version 1 : aucune étape notée

### grille : effet signature qui ne se manipule pas (point 1) (1)

- **grille : effet signature qui ne se manipule pas (point 1)** — `/` — aucun élément data-grille="manipuler" sur l’accueil : objet à attraper, faire tourner ou glisser (module objet-a-faire-tourner, lumiere-au-pointeur…)

### grille : l’intro ne finit pas sur la page (point 2) (1)

- **grille : l’intro ne finit pas sur la page (point 2)** — versObjet(tl, …) absent de assets/js : l’intro doit finir sur l’objet d’ouverture (socle : import { versObjet } from './socle/index.js')

### grille : rien ne relie les sections (point 4) (1)

- **grille : rien ne relie les sections (point 4)** — sur aucune page : élément du métier qui relie les sections et les pages (fil dans la marge, objet unique qui change, lumière qui passe, carte, folio, frise), marqué data-grille="fil"

### grille : aucun titre ne fait l’événement (point 5) (1)

- **grille : aucun titre ne fait l’événement (point 5)** — sur aucune page : titre fabriqué par le métier, axe de police animé ou titre joué avec l’image (modules axes-au-defilement, titre-cousu, texte-grave-en-direct), marqué data-grille="typo"

### grille : galerie horizontale générique (point 6) (1)

- **grille : galerie horizontale générique (point 6)** — `/` — le métier a-t-il son geste (feuilleter un bac, empiler des planches, tourner les pages, ouvrir un tiroir) ? Modules bac-a-feuilleter, planches-empilees ; si la rangée qui défile est le geste du métier, ajouter data-grille="scene"

### grille : action principale sans retour physique (point 7) (1)

- **grille : action principale sans retour physique (point 7)** — ajout au panier, réservation, envoi ou filtre : quelque chose de l’objet part, se pose ou se transforme (module envol-vers-le-panier, tampon « reçu »), marqué data-grille="retour"

### section sans visuel (7)

- **section sans visuel** — `/` — section#clients « ILS NOUS FONT CONFIANCE 25 Emirates Accor Lavazza  » — une belle photo ou un visuel animé quand le contenu s’y prête ; une section de texte peut rester typographique (v11) _(390×844 normal, 768×1024 normal, 320×568 normal, 844×390 normal, 390×844 sansJs, 1366×768 normal, +5)_
- **section sans visuel** — `/contact` — section#debut « CONTACT Parlons de votre prochain événement. Décri » — une belle photo ou un visuel animé quand le contenu s’y prête ; une section de texte peut rester typographique (v11) _(390×844 normal, 768×1024 normal, 390×844 sansJs, 1366×768 normal, 1920×1080 normal, 390×844 sansWebgl, +2)_
- **section sans visuel** — `/contact` — section#debut « CONTACT Parlons de votre prochain événement. Comme » — une belle photo ou un visuel animé quand le contenu s’y prête ; une section de texte peut rester typographique (v11) _(320×568 normal, 320×568 sansJs)_
- **section sans visuel** — `/contact` — section#debut « Parlons de votre prochain événement. Commencer la  » — une belle photo ou un visuel animé quand le contenu s’y prête ; une section de texte peut rester typographique (v11) _(844×390 normal)_
- **section sans visuel** — `/paris-games-week` — section#chiffres « près de 10 ans à la Paris Games Week 8 marques acc » — une belle photo ou un visuel animé quand le contenu s’y prête ; une section de texte peut rester typographique (v11) _(320×568 normal, 390×844 normal, 768×1024 normal, 844×390 normal, 390×844 sansJs, 1366×768 normal, +5)_
- **section sans visuel** — `/realisations` — section#clients « 25 MARQUES Ils nous font confiance. Emirates Accor » — une belle photo ou un visuel animé quand le contenu s’y prête ; une section de texte peut rester typographique (v11) _(768×1024 normal, 390×844 normal, 320×568 normal, 844×390 normal, 390×844 sansJs, 1366×768 normal, +5)_
- **section sans visuel** — `/the-alters` — section#chiffres « 1 camion vitré 5 mannequins à bord 2 marques réuni » — une belle photo ou un visuel animé quand le contenu s’y prête ; une section de texte peut rester typographique (v11) _(390×844 normal, 320×568 normal, 768×1024 normal, 844×390 normal, 390×844 sansJs, 1366×768 normal, +5)_

### texte de contenu sous 13 px (ordinateur) (38)

- **texte de contenu sous 13 px (ordinateur)** — `/contact` — form.brief > fieldset.brief-etape:nth-of-type(1) > legend > span.brief-n « ÉTAPE 1 SUR 3 » — 12.8 px : surtitres et légendes à 13 px au moins, textes de cartes à 15 px _(1366×768 normal, 1920×1080 normal, 1366×768 sansWebgl, 1366×768 sansJs)_
- **texte de contenu sous 13 px (ordinateur)** — `/contact` — form.brief > fieldset.brief-etape:nth-of-type(2) > legend > span.brief-n « ÉTAPE 2 SUR 3 » — 12.8 px : surtitres et légendes à 13 px au moins, textes de cartes à 15 px _(1366×768 sansJs)_
- **texte de contenu sous 13 px (ordinateur)** — `/contact` — form.brief > fieldset.brief-etape:nth-of-type(3) > legend > span.brief-n « ÉTAPE 3 SUR 3 » — 12.8 px : surtitres et légendes à 13 px au moins, textes de cartes à 15 px _(1366×768 sansJs)_
- **texte de contenu sous 13 px (ordinateur)** — `/paris-games-week` — ul.mosaique.mosaique--etude > li.mosaique-1:nth-of-type(1) > figure.media.mosaique-media > figcaption.media-legende « Voiture de sport en briques, portes papillon ouver » — 12.8 px : surtitres et légendes à 13 px au moins, textes de cartes à 15 px _(1366×768 normal, 1920×1080 normal, 1366×768 sansJs, 1366×768 sansWebgl)_
- **texte de contenu sous 13 px (ordinateur)** — `/paris-games-week` — ul.mosaique.mosaique--etude > li.mosaique-2:nth-of-type(2) > figure.media.mosaique-media > figcaption.media-legende « Plateau aux néons verts et violets » — 12.8 px : surtitres et légendes à 13 px au moins, textes de cartes à 15 px _(1366×768 normal, 1920×1080 normal, 1366×768 sansJs, 1366×768 sansWebgl)_
- **texte de contenu sous 13 px (ordinateur)** — `/paris-games-week` — ul.mosaique.mosaique--etude > li.mosaique-3:nth-of-type(3) > figure.media.mosaique-media > figcaption.media-legende « Visiteur en sweat rouge face à un robot de dessin  » — 12.8 px : surtitres et légendes à 13 px au moins, textes de cartes à 15 px _(1366×768 normal, 1920×1080 normal, 1366×768 sansJs, 1366×768 sansWebgl)_
- **texte de contenu sous 13 px (ordinateur)** — `/paris-games-week` — ul.mosaique.mosaique--etude > li.mosaique-4:nth-of-type(4) > figure.media.mosaique-media > figcaption.media-legende « Van jaune des Tortues Ninja sur un stand » — 12.8 px : surtitres et légendes à 13 px au moins, textes de cartes à 15 px _(1366×768 normal, 1920×1080 normal, 1366×768 sansJs, 1366×768 sansWebgl)_
- **texte de contenu sous 13 px (ordinateur)** — `/paris-games-week` — ul.mosaique.mosaique--etude > li.mosaique-5:nth-of-type(5) > figure.media.mosaique-media > figcaption.media-legende « Joueuse qui éclate de rire, manette en main, dans  » — 12.8 px : surtitres et légendes à 13 px au moins, textes de cartes à 15 px _(1366×768 normal, 1920×1080 normal, 1366×768 sansJs, 1366×768 sansWebgl)_
- **texte de contenu sous 13 px (ordinateur)** — `/realisations` — ul.conteneur.mosaique > li.mosaique-1:nth-of-type(1) > figure.media.mosaique-media > figcaption.media-legende « Boutique éphémère d’animation japonaise, comptoir  » — 12.8 px : surtitres et légendes à 13 px au moins, textes de cartes à 15 px _(1366×768 normal, 1920×1080 normal, 1366×768 sansJs, 1366×768 sansWebgl)_
- **texte de contenu sous 13 px (ordinateur)** — `/realisations` — ul.conteneur.mosaique > li.mosaique-2:nth-of-type(2) > figure.media.mosaique-media > figcaption.media-legende « Vitrine de figurines One Piece éclairée » — 12.8 px : surtitres et légendes à 13 px au moins, textes de cartes à 15 px _(1366×768 normal, 1920×1080 normal, 1366×768 sansJs, 1366×768 sansWebgl)_
- **texte de contenu sous 13 px (ordinateur)** — `/realisations` — ul.conteneur.mosaique > li.mosaique-3:nth-of-type(3) > figure.media.mosaique-media > figcaption.media-legende « Café Lavazza servi à côté d’un paquet Roma » — 12.8 px : surtitres et légendes à 13 px au moins, textes de cartes à 15 px _(1366×768 normal, 1920×1080 normal, 1366×768 sansJs, 1366×768 sansWebgl)_
- **texte de contenu sous 13 px (ordinateur)** — `/realisations` — ul.conteneur.mosaique > li.mosaique-4:nth-of-type(4) > figure.media.mosaique-media > figcaption.media-legende « Peluches de Luffy alignées en rayon » — 12.8 px : surtitres et légendes à 13 px au moins, textes de cartes à 15 px _(1366×768 normal, 1920×1080 normal, 1366×768 sansJs, 1366×768 sansWebgl)_
- **texte de contenu sous 13 px (ordinateur)** — `/realisations` — ul.conteneur.mosaique > li.mosaique-5:nth-of-type(5) > figure.media.mosaique-media > figcaption.media-legende « Vendeurs et clients autour de la caisse d’une bout » — 12.8 px : surtitres et légendes à 13 px au moins, textes de cartes à 15 px _(1366×768 normal, 1920×1080 normal, 1366×768 sansJs, 1366×768 sansWebgl)_
- **texte de contenu sous 13 px (ordinateur)** — `/realisations` — ul.conteneur.mosaique > li.mosaique-1:nth-of-type(1) > figure.media.mosaique-media > figcaption.media-legende « Bus rouge à impériale habillé pour Les 101 Dalmati » — 12.8 px : surtitres et légendes à 13 px au moins, textes de cartes à 15 px _(1366×768 normal, 1920×1080 normal, 1366×768 sansJs, 1366×768 sansWebgl)_
- **texte de contenu sous 13 px (ordinateur)** — `/realisations` — ul.conteneur.mosaique > li.mosaique-2:nth-of-type(2) > figure.media.mosaique-media > figcaption.media-legende « Invités hilares sur un plateau aux couleurs vertes » — 12.8 px : surtitres et légendes à 13 px au moins, textes de cartes à 15 px _(1366×768 normal, 1920×1080 normal, 1366×768 sansJs, 1366×768 sansWebgl)_
- **texte de contenu sous 13 px (ordinateur)** — `/realisations` — ul.conteneur.mosaique > li.mosaique-3:nth-of-type(3) > figure.media.mosaique-media > figcaption.media-legende « Batteur souriant pendant une activation musicale » — 12.8 px : surtitres et légendes à 13 px au moins, textes de cartes à 15 px _(1366×768 normal, 1920×1080 normal, 1366×768 sansJs, 1366×768 sansWebgl)_
- **texte de contenu sous 13 px (ordinateur)** — `/realisations` — ul.conteneur.mosaique > li.mosaique-4:nth-of-type(4) > figure.media.mosaique-media > figcaption.media-legende « Enfant qui découvre des biscuits dalmatiens » — 12.8 px : surtitres et légendes à 13 px au moins, textes de cartes à 15 px _(1366×768 normal, 1920×1080 normal, 1366×768 sansJs, 1366×768 sansWebgl)_
- **texte de contenu sous 13 px (ordinateur)** — `/realisations` — ul.conteneur.mosaique > li.mosaique-5:nth-of-type(5) > figure.media.mosaique-media > figcaption.media-legende « Deux artistes en scène, bras levés » — 12.8 px : surtitres et légendes à 13 px au moins, textes de cartes à 15 px _(1366×768 normal, 1920×1080 normal, 1366×768 sansJs, 1366×768 sansWebgl)_
- **texte de contenu sous 13 px (ordinateur)** — `/realisations` — ul.conteneur.mosaique > li.mosaique-1:nth-of-type(1) > figure.media.mosaique-media > figcaption.media-legende « Stand bleu avec bar et tabourets dans un hall d’ex » — 12.8 px : surtitres et légendes à 13 px au moins, textes de cartes à 15 px _(1366×768 normal, 1920×1080 normal, 1366×768 sansJs, 1366×768 sansWebgl)_
- **texte de contenu sous 13 px (ordinateur)** — `/realisations` — ul.conteneur.mosaique > li.mosaique-2:nth-of-type(2) > figure.media.mosaique-media > figcaption.media-legende « Voiture de sport reproduite en briques sur un stan » — 12.8 px : surtitres et légendes à 13 px au moins, textes de cartes à 15 px _(1366×768 normal, 1920×1080 normal, 1366×768 sansJs, 1366×768 sansWebgl)_
- **texte de contenu sous 13 px (ordinateur)** — `/realisations` — ul.conteneur.mosaique > li.mosaique-3:nth-of-type(3) > figure.media.mosaique-media > figcaption.media-legende « Stand Crunchyroll pris d’assaut par les visiteurs » — 12.8 px : surtitres et légendes à 13 px au moins, textes de cartes à 15 px _(1366×768 normal, 1920×1080 normal, 1366×768 sansJs, 1366×768 sansWebgl)_
- **texte de contenu sous 13 px (ordinateur)** — `/realisations` — ul.conteneur.mosaique > li.mosaique-4:nth-of-type(4) > figure.media.mosaique-media > figcaption.media-legende « Van jaune des Tortues Ninja devant un décor de rue » — 12.8 px : surtitres et légendes à 13 px au moins, textes de cartes à 15 px _(1366×768 normal, 1920×1080 normal, 1366×768 sansJs, 1366×768 sansWebgl)_
- **texte de contenu sous 13 px (ordinateur)** — `/realisations` — ul.conteneur.mosaique > li.mosaique-5:nth-of-type(5) > figure.media.mosaique-media > figcaption.media-legende « Décor de chalet en rondins, fauteuil et magnétopho » — 12.8 px : surtitres et légendes à 13 px au moins, textes de cartes à 15 px _(1366×768 normal, 1920×1080 normal, 1366×768 sansJs, 1366×768 sansWebgl)_
- **texte de contenu sous 13 px (ordinateur)** — `/realisations` — ul.conteneur.mosaique > li.mosaique-1:nth-of-type(1) > figure.media.mosaique-media > figcaption.media-legende « Invitée en robe dorée au cœur d’une soirée » — 12.8 px : surtitres et légendes à 13 px au moins, textes de cartes à 15 px _(1366×768 normal, 1920×1080 normal, 1366×768 sansJs, 1366×768 sansWebgl)_
- **texte de contenu sous 13 px (ordinateur)** — `/realisations` — ul.conteneur.mosaique > li.mosaique-2:nth-of-type(2) > figure.media.mosaique-media > figcaption.media-legende « Table ronde éclairée en violet sous l’enseigne Inn » — 12.8 px : surtitres et légendes à 13 px au moins, textes de cartes à 15 px _(1366×768 normal, 1920×1080 normal, 1366×768 sansJs, 1366×768 sansWebgl)_
- … et 13 autres (rapport.json)

### retour arrière : changement brusque (2)

- **retour arrière : changement brusque** — `/` — à 246 ms (différence 32 %) (films/retour-arrière-1366.png) _(1366×768 retour arrière)_
- **retour arrière : changement brusque** — `/` — à 74 ms (différence 35 %) (films/retour-arrière-390.png) _(390×844 retour arrière)_

### rechargement au milieu de la page (2)

- **rechargement au milieu de la page** — `/engagements` — écran différent à la même position après rechargement (10.6 %), voir comparaisons/rechargement-engagements-*.png _(1366×768)_
- **rechargement au milieu de la page** — `/the-alters` — écran différent à la même position après rechargement (18.3 %), voir comparaisons/rechargement-the-alters-*.png _(1366×768)_

### effet qui ne bouge pas au défilement (1)

- **effet qui ne bouge pas au défilement** — `/` — span.surligne — surligne : il ne bouge ni au défilement ni tout seul à cette taille (effet au survol, au clic, ou réservé à l'ordinateur ?) ; il ne compte pas comme effet de section _(1366×768 normal, 390×844 normal)_

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
- Journal v1 : 0 étape(s) notée(s), 0 min de travail, 0 min d’attente de l’utilisateur.
- Audit standard : étapes lourdes sur /, /contact, /engagements, /realisations, /the-alters.
- Accessibilité : axe-core 4.12.1 en plus des contrôles intégrés.
- Ouverture / (1366×768) : 2501 ms depuis le premier octet
- film de l'ouverture / 1366×768 : réussi à la tentative 2 (avant : cdpSession.send: Protocol error (Page.startScreencast): Not attached to an active page)
- Ouverture /contact (1366×768) : 2324 ms depuis le premier octet
- Ouverture /engagements (1366×768) : 2349 ms depuis le premier octet
- Ouverture /realisations (1366×768) : 2501 ms depuis le premier octet
- Ouverture /the-alters (1366×768) : 2440 ms depuis le premier octet
- Ouverture / (390×844) : 2482 ms depuis le premier octet
- Ouverture /contact (390×844) : 2349 ms depuis le premier octet
- Ouverture /engagements (390×844) : 2323 ms depuis le premier octet
- film de l'ouverture /engagements 390×844 : réussi à la tentative 3 (avant : cdpSession.send: Protocol error (Page.startScreencast): Not attached to an active page)
- Ouverture /realisations (390×844) : 2405 ms depuis le premier octet
- Ouverture /the-alters (390×844) : 2418 ms depuis le premier octet
- Bords de l’écran : 305 images d’intro, 36 de voile et 182 de menu jugées (panneau immobile couvrant tout l’écran), barre de défilement classique de 15 px.
- Aucun parcours propre au projet (_audit/parcours.mjs) : filtres, calculateurs, panier, réservation, fenêtres testés seulement par les contrôles généraux.
- Tient dans l'écran /contact : aucune section épinglée ou plein écran.
- Tient dans l'écran /engagements : aucune section épinglée ou plein écran.
- Tient dans l'écran /paris-games-week : aucune section épinglée ou plein écran.
- Tient dans l'écran /realisations : aucune section épinglée ou plein écran.
- Tient dans l'écran /the-alters : aucune section épinglée ou plein écran.
- Fluidité / 1366×768 (molette) : 0 % d'images lentes sur 442, tâche la plus longue 0 ms
- Fluidité /contact 1366×768 (molette) : 0 % d'images lentes sur 185, tâche la plus longue 0 ms
- Fluidité /engagements 1366×768 (molette) : 0 % d'images lentes sur 295, tâche la plus longue 0 ms
- Fluidité /realisations 1366×768 (molette) : 0 % d'images lentes sur 398, tâche la plus longue 0 ms
- Fluidité /the-alters 1366×768 (molette) : 0 % d'images lentes sur 332, tâche la plus longue 0 ms
- Fluidité / 390×844 (doigt) : 0 % d'images lentes sur 1367, tâche la plus longue 0 ms
- Fluidité /contact 390×844 (doigt) : 0 % d'images lentes sur 1349, tâche la plus longue 0 ms
- Fluidité /engagements 390×844 (doigt) : 0 % d'images lentes sur 1351, tâche la plus longue 0 ms
- Fluidité /realisations 390×844 (doigt) : 0 % d'images lentes sur 1367, tâche la plus longue 0 ms
- Fluidité /the-alters 390×844 (doigt) : 0 % d'images lentes sur 1368, tâche la plus longue 0 ms
- Vitesse / : 0.44 s de calcul au chargement (téléphone ralenti).
- Vitesse /contact : 0.34 s de calcul au chargement (téléphone ralenti).
- Vitesse /engagements : 0.29 s de calcul au chargement (téléphone ralenti).
- Vitesse /paris-games-week : 0.31 s de calcul au chargement (téléphone ralenti).
- Vitesse /realisations : 0.54 s de calcul au chargement (téléphone ralenti).
- Vitesse /the-alters : 0.38 s de calcul au chargement (téléphone ralenti).

## Fichiers

- Captures : `captures/` (téléphone, tablette, ordinateur, écran par écran)
- Films : `films/` (planches contact de l’ouverture, des transitions, des retours, des ancres et des épinglages ; ⚠ = image signalée)
- Comparaisons : `comparaisons/`
- Détail complet : `rapport.json`


## Relancer seulement ce qui a échoué

Après correction, si elle ne touche que ces pages (sinon, relancer l’audit standard en entier) :

```
node _audit/audit.mjs --seulement=fichiers,mesures,ecran
```

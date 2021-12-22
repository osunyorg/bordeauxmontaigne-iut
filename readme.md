# IUT Bordeaux Montaigne

Pour installer Hugo `brew install hugo`


Pour lancer le site
```
yarn
hugo server
```

## Home page

Il faut un fichier _index.html à la racine du dossier content, qui sert de home page, avec la body class `page__home`.

```
content
|   _index.html
```

Il faut remettre la description sans HTML, pour le SEO, mettre le contenu HTML dans le corps du fichier, par souci de cohérence. Le breadcrumb_title permet de gérer le breadcrumb de façon unifiée.
```markdown
---
title: L’IUT Bordeaux Montaigne, le plus court chemin pour aller loin
breadcrumb_title: Accueil
image: "29f2e051-1298-48d4-9e21-5badbd606d30"
description: >
  L'Institut Universitaire de Technologie Bordeaux Montaigne, le plus court chemin pour aller loin
---
L’IUT Bordeaux Montaigne,<br><em>le plus court chemin pour aller loin</em>
```

## Pages

Il faut changer l'architecture vers un système de feuilles :
```
content
└───pages
│   │   notre-institut.html
│   │   ...
│   └───notre-institut
│       │   consignes-de-securite.html
│       │   equipe-pedagogique.html
│       │   ...
│   ...
```

Il faut aussi des slashs finaux aux URLS, c'est la pratique adoptée par Hugo (https://discourse.gohugo.io/t/hugo-support-for-urls-without-a-trailing-slash/6763)


Il serait préférable de remettre le text dans le corps des documents et pas dans le frontmatter, puisque nous n'allons plus récupérer les contenus existants sur Github.


```markdown
---
title: "Plan d’accès et contact"
url: "/notre-institut/plan-dacces-et-contact/"
identifier: "ea93ebfd-4769-4ea6-bb42-a7e057b4f742"
parent: "75e9814e-7127-4bed-bd83-630cbb67da07"
related_category: ""
position: 5
description: >
  Où sommes nous ? ATTENTION : nous ne sommes pas sur le site du Campus
---
Où sommes nous ?<br><br>  <strong>ATTENTION : nous ne sommes pas sur
```


L'identifier, le parent et la position permettent d'organiser les données et de les retrouver en respectant l'arbre réel de contenu, et pas l'arbre du menu. Ce besoin n'est pas certain, il est possible qu'on puisse simplement supprimer ces champs.

## Posts

L'arborescence peut être reprise telle quelle sans problème.

Un fichier _index.html doit être ajouté à la racine pour matérialiser la liste des actualités.

Les fichiers doivent être harmonisés,
```markdown
---
title: "Une bourse ? Un logement ? Constituez dès maintenant votre dossier social étudiant (DSE)"
date: 2021-01-25 15:02:00 +0100 UTC
slug: "constituez-votre-dossier-social-etudiant"
pinned: false
author: "hbeneyrol"
categories:
  - "a-la-une"
image: "d97ed0d8-27f6-4c29-8bc3-aac021e6308a"
description: >
  N’attendez pas les résultats de vos examens ou votre affectation sur Parcoursup...
---
<img width="480" height="230" src="https://www.iut.u-bordeaux-montaigne.fr/wp-content/uploads/2021/01/Demande_DSE_2021.png"> N’attendez pas les résultats de vos examens ou votre affectation sur Parcoursup ...
```

## Catégories

Il faut changer l'architecture vers un système de feuilles :
```
content
└───categories
│   │   _index.html
│   └───a-la-une/_index.html
│   ...
```

Les catégories ressemblent à ça :
```
---
title: "À la une"
slug: "a-la-une"-
description: >
  Flash info publiés sur la page d'accueil
---
```

Quid des catégories nested? A tester.


## SEO

Attention, à l'heure actuelle on utilise l'image originale pour le SEO, il faut utiliser une image redimensionnée.

## Breadcrumb

## Menu

Mettre des trailing slashs partout.

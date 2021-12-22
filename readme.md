# IUT Bordeaux Montaigne

Pour installer Hugo `brew install hugo`


Pour lancer le site
```
yarn
hugo server
```

## Pages

Il faut changer l'architecture vers un système de feuilles :
```
content
|   _index.html (Home page, avec uniquement un frontmatter)
└───pages
│   │   notre-institut.html
│   │   ...
│   │
│   └───notre-institut
│       │   consignes-de-securite.html
│       │   equipe-pedagogique.html
│       │   ...
│   
```

Il faut aussi des slashs finaux aux URLS, c'est la pratique adoptée par Hugo (https://discourse.gohugo.io/t/hugo-support-for-urls-without-a-trailing-slash/6763)


Il serait préférable de remettre le text dans le corps des documents et pas dans le frontmatter, puisque nous n'allons plus récupérer les contenus existants sur Github.


```md
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


L'identifier, le parent et la position permettent d'organiser les données et de les retrouver en respectant l'arbre réel de contenu, et pas l'arbre du menu.

## Posts

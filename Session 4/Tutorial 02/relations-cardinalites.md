# Relations et cardinalités — Blog

## Tableau des relations

| Entité A | Cardinalité A | Verbe métier | Cardinalité B | Entité B | Règle de gestion |
|---|---|---|---|---|---|
| VILLE | (1,N) | habite | (1,1) | AUTEUR | Une ville accueille un ou plusieurs auteurs. Un auteur habite dans une seule ville. |
| AUTEUR | (1,N) | rédige | (1,1) | ARTICLE | Un auteur peut rédiger plusieurs articles. Un article est rédigé par un seul auteur. |
| CATEGORIE | (1,N) | regroupe | (1,1) | ARTICLE | Une catégorie regroupe plusieurs articles. Un article appartient à une seule catégorie. |
| ARTICLE | (0,N) | possède | (0,N) | TAG | Un article peut avoir plusieurs tags. Un tag peut être associé à plusieurs articles. |
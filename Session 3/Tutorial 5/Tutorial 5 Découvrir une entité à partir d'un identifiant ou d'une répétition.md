
# Découvrir des entités à partir des répétitions

## 1. Tableau complété

| Donnée observée | Valeur répétée | Réalité représentée | Identifiant proposé | Dépendance fonctionnelle |
|---|---|---|---|---|
| `nom_auteur` | Madani apparaît 3 fois | Auteur | `id_auteur` | `id_auteur → nom_auteur, prenom_auteur, email_auteur` |
| `nom_ville` | Tanger apparaît 3 fois et Rabat apparaît 2 fois | Ville | `id_ville` | `id_ville → nom_ville` |
| `nom_categorie` | Développement apparaît 4 fois | Catégorie | `id_categorie` | `id_categorie → nom_categorie` |

## 2. Explication

### 1. Auteur

Le nom « Madani » apparaît plusieurs fois dans le tableau. Il représente un auteur. Nous proposons donc l'identifiant `id_auteur` pour identifier chaque auteur.

Cet identifiant détermine son nom, son prénom et son adresse e-mail.

**Dépendance fonctionnelle :**

`id_auteur → nom_auteur, prenom_auteur, email_auteur`

### 2. Ville

Les valeurs « Tanger » et « Rabat » apparaissent plusieurs fois. Elles représentent des villes.

Nous proposons l'identifiant `id_ville`, qui détermine le nom de la ville.

**Dépendance fonctionnelle :**

`id_ville → nom_ville`

### 3. Catégorie

La valeur « Développement » apparaît quatre fois. Elle représente une catégorie d'articles.

Nous proposons l'identifiant `id_categorie`, qui détermine le nom de la catégorie.

**Dépendance fonctionnelle :**

`id_categorie → nom_categorie`

## 3. Conclusion

L'observation des répétitions permet de découvrir trois réalités :

- **Auteur**
- **Ville**
- **Catégorie**

Chaque réalité possède un identifiant proposé qui détermine ses informations descriptives.

Nous nous limitons à cette étape sans construire les relations entre les entités ni le schéma complet de la base de données.



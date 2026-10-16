
# Observation des occurrences et repérage des répétitions

## 1. Inventaire des valeurs observées

Après l’observation du tableau, nous obtenons les valeurs suivantes pour chaque donnée :

- **nom_auteur** : Madani, Sara, Youssef, Amine, Nadia.
- **prenom_auteur** : Ali, Amrani, Karim, Idrissi, Alaoui.
- **email_auteur** : madani@mail.com, sara@mail.com, youssef@mail.com, amine@mail.com, nadia@mail.com.
- **nom_ville** : Tanger, Rabat.
- **nom_categorie** : Développement, Actualité.

## 2. Identification des valeurs répétées

En comparant les cinq occurrences, nous remarquons que certaines valeurs apparaissent plusieurs fois :

- **nom_auteur** : aucune valeur répétée.
- **prenom_auteur** : aucune valeur répétée.
- **email_auteur** : aucune valeur répétée.
- **nom_ville** :
  - Tanger apparaît 3 fois.
  - Rabat apparaît 2 fois.
- **nom_categorie** :
  - Développement apparaît 3 fois.
  - Actualité apparaît 2 fois.

## 3. Problème lié à une répétition

Prenons l’exemple de la valeur « Tanger » dans la donnée `nom_ville`.

Si le nom de cette ville doit être modifié, il faudra mettre à jour les trois lignes concernées. Si l’une de ces lignes est oubliée, le tableau risque de contenir des informations incohérentes.

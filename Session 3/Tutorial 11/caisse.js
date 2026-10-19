let panier = [15, 42, 5, 89, 12, 50, 8];

let somme = 0;
let compteur = 0;
let sommeChers = 0;

/* somme doit être déclarée avant la boucle
pour garder le total. */

for (let i = 0; i < panier.length; i++) {
    somme = somme + panier[i];

    if (panier[i] >= 20) {
        compteur++;
        sommeChers = sommeChers + panier[i];
    }
}

console.log("Total du panier :", somme);
console.log("Nombre d'articles chers :", compteur);
console.log("Montant des articles chers :", sommeChers);
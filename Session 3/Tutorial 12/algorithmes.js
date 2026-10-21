let nombres = [23, 15, 42, 9, 31, 18, 42, 5];

let Maximum = nombres[0];
let Minimum = nombres[0];

let positionMAx = 0;
let positionMin = 0;

let recherche = 31;

// -1 signifie que la valeur n'a pas encore été trouvée.
// Les index d'un tableau commencent à 0, donc -1 signifie "non trouvé".
let position = -1;

for (let i = 0; i < nombres.length; i++) {

    // Recherche du maximum et de sa position
    if (nombres[i] > Maximum) {
        Maximum = nombres[i];
        positionMAx = i;
    }

    // Recherche du minimum et de sa position
    if (nombres[i] < Minimum) {
        Minimum = nombres[i];
        positionMin = i;
    }

    // Recherche de la valeur cible
    if (recherche === nombres[i] && position === -1) {
        position = i;
    }
}

// Affichage du maximum et du minimum
console.log("Maximum :", Maximum, "(Index :", positionMAx + ")");
console.log("Minimum :", Minimum, "(Index :", positionMin + ")");

// Vérification de la présence de la valeur recherchée
if (position !== -1) {
    console.log("La valeur", recherche, "est présente dans le tableau.");
} else {
    console.log("La valeur", recherche, "est absente du tableau.");
}
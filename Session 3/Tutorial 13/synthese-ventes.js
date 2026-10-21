
let ventes = [110, 75, 150, 180, 90, 130, 100, 160];

// 1. Initialisation

let nombreVentes = 0;
let chiffreAffaires = 0;

let maximum = ventes[0];
let minimum = ventes[0];

let nbExceptionnelles = 0;
let caExceptionnelles = 0;

// 2. Traitement : une seule boucle
for (let i = 0; i < ventes.length; i++) {
    let vente = ventes[i];

    // Compter le nombre total de ventes
    nombreVentes++;

    // Calculer le chiffre d'affaires total
    chiffreAffaires += vente;

    // Extrêmes
    if (vente > maximum) {
        maximum = vente;
    }

    if (vente < minimum) {
        minimum = vente;
    }

    // Compter les ventes exceptionnelles (montant >= 130)
    if (vente >= 130) {
        nbExceptionnelles++;
        caExceptionnelles += vente;
    }
}

//afficher les résultats
console.log("Nombre total de ventes :", nombreVentes);
console.log("Chiffre d'affaires total :", chiffreAffaires);
console.log("Vente maximale :", maximum);
console.log("Vente minimale :", minimum);
console.log("Nombre de ventes exceptionnelles :", nbExceptionnelles);
console.log("CA des ventes exceptionnelles :", caExceptionnelles);
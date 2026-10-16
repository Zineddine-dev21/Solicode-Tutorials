// 2.3. Livrable

let sequence = ["Ignition", 1, 2, 3, 4, 5, "Préparation"];

for(let i = sequence.length-1; i >=0; i--){
    console.log(sequence[i]);
}
console.log("Décollage !");

// L'index de départ doit être sequence.length - 1, 
// car les index commencent à 0 et le dernier élément se trouve à cet index.
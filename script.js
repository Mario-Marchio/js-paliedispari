
function Palindroma(word) {
    const betterWord = word.toLowerCase().trim();
    
    for (let i = 0; i < betterWord.length / 2; i++) {
      if (betterWord[i] === betterWord[betterWord.length - 1 - i]) {
        return true;
      }else{
        return false;
      }
    }
    
  }

  const name = prompt(`Inserisci il tuo nome:`);
  
  const reverseWord = Palindroma(name);
  
  if (reverseWord) {
    console.log(`La parola inserita è palindroma.`);
  } else {
    console.log(`La parola inserita non è palindroma.`);
  }






//   -------------------------------------------------------------------------

function numeroRandom() {
    return Math.floor(Math.random() * 5) + 1;
    }
    
function pari(numero) {
    return numero % 2 === 0;
    }
  
const sceltaUtente = prompt("Scegli tra pari e dispari:");

const numeroUtente = parseInt(prompt("Inserisci un numero da 1 a 5:"));
console.log("Il numero scelto dall'utente è: " + numeroUtente);
  
const numeroComputer = numeroRandom();
console.log("Il numero generato dal computer è: " + numeroComputer);
  
const somma = numeroUtente + numeroComputer;
console.log("La somma dei due numeri è: " + somma);
  
const isSommaPari = pari(somma);
  
let messaggioSomma;
if (isSommaPari) {
    messaggioSomma = "pari";
} else {
    messaggioSomma = "dispari";
}
console.log("La somma è " + messaggioSomma);
  
let vincitore;
if ((sceltaUtente === "pari" && isSommaPari) || (sceltaUtente === "dispari" && !isSommaPari)) {
    vincitore = "Utente";
} else {
    vincitore = "Computer";
}
console.log("Il vincitore è: " + vincitore);


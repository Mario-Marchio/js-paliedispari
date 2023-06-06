
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
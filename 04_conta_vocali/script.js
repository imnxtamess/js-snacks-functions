/* Scrivi una funzione che accetti una stringa e restituisca il numero di vocali contenute al suo interno */

const word = 'javascript';


// Dichiara la funzione qui.

function findVowels(input) {
  const vowels = ["a", "e", "i", "o", "u"]
  const inputVowels = []
  for (let i = 0; i < input.length; i++) {
    thisLetter = input[i]
    if (vowels.includes(thisLetter)) {
      inputVowels.push(thisLetter)
    }
  }
  return inputVowels
}

// Invoca la funzione qui e stampa il risultato in console

console.log(findVowels(word))


//Risultato atteso se si passa 'javascript': 3 (a, a, i)
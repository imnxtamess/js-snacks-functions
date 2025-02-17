/* Scrivi una funzione che accetti un'array di stringhe e una lettera e restituisca un array contenente solo le parole che iniziano con quella lettera */

const names = ["Anna", "Luca", "Marco", "Adele", "Laura", "Alessandra"];

const letter = "a"

// Dichiara la funzione qui.

function find_names_with_initials(arr, lett) {
  const nameInitials = []
  for (let i = 0; i < arr.length; i++) {
    const thisName = arr[i];
    if (thisName.charAt(0).toLowerCase() === lett.toLowerCase()) {
      nameInitials.push(thisName)
    }
  }
  return nameInitials
}

// Invoca la funzione qui e stampa il risultato in console

console.log(find_names_with_initials(names, letter));

//Risultato atteso se si passa la lettera A: ["Anna", "Adele", "Alessandra"]
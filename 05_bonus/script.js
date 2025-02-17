/* Scrivi una funzione che accetti una stringa contenente un nome e restituisca un saluto seguito dal nome fornito. 
Il saluto deve essere :
buongiorno se è mattina (fino alle 13), 
buon pomeriggio se è pomeriggio (fino alle 17) 
e buonasera se è sera (oltre le 17)
*/

const name = 'Mario';


// Dichiara la funzione qui.

const date = new Date()
const currentHour = date.getHours()

function sayHello(hour, person) {
  if (hour <= 13) {
    console.log(`Buongiorno ${person}`);
  }
  else if (hour <= 17) {
    console.log(`Buon pomeriggio ${person}`);
  }
  else if (hour <= 23) {
    console.log(`Buonasera ${person}`);
  }
  else if (hour <= 4) {
    console.log(`Buonanotte${person}`);
  }
  return
}





// Invoca la funzione qui e stampa il risultato in console


console.log(sayHello(currentHour, name));


//Risultato atteso se si passa 'Mario' alle 18: // Buonasera Mario.
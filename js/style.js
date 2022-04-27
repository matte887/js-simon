// Visualizzare in pagina 5 numeri casuali. Da lì parte un timer di 30 secondi.
// Dopo 30 secondi l'utente deve inserire, uno alla volta, i numeri che ha visto precedentemente, tramite il prompt().
// Dopo che sono stati inseriti i 5 numeri, il software dice quanti e quali dei numeri da indovinare sono stati individuati.

// Creo cinque numeri casuali da 1 a 100 e li stampo in pagina.
let gameNumbers = [];

for (let i = 0; i < 5; i++) {
    const randomNumber = getRndInteger(1, 100);
    gameNumbers.push(randomNumber);
}

const numbersContainer = document.getElementById("numbers");

numbersContainer.innerHTML = `Memorizza questi numeri: ${gameNumbers[0]}, ${gameNumbers[1]}, ${gameNumbers[2]}, ${gameNumbers[3]}, ${gameNumbers[4]}`;

// Imposto una funzione di timeout. Allo scadere del tempo aggiungo una classe che fa sparire i numeri.
setTimeout(function(){
    numbersContainer.classList.add("hide");
}, 3000);

// Chiedo all'utente i numeri
setTimeout(function(){
    let userAnswer = [];
    for (let i = 0; i < gameNumbers.length; i++) {
        userAnswer.push(parseInt(prompt(`Inserisci un numero che ricordi e premi "Invio".`)));
    }
    
    console.log(userAnswer);

    const correctContainer = compareArray(gameNumbers, userAnswer);
    console.log(correctContainer);

    let result = `Hai indovinato ${correctContainer.lenght} numeri su 5. Le risposte corrette sono state: `;
    for (let i = 0; i < correctContainer.length; i++) {
        result += `${correctContainer[i]} `;        
    }

    const resultOnPage = document.getElementById("result");
    resultOnPage.innerHTML = result;
    
}, 3010);

// FUNCTIONS
function getRndInteger(min, max) {
    return Math.floor(Math.random() * (max - min + 1) ) + min;
}

/**
 * Descrizione: la funzione confronta i dati contenuti in un array userArray con quelli contenuti in correctArray.
 * @param {any} correctArray -> sono i dati che userArray dovrebbe contenere.
 * @param {any} userArray -> sono i dati da confrontare con correctArray.
 * @returns {array} -> la funzione restituisce un array contenente i valori che matchano. 
 */
function compareArray (correctArray, userArray) {
    let correctAnswers = [];
    for (let i = 0; i < correctArray.length; i++) {
        if (userArray.includes(correctArray[i])) {
            correctAnswers.push(correctArray[i]);
        }    
    }
    return correctAnswers
}
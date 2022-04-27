// Visualizzare in pagina 5 numeri casuali. Da lì parte un timer di 30 secondi.
// Dopo 30 secondi l'utente deve inserire, uno alla volta, i numeri che ha visto precedentemente, tramite il prompt().
// Dopo che sono stati inseriti i 5 numeri, il software dice quanti e quali dei numeri da indovinare sono stati individuati.

// Creo cinque numeri casuali da 1 a 100 non ripetuti e li stampo in pagina.
let gameNumbers = [];

while (gameNumbers.length <= 4) {
    const randomNumber = getRndInteger(1, 100);
    if (!gameNumbers.includes(randomNumber)) {
        gameNumbers.push(randomNumber);
    };
};

const numbersContainer = document.getElementById("numbers");

numbersContainer.innerHTML = `Memorizza questi numeri: ${gameNumbers[0]}, ${gameNumbers[1]}, ${gameNumbers[2]}, ${gameNumbers[3]}, ${gameNumbers[4]}`;

// Imposto una funzione di timeout. Allo scadere del tempo aggiungo una classe che fa sparire i numeri.
setTimeout(function(){
    numbersContainer.classList.add("hide");

    setTimeout(function(){
        // Chiedo all'utente i numeri e li stampo in un array.
        let userAnswer = [];
        for (let i = 0; i < gameNumbers.length; i++) {
            userAnswer.push(parseInt(prompt(`Inserisci un numero che ricordi e premi "Invio".`)));
        }
        
        console.log("Risposta utente: ", userAnswer);
    
        // Richiamo la funzione che confronta gli array.
        const correctContainer = compareArray(gameNumbers, userAnswer);
        console.log(correctContainer);
    
        // Scrivo il risultato.
        let result = `Hai indovinato ${correctContainer.length} numeri su 5. Le risposte corrette sono state: `;
        for (let i = 0; i < correctContainer.length; i++) {
            result += `${correctContainer[i]} `;        
        };
        
        // Stampo il risultato in pagina.
        const resultOnPage = document.getElementById("result");
        resultOnPage.innerHTML = result;
        
    }, 100);
}, 3000);



// FUNCTIONS
function getRndInteger(min, max) {
    return Math.floor(Math.random() * (max - min + 1) ) + min;
}

/**
 * Descrizione: la funzione confronta i dati contenuti in un array nbrsToCompare con quelli contenuti in correctArray.
 * @param {any} correctArray -> sono i dati che nbrsToCompare dovrebbe contenere.
 * @param {any} nbrsToCompare -> sono i dati da confrontare con correctArray.
 * @returns {array} -> la funzione restituisce un array contenente i valori che matchano. 
 */
function compareArray (correctArray, nbrsToCompare) {
    let correctAnswers = [];
    for (let i = 0; i < correctArray.length; i++) {
        if (nbrsToCompare.includes(correctArray[i])) {
            correctAnswers.push(correctArray[i]);
        }    
    }
    return correctAnswers;
}
//! Prima funzione controllo 9 caratteri
function characters() {
    let password = document.getElementById('my-input').value;
    let liOne = document.querySelector('.li-one');
    let liTwo = document.querySelector('.li-two');
    let liThree = document.querySelector('.li-three');
    let liFour = document.querySelector('.li-four');

    if (password.length < 9) {
        liOne.classList.add('black');
        console.log('La password non può essere minore di 9 caratteri');
    } else {
        liOne.classList.add('green');
        console.log('Primo Check');
    }
}


//! Seconda funzione controllo lettera maiuscola
function capitalLetter() {
    let password = document.getElementById('my-input').value;

    //Espressione regolare /[A-Z]/: Questa espressione controlla se c’è almeno un carattere maiuscolo nella password.
	// A-Z rappresenta tutti i caratteri maiuscoli.
    // test(password) restituisce true se trova almeno un carattere che corrisponde alla condizione e false altrimenti.
    if (!/[A-Z]/.test(password) ) {
        console.log('La password deve avere almeno un carattere maiuscolo');
    } else {
        console.log('Secondo Check');
    }
}

//! Terza funzione controllo numeri
function number() {
    let password = document.getElementById('my-input').value;

    if (!/[0-9]/.test(password)) {
        console.log('La password deve avere almeno un numero');
    } else {
        console.log('Terzo Check');
    }
}

//! Quarta funzione controllo caratteri speciali
function specialCharacter() {
    const sC = ['!', '?', '/', '+', '*'];

    let password = document.getElementById('my-input').value;

    // password.includes(char) = La funzione includes() verfica se la password contiene uno dei caratteri speciali. 
    // Al posto di char posso mettere anche pippo. Mi rappresenta l'elemento dell'array.
    // il metoodo 'some' mi restituise true se almeno uno degli elementi dell'array soddisfa la condizione
    
    const control = sC.some(char => password.includes(char));
    if(control){
        return console.log('Quarto Check')
    } else {
        return console.log('La password deve avere almeno un carattere speciale')
    }
    
}

// Aggiungo l'evento per eseguire la funzione al press di Enter
// Stiamo registrando un gestore per l’evento keydown, che viene attivato
// quando un tasto sulla tastiera viene premuto 
// mentre l’elemento my-input è in focus.

// Creo una funzione anonima con argomento event. Viene eseguita ogni volta che si verifica l'evento keydown
// L’oggetto event contiene informazioni sull’evento che si è verificato, come il tasto che è stato premuto.
document.getElementById('my-input').addEventListener('keydown', function (event) {
    // event.key è una proprietà dell’oggetto event che restituisce una stringa rappresentante il tasto specifico che è stato premuto.
    if (event.key === 'Enter') {
        characters();
        capitalLetter();
        number();
        specialCharacter();
    }
});
// Selettori globali
let iX = document.querySelectorAll('.icon-x'); // Seleziona tutte le icone di errore
let iV = document.querySelectorAll('.icon-v'); // Seleziona tutte le icone di successo

// Nascondi tutte le icone di successo all'inizio
iV.forEach(icon => {
    icon.style.display = 'none';
});

// Funzione per aggiornare la visualizzazione delle icone
// index: Indica quale coppia di icone (successo e errore) deve essere aggiornata. 
// Ad esempio, se index è 0, la funzione si riferisce al primo controllo (ad esempio, lunghezza della password).
function updateIcons(index, success) {
    if (success) {
        iX[index].style.display = 'none'; // Nascondi l'icona di errore
        iV[index].style.display = 'inline-block'; // Mostra l'icona di successo
    } else {
        iX[index].style.display = 'inline-block'; // Mostra l'icona di errore
        iV[index].style.display = 'none'; // Nascondi l'icona di successo
    }
}

// Funzione di avanzamento della progressBar
function updateBar() {
    let password = document.getElementById('my-input').value;
    let progress = 0;

    if (password.length >= 9) progress += 25;
    if (/[A-Z]/.test(password)) progress += 25;
    if (/[0-9]/.test(password)) progress += 25;
    const specialChars = ['!', '?', '/', '+', '*'];
    if (specialChars.some(char => password.includes(char))) progress += 25;

    // Aggiorna la barra di avanzamento
    document.getElementById('progress-bar').style.width = progress + '%';
}

// Funzione per controllare la password
function checkPassword() {
    let password = document.getElementById('my-input').value;

    // Controllo 1: lunghezza password
    let liOne = document.querySelector('.li-one');
    if (password.length < 9) {
        liOne.classList.add('grey');
        liOne.classList.remove('green');
        updateIcons(0, false); // Aggiorna per il primo controllo
    } else {
        liOne.classList.remove('grey');
        liOne.classList.add('green');
        updateIcons(0, true);
    }

    // Controllo 2: lettera maiuscola
    let liTwo = document.querySelector('.li-two');
    if (!/[A-Z]/.test(password)) {
        liTwo.classList.add('grey');
        liTwo.classList.remove('green');
        updateIcons(1, false);
    } else {
        liTwo.classList.remove('grey');
        liTwo.classList.add('green');
        updateIcons(1, true);
    }

    // Controllo 3: numero
    let liThree = document.querySelector('.li-three');
    if (!/[0-9]/.test(password)) {
        liThree.classList.add('grey');
        liThree.classList.remove('green');
        updateIcons(2, false);
    } else {
        liThree.classList.remove('grey');
        liThree.classList.add('green');
        updateIcons(2, true);
    }

    // Controllo 4: caratteri speciali
    const specialChars = ['!', '?', '/', '+', '*'];
    let liFour = document.querySelector('.li-four');
    if (specialChars.some(char => password.includes(char))) {
        liFour.classList.remove('grey');
        liFour.classList.add('green');
        updateIcons(3, true);
    } else {
        liFour.classList.add('grey');
        liFour.classList.remove('green');
        updateIcons(3, false);
    }

    updateBar(); // Aggiorna la barra di avanzamento
}

// Evento di pressione del tasto Enter
document.getElementById('my-input').addEventListener('keydown', function (event) {
    if (event.key === 'Enter') {
        checkPassword(); // Controlla la password quando viene premuto Enter
    }
});
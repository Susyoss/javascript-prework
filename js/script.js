
function printMessage(msg){
	let div = document.createElement('div'); //został utworzony div, którego nie widać na stronie//
	div.innerHTML = msg; //ten div będzie w sobie zawierał jakąś wiadomość, tag <div>jakaś wiadomość</div>, w tym divie moze się wyświetlać komunikat ////
	document.getElementById('messages').appendChild(div); //document.-odwołanie do dokumentu; .dołącz kolejne dziecko do elementu <div>//
}

function clearMessages(){
	document.getElementById('messages').innerHTML = ''; //'' oznacza "pusty"; w środku 'messages' zostanie wrzucony pusty ciąg znaków; to jest po to by wyświetlac komunikaty od nowa, żeby się "czyściło"//
}


// //komputer//
// var computerMove, randomNumber;
// randomNumber = Math.floor(Math.random() * 3 + 1);
// console.log('wylosowana liczba to: ' + randomNumber);
// if (randomNumber == '1') {
//   computerMove = 'kamień';
// } else if ( randomNumber == '2') {
// 	computerMove = 'papier';
// } else if ( randomNumber == '3') {
// 	computerMove = 'nożyce';
// } else {
//   computerMove = 'nieznany ruch';
// }
// printMessage('Mój ruch: ' + computerMove);


// //gracz//
// var playerMove, playerInput;
// playerInput = prompt('Wybierz swój ruch! 1: kamień, 2: papier, 3: nożyce.'); //prompt otwiera okienka
// console.log('Wpisana odpowiedź to: ' + playerInput);
// if (playerInput == '1') {
//   playerMove = 'kamień';
// } else if (playerInput  == '2') {
// 	playerMove = 'papier';
// } else if (playerInput == '3') {
// 	playerMove = 'nożyce';
// } else  { //cokolwiek innego się tu pojawi
//   playerMove = 'nieznany ruch';
// }
// printMessage('Twój ruch: ' + playerMove);

// ////////////////////////////////////////////////////////////////////////////



/**
 * Pobieranie nazwy ruchu
 */
function getMoveName(argMoveId) { //pobierz nazwę ruchu
    console.log('wywołano funkcję getMoveName z argumentem: ' + argMoveId);
    if (argMoveId == 1){
      return 'kamień';
    } else if (argMoveId == 2){
      return 'papier';
    } else if (argMoveId == 3){
      return 'nożyce';
    } else {
      return 'nieznany ruch';
    } 
}

/**
 * Wyświetlanie wyniku gry
 */
function displayResult(argPlayerMove, argComputerMove) { //przymuje ruch gracza i komputera
  console.log('wywołano funkcję displayResults z argumentami: ' + argPlayerMove + ', ' + argComputerMove);
  if (argPlayerMove == 'papier' && argComputerMove == 'kamień') {
    printMessage('Wygrywasz!');
  }else if (argPlayerMove == 'papier' && argComputerMove == 'nożyce') {
    printMessage('Przegrywasz!');
  }else if (argPlayerMove == argComputerMove){
    printMessage('Remis!');
  }else if (argPlayerMove == 'nożyce' && argComputerMove == 'kamień'){
    printMessage('Przegrywasz!');
  }else if (argPlayerMove == 'nożyce' && argComputerMove == 'papier'){
    printMessage('Wygrywasz!');
  }else if (argPlayerMove == 'kamień' && argComputerMove == 'nożyce'){
    printMessage('Wygrywasz');
  }else if (argPlayerMove == 'kamień' && argComputerMove == 'papier'){
    printMessage('Przegrywasz!');
  }
    printMessage('Zagrałem ' + argComputerMove + ', a Ty ' + argPlayerMove);
}


// playerInput = prompt('Wybierz swój ruch! 1: kamień, 2: papier, 3: nożyce.'); //kod, który się wykonuje
// console.log('wybór ruchu gracza to: ' + playerInput);

 


/**
 * Describe this function...
 */
function buttonClicked(buttonName) {
  clearMessages();
  console.log(buttonName + ' został kliknięty');
  const playerMove = buttonName;
  console.log('ruch gracza to: ' + playerMove);
  const randomNumber = Math.floor(Math.random() * 3 + 1);
  console.log('wylosowana liczba to: ' + randomNumber);
  const computerMove = getMoveName(randomNumber);
  console.log('ruch komputera to: ' + computerMove);
  displayResult(playerMove, computerMove);
}

const buttonRock = document.getElementById('button-rock');
buttonRock.addEventListener('click', function(){ 
  buttonClicked('kamień'); 
});

const buttonPaper = document.getElementById('button-paper');
buttonPaper.addEventListener('click', function(){ 
  buttonClicked('papier'); 
});

const buttonScissors = document.getElementById('button-scissors');
buttonScissors.addEventListener('click', function(){ 
  buttonClicked('nożyce'); 
});
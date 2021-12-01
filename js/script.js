function printMessage(msg){
	var div = document.createElement('div');
	div.innerHTML = msg;
	document.getElementById('messages').appendChild(div);
    var computerMove;
    computerMove = 'kamień';
    printMessage('Zagrałem ' + computerMove + '! Jeśli Twój ruch to papier, to wygrywasz!');
    var playerMove;
    playerMove = 'papier';
    printMessage('Zagrałem ' + playerMove + '! Jeśli Twój ruch to papier, to wygrywasz!');
    var randomNumber;
    randomNumber = Math.floor(Math.random() * 3 + 1);
    printMessage('Wylosowana liczba to: ' + randomNumber);
    if (randomNumber == '1') {
        computerMove = 'kamień';
    } else {
        computerMove = 'nieznany ruch';
    }
      printMessage('Mój ruch: ' + computerMove);
    if (randomNumber == '2') {
        computerMove == 'papier';
    } else {
        computerMove = 'nieznany ruch';
    }
    if (randomNumber == '3') {
        computerMove == 'nożyce';
    } else {   
        computerMove = 'nieznany ruch';
    } 
    var playerMove, playerInput;
    playerInput = prompt('Wybierz swój ruch! 1: kamień, 2: papier, 3: nożyce.');
    console.log('Wpisana odpowiedź to: ' + playerInput);
    if (playerInput == '1') {
    playerMove = 'kamień';
    } else {
    playerMove = 'nieznany ruch';
    }
    printMessage('Twój ruch: ' + playerMove);
    if (playerInput == '2') {
    playerMove = 'papier';
    } else {
    playerMove = 'nieznany ruch';
    }
    printMessage('Twój ruch: ' + playerMove);
    if (playerInput == '3') {
    playerMove = 'nożyce';
    } else {
    playerMove = 'nieznany ruch';
    }
    printMessage('Twój ruch: ' + playerMove);
    var argMoveId, argPlayerMove, argComputerMove, computerMove, playerMove, randomNumber, playerInput;

/**
 * Describe this function...
 */
 {
const playGame = function(playerInput){
clearMessages();
        
const getMoveName = function(argMoveId){
if(argMoveId == 1){
return 'kamień';
}
else if(argMoveId == 2){
return "papier";
}
else if(argMoveId == 3){
return "nożyce"
} else {
printMessage('Nie znam ruchu o id ' + argMoveId + '.');
return 'nieznany ruch';
    }
}
        
const displayResult = function (argComputerMove, argPlayerMove){
    if( argComputerMove == 'kamień' && argPlayerMove == 'papier'){
    printMessage('Ty wygrywasz!');
    }
    else if( argComputerMove == 'papier' && argPlayerMove == 'nożyce'){
    printMessage('Ty wygrywasz!');
    }
    else if( argComputerMove == "nożyce" && argPlayerMove =='kamień'){
    printMessage('Ty wygrywasz!');
    }
    else if( argComputerMove == 'kamień' && argPlayerMove == 'nożyce'){
    printMessage('Przegrywasz:(');
    }
    else if( argComputerMove == 'kamień' && argPlayerMove == 'kamień'){
    printMessage('REMIS');
    }
    else if( argComputerMove == 'papier' && argPlayerMove == 'kamień'){
    printMessage('Przegrywasz:(');
    }
    else if( argComputerMove == 'papier' && argPlayerMove == 'papier'){
    printMessage('REMIS');
    }
    else if( argComputerMove == 'nożyce' && argPlayerMove == 'papier'){
    printMessage('Przegrywasz:(');
    }
    else if( argComputerMove == 'nożyce' && argPlayerMove == 'nożyce' ){
    printMessage('REMIS');
    }
            
}

function clearMessages(){
	document.getElementById('messages').innerHTML = '';
}
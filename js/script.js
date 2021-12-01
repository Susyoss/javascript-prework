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
}

function clearMessages(){
	document.getElementById('messages').innerHTML = '';
}
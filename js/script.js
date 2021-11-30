function printMessage(msg){
	var div = document.createElement('div');
	div.innerHTML = msg;
	document.getElementById('messages').appendChild(div);
    var computerMove;
    computerMove = 'kamień';
    printMessage('Zagrałem ' + computerMove + '! Jeśli Twój ruch to papier, to wygrywasz!');
    var computerMove;
    computerMove = 'papier';
    printMessage('Zagrałem ' + computerMove + '! Jeśli Twój ruch to papier, to wygrywasz!');
}

function clearMessages(){
	document.getElementById('messages').innerHTML = '';
}
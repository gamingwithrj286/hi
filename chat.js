const socket = io.connect('https://cyberchat.rohilpatel.repl.co/');
const text = document.getElementById('text');

//get username of person
let username = localStorage.getItem('username');

//validate username


text.addEventListener('keyup', event => {
	if (event.keyCode == 13) {
		if (text.value === '') {
			alert('You need to enter a message!');
			return;
		}

		socket.emit('chat', {
			username,
			text: text.value
		});
		text.value = '';
	}
});
//mostleleler
socket.on('chat', chat => {
	document.getElementById('window').innerHTML += `<div id = "message"><b>${
		chat.username
	}</b>: ${chat.text}</div>
`;
});

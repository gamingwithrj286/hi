//const socket = io.connect("https://cyberchat.rohilpatel.repl.co");

const username = document.getElementById("un");

username.addEventListener("keyup", (event) => {
  if (event.keyCode == 13) {
    event.preventDefault();
    localStorage.setItem("username", username.value);
  }
});


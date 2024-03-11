const commandInput = document.getElementById("command");
const output = document.querySelector(".output");
const container = document.querySelector(".container");
const appwindow = document.querySelector(".app-window")

let ip = '';

window.onload = () => {
  fetch('https://api.ipify.org?format=json')
  .then(response => response.json())
  .then(data => {
      ip = data.ip; 
      output.innerHTML = `${ip}@jsh.lol><span class="cursor">|</span>`;
  })
  .catch(error => {
    console.error('Error:', error);
  });

}

function updateCanvasSize() {
  if (window.innerWidth <= 768) {
    appwindow.style.width = "90%";
  } else {
    appwindow.style.width = "100%";
  }
}

window.addEventListener('resize', updateCanvasSize);


function add_cursor() {

  output.innerHTML += `<p>${ip}@jsh.lol><span class='cursor'>|</span></p>`;
  commandInput.value = "";

}

function remove_cursor() {

  const cursorElements = document.querySelectorAll('.cursor');
      cursorElements.forEach(cursorElement => {
        cursorElement.parentNode.removeChild(cursorElement);
      });

}


function randomHexColorCode() {
  let n = (Math.random() * 0xfffff * 1000000).toString(16);
  return '#' + n.slice(0, 6);
};



commandInput.addEventListener("keyup", function(event) {
  if (event.keyCode === 13) {
    event.preventDefault();
    const command = commandInput.value.toLowerCase();
    
    const commands = {
      help: "Commands: About, Contact, Clear, Namemc, Socials",
      about: "Hi, I'm Joshua. I love programming in Python, HTML, CSS, JS.",
      contact: `You can contact me either by emailing me at <a href='mailto:me@jsh.lol'>me@jsh.lol</a> or on Discord <a href='https://discord.com/channels/442142462857707520'>here</a>.`,
      clear: `<p>${ip}@jsh.lol><span class='cursor'>|</span></p>`,
      cls: `<p>${ip}@jsh.lol><span class='cursor'>|</span></p>`,
      namemc: `${ip}@jsh.lol>`,
      socials: ``
    };

    if (command === 'clear' || command === 'cls') {
      output.innerHTML = "<p>" + commands[command] + "</p>";
      commandInput.value = "";

    } else if (command === 'contact') {
      output.innerHTML += "<p>" + command + `: You can contact me by either emailing me at <a style="color: ${randomHexColorCode()};" href='mailto:me@jsh.lol'>me@jsh.lol</a> or on Discord <a style="color: ${randomHexColorCode()};" href='https://discord.com/channels/442142462857707520'>here</a>.</p>`;
      commandInput.value = "";

      remove_cursor()

      add_cursor()

    } else if (command === 'namemc') {
      var players = [
        { name: "Slakoth", uuid: "2158f9f4-3513-44a2-80db-c649003959fa", image: "https://mc-heads.net/avatar/2158f9f4-3513-44a2-80db-c649003959fa" },
      ];

      var htmlContent = "";
      players.forEach(player => {
        htmlContent += `
          <a style="color: ${randomHexColorCode()};" target="_blank" href="https://namemc.com/profile/${player.uuid}">
            ${player.name} <img style="width: 20px; height: 20px;" src="${player.image}">
          </a>`;
      });

      output.innerHTML += "<p>" + command +  ": " + htmlContent + "</p>";
      commandInput.value = "";

      remove_cursor()

      add_cursor()

    } else if (command === 'socials') {
      var social_stuff = [
        { name: "Discord", url: "https://discord.com/channels/442142462857707520"},
        { name: "My Anime List", url: "https://myanimelist.net/profile/Joshua545"}
        
      ];

      var htmlContent = "";
      social_stuff.forEach(social => {
        htmlContent += `
          <a style="color: ${randomHexColorCode()};" target="_blank" href="${social.url}">
            ${social.name}
          </a>`;
      });

      output.innerHTML += "<p>" + command +  ": " + htmlContent + "</p>";
      commandInput.value = "";

      remove_cursor()

      add_cursor()

    } else if (command === '') {

      remove_cursor()
      
      add_cursor()

    } else {
      const response = commands[command] || "Command not found. Type 'help' for a list of commands.";
      output.innerHTML += "<p>" + command + ": " + response + "</p>";
      commandInput.value = "";

      remove_cursor()
      
      add_cursor()
    }
  }
});





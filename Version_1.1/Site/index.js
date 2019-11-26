const radioList = document.querySelector("select");
const audio = document.querySelector("audio");

async function getRadios() {
  const result = await fetch("./radios.json");
  return await result.json();
}

function fillSelect() {
  getRadios().then(radios => {
    let option;
    console.log(radios.length);
    for (var j = 0; j < radios.length; j++) {
      option = document.createElement("option");
      var radio = radios[j];
      // Check if readable by audio player
      if(radio.link.includes('.mp3'))
      {
        option.value = radios[j].link;
        option.textContent = radios[j].name;
        radioList.appendChild(option);
      }
    }
    radioList.onchange = ev => {
      audio.src = ev.target.value;
      console.log(ev.target.value);
      audio.play();
      localStorage.setItem("current_radio", audio.src);
      localStorage.setItem("option_index", radioList.selectedIndex);
    };

    audio.src = localStorage.getItem("current_radio");
    radioList.selectedIndex = localStorage.getItem("option_index");
  });
}

fillSelect();
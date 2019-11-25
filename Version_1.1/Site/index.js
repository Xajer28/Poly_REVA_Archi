const radioList = document.querySelector("select");
const audio = document.querySelector("audio");

async function getRadios() {
  const result = await fetch("./radios.json");
  return await result.json();
}

function fillSelect() {
  getRadios().then(radios => {
    let option;
    var tab = radios.radios_linuxpedia;
    console.log(tab.length);
    for (var j = 0; j < tab.length; j++) {
      option = document.createElement("option");
      option.value = tab[j].link;
      option.textContent =  tab[j].name;
      radioList.appendChild(option);
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
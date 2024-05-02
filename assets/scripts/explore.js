// explore.js
const synth = window.speechSynthesis;
let voiceSelect;
let voices = [];

window.addEventListener('DOMContentLoaded', init);

function populateVoices() {
  voices = synth.getVoices();

  for (let i = 0; i < voices.length; i++) {
    const option = document.createElement('option');
    option.textContent = `${voices[i].name} (${voices[i].lang})`;

    if (voices[i].default) {
      option.textContent += " — DEFAULT";
    }

    option.setAttribute("data-lang", voices[i].lang);
    option.setAttribute("data-name", voices[i].name);
    voiceSelect.appendChild(option);
  }
}

function speakText() {
  const inputTxt = document.getElementById("text-to-speak");
  const utterance = new SpeechSynthesisUtterance(inputTxt.value);
  const selectedOption =
    voiceSelect.selectedOptions[0].getAttribute("data-name");
  for (let i = 0; i < voices.length; i++) {
    if (voices[i].name === selectedOption) {
      utterance.voice = voices[i];
    }
  }
  // Add event listener for when speech starts
  utterance.addEventListener('start', function() {
      // Code to execute when speech starts
      document.getElementsByTagName('img').item(0).src = "assets/images/smiling-open.png";
  });

  // Add event listener for when speech ends
  utterance.addEventListener('end', function() {
      // Code to execute when speech ends
      document.getElementsByTagName('img').item(0).src = "assets/images/smiling.png";
  });
  synth.speak(utterance);
}


function init() {
  voiceSelect = document.querySelector("select");
  if (speechSynthesis.onvoiceschanged !== undefined) {
    speechSynthesis.onvoiceschanged = populateVoices;
  }
  populateVoices();

  document.querySelector("button").addEventListener('click', speakText); 
}
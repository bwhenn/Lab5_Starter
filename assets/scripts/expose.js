// expose.js
const jsConfetti = new JSConfetti();

const imageSources = {
  "air-horn": "assets/images/air-horn.svg",
  "car-horn": "assets/images/car-horn.svg",
  "party-horn": "assets/images/party-horn.svg"
};

const soundSources = {
  "air-horn": "assets/audio/air-horn.mp3",
  "car-horn": "assets/audio/car-horn.mp3",
  "party-horn": "assets/audio/party-horn.mp3"
};

const volumeIcons = ["assets/icons/volume-level-0.svg", "assets/icons/volume-level-1.svg", 
                    "assets/icons/volume-level-2.svg", "assets/icons/volume-level-3.svg"];

window.addEventListener('DOMContentLoaded', init);

function changeSources() {
  var selected = this.value;
  var imgSrc = imageSources[selected];
  var audioSrc = soundSources[selected];
  document.querySelector('img').src = imgSrc;
  document.getElementsByTagName('audio').item(0).src = audioSrc; 
}

function confetti() {
  jsConfetti.addConfetti();
}

function changeVolumeImage() {
  const value = this.value;
  if (value == 0) {
    document.getElementsByTagName('img').item(1).src = volumeIcons[0];
  } else if (value >= 1 && value <= 32) {
    document.getElementsByTagName('img').item(1).src = volumeIcons[1];
  } else if (value >= 33 && value <= 66) {
    document.getElementsByTagName('img').item(1).src = volumeIcons[2];
  } else {
    document.getElementsByTagName('img').item(1).src = volumeIcons[3];
  } 

  document.getElementsByTagName('audio').item(0).volume = value / 100; 
}


function init() {
  document.getElementById("horn-select").addEventListener('change', changeSources);

  document.getElementsByTagName('button').item(0).addEventListener('click', function() {
    document.getElementsByTagName('audio').item(0).play();
    if (document.getElementById("horn-select").value == "party-horn") {
      confetti();
    }
  });

  document.getElementsByTagName('input').item(0).addEventListener('input', changeVolumeImage);
}
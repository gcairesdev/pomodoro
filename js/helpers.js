const $ = selector => document.querySelector(selector);

const minutesToSeconds = minutes => minutes * 60;

const secondsToMinutes = seconds => Math.floor(seconds / 60);

const setButtonColor = color => $('#controlButton').style.color = color;

const setButtonText = text => controlBtn.value = text;
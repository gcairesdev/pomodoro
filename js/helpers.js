const $ = selector => document.querySelector(selector);

const minutesToSeconds = minutes => minutes * 60;

const secondsToMinutes = seconds => Math.floor(seconds / 60);

const clearActiveTab = () => $('.active').classList.remove('active');

const changePageColor = color => document.body.style.backgroundColor = color;

const changePageTitle = text => document.title = text;
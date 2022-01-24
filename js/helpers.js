const $ = selector => document.querySelector(selector);

const minutesToSeconds = minutes => minutes * 60;

const secondsToMinutes = seconds => Math.floor(seconds / 60);

const setButtonColor = color => controlBtn.style.color = color;

const setButtonText = text => controlBtn.value = text;

const setPageTitle = text => document.title = text;

const setPageColor = color => document.body.style.background = color;

const setPageFavicon = name => {
    $('#favicon').href = `img/${name}.ico`;
    $('#favicon16').href = `img/${name}-16x16.png`;
    $('#favicon32').href = `img/${name}-32x32.png`;
};
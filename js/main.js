const displayTimer = $('#timer');
const controlBtn = $('#controlButton');

let interval;

let timerInSeconds = minutesToSeconds(25);

controlBtn.addEventListener('click', function() {
    timerIsRunning() ? stopTimer() : startTimer();
    changeButtonText();
});

const changeButtonText = () => controlBtn.value = controlBtn.value === 'START' ? 'STOP' : 'START';

const timerIsRunning = () => controlBtn.value === 'STOP';

const startTimer = () => {
    interval = setInterval(() => {
        timerInSeconds--;
        updateDisplayTimer(formatTimer());
    }, 1000);
}

const stopTimer = () => clearInterval(interval);

const formatTimer = () => {
    const minutes = secondsToMinutes(timerInSeconds);
    const seconds = timerInSeconds % 60;

    const minutesZeroLeft = String(minutes).padStart(2, '0')
    const secondsZeroLeft = String(seconds).padStart(2, '0')

    return `${minutesZeroLeft}:${secondsZeroLeft}`; 
}

const updateDisplayTimer = value => displayTimer.innerText = value;
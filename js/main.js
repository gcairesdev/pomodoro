
let interval;
let timerInSeconds = 25 * 60;

const displayTimer = $('#timer');
const controlBtn = $('#controlButton');

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
    const minutes = Math.floor(timerInSeconds/60);
    const seconds = timerInSeconds % 60;

    const minutesZeroLeft = String(minutes).padStart(2, '0')
    const secondsZeroLeft = String(seconds).padStart(2, '0')

    return `${minutesZeroLeft}:${secondsZeroLeft}`; 
}

const updateDisplayTimer = value => displayTimer.innerText = value;
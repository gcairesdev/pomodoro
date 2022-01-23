const displayTimer = $('#timer');
const controlBtn = $('#controlButton');
const pomodoroTab = $('#pomodoroTab');

let interval;

let timerInSeconds = minutesToSeconds(25);

controlBtn.addEventListener('click', function () {
    timerIsRunning() ? stopTimer() : startTimer();
    changeButtonText();
});

const changeButtonText = () => controlBtn.value = controlBtn.value === 'START' ? 'STOP' : 'START';

const timerIsRunning = () => controlBtn.value === 'STOP';

const startTimer = () => {
    interval = setInterval(() => {
        timerInSeconds--;
        updateDisplayTimer(formatTimer());
        if (timerInSeconds === 0) stopTimer();
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

const activePomodoroTab = () => {
    clearActiveTab();
    pomodoroTab.classList.add('active');
}

pomodoroTab.addEventListener('click', activePomodoroTab);
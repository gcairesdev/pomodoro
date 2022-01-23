const displayTimer = $('#timer');
const controlBtn = $('#controlButton');
const pomodoroTab = $('#pomodoroTab');

const pomodoroMinutes = 25;
let timeInMinutes = pomodoroMinutes;
let timerInSeconds = minutesToSeconds(timeInMinutes);

let interval;

controlBtn.addEventListener('click', () => timerIsRunning() ? stopTimer() : startTimer());

const changeButtonText = () => controlBtn.value = controlBtn.value === 'START' ? 'STOP' : 'START';

const timerIsRunning = () => controlBtn.value === 'STOP';

const startTimer = () => {
    interval = setInterval(() => {
        timerInSeconds--;
        updateDisplayTimer(formatTimer());
        if (timerInSeconds === 0) resetTimer();
    }, 1000);
    changeButtonText();
}

const stopTimer = () => {
    clearInterval(interval);
    changeButtonText();
}

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
    changePageColor('#d95550');
    pomodoroTab.classList.add('active');
    timeInMinutes = pomodoroMinutes;
    timerInSeconds = minutesToSeconds(timeInMinutes);
    updateDisplayTimer(formatTimer(timerInSeconds));
}

pomodoroTab.addEventListener('click', activePomodoroTab);

const resetTimer = () => {
    stopTimer();
    timerInSeconds = minutesToSeconds(timeInMinutes);
    updateDisplayTimer(formatTimer());
}
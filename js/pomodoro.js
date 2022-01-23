const pomodoroMinutes = 25;
const pomodoroColor = '#d95550';
const pomodoro = $('#pomodoroTab');

pomodoro.onclick = () => {
    timerIsRunning() && stopTimer();

    setActiveTab(pomodoro);
    setButtonColor(pomodoroColor);
    setPageColor(pomodoroColor);
    setPageTitle('Pomodoro');

    timeInMinutes = pomodoroMinutes;
    timerInSeconds = minutesToSeconds(timeInMinutes);
    updateDisplayTimer(formatTimer(timerInSeconds));
};

pomodoro.click();
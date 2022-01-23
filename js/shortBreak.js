const shortBreakMinutes = 5;

const shortBreak = $('#shortBreakTab');

const activeShortBreakTab = () => {
    clearActiveTab();
    changePageColor('#5092d9');
    shortBreak.classList.add('active');
    timeInMinutes = shortBreakMinutes;
    timerInSeconds = minutesToSeconds(timeInMinutes);
    updateDisplayTimer(formatTimer(timerInSeconds));
}

shortBreak.addEventListener('click', activeShortBreakTab);
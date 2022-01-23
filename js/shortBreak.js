const shortBreak = $('#shortBreakTab');

const activeShortBreakTab = () => {
    clearActiveTab();
    changePageColor('#5092d9');
    shortBreak.classList.add('active');
    timerInSeconds = minutesToSeconds(5);
    updateDisplayTimer(formatTimer(timerInSeconds));
}

shortBreak.addEventListener('click', activeShortBreakTab);
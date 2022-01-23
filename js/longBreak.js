const longBreakMinutes = 15;

const longBreak = $('#longBreakTab');

const activelongBreakTab = () => {
    clearActiveTab();
    changePageColor('#375192');
    longBreak.classList.add('active');
    timeInMinutes = longBreakMinutes;
    timerInSeconds = minutesToSeconds(timeInMinutes);
    updateDisplayTimer(formatTimer(timerInSeconds));
}

longBreak.addEventListener('click', activelongBreakTab);
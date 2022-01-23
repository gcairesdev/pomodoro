const longBreak = $('#longBreakTab');

const activelongBreakTab = () => {
    clearActiveTab();
    changePageColor('#375192');
    longBreak.classList.add('active');
    timerInSeconds = minutesToSeconds(15);
    updateDisplayTimer(formatTimer(timerInSeconds));
}

longBreak.addEventListener('click', activelongBreakTab);
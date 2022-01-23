const longBreakMinutes = 15;
const longBreakColor = '#375192';
const longBreak = $('#longBreakTab');

longBreak.onclick = () => {
    timerIsRunning() && stopTimer();
    
    setActiveTab(longBreak);
    changePageColor(longBreakColor);
    changePageTitle('Long Break');

    timeInMinutes = longBreakMinutes;
    timerInSeconds = minutesToSeconds(timeInMinutes);
    updateDisplayTimer(formatTimer(timerInSeconds));
};
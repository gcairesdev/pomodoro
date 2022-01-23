const longBreakMinutes = 15;
const longBreakColor = '#375192';
const longBreak = $('#longBreakTab');

longBreak.onclick = () => {
    timerIsRunning() && stopTimer();
    
    setActiveTab(longBreak);
    setPageColor(longBreakColor);
    setPageTitle('Long Break');

    timeInMinutes = longBreakMinutes;
    timerInSeconds = minutesToSeconds(timeInMinutes);
    updateDisplayTimer(formatTimer(timerInSeconds));
};
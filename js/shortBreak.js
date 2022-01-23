const shortBreakMinutes = 5;
const shortBreakColor = '#5092d9';
const shortBreak = $('#shortBreakTab');

shortBreak.onclick = () => {
    timerIsRunning() && stopTimer();
    
    setActiveTab(shortBreak);
    setButtonColor(shortBreakColor);
    setPageColor(shortBreakColor);
    setPageTitle('Short Break');
    
    timeInMinutes = shortBreakMinutes;
    timerInSeconds = minutesToSeconds(timeInMinutes);
    updateDisplayTimer(formatTimer(timerInSeconds));
};
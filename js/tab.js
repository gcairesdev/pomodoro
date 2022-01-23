const clearActiveTab = () => $('.active').classList.remove('active');

const getActiveTab = () => $('.active').innerText;

const setActiveTab = (tab, color, minutes) => {
    stopTimer();
    clearActiveTab();
    changePageColor(color);
    tab.classList.add('active');
    timeInMinutes = minutes;
    timerInSeconds = minutesToSeconds(timeInMinutes);
    updateDisplayTimer(formatTimer(timerInSeconds));
    changePageTitle(tab.innerText);
}
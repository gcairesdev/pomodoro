const tabs = [
    ['Pomodoro', $('#pomodoroTab'), '#d95550', 25],
    ['Short Break', $('#shortBreakTab'), '#5092d9', 5],
    ['Long Break', $('#longBreakTab'), '#375192', 15],
];

const clearActiveTab = () => $('.active').classList.remove('active');

const getActiveTab = () => $('.active').innerText;

const setActiveTab = tab => {
    clearActiveTab();
    tab.classList.add('active');
}

const onClickTabs = () => {
    tabs.forEach(([name, tab, color, time]) => {
        tab.onclick = () => {
            timerIsRunning() && stopTimer();

            setActiveTab(tab);
            setButtonColor(color);
            setPageColor(color);
            setPageTitle(name);

            timeInMinutes = time;
            timerInSeconds = minutesToSeconds(timeInMinutes);
            updateDisplayTimer(formatTimer(timerInSeconds));
        };
    });
}

onClickTabs();
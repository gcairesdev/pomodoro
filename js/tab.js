const tabs = [
    ['Pomodoro', 'favicon', $('#pomodoroTab'), '#d95550', 25],
    ['Short Break', 'favicon-short-break', $('#shortBreakTab'), '#5092d9', 5],
    ['Long Break', 'favicon-long-break', $('#longBreakTab'), '#375192', 15],
];

const clearActiveTab = () => $('.active').classList.remove('active');

const getActiveTab = () => $('.active').innerText;

const setActiveTab = tab => {
    clearActiveTab();
    tab.classList.add('active');
}

const getTab = name => {
    let tab;
    tabs.forEach(([tabName, element]) => {
        if (name == tabName) tab = element;
    });
    return tab;
};

const onClickTabs = () => {
    tabs.forEach(([name, favicon, tab, color, time]) => {
        tab.onclick = () => {
            timerIsRunning() && stopTimer();

            setActiveTab(tab);
            setButtonColor(color);
            setPageColor(color);
            setPageTitle(name);
            setPageFavicon(favicon);

            timeInMinutes = time;
            timerInSeconds = minutesToSeconds(timeInMinutes);
            updateDisplayTimer(formatTimer(timerInSeconds));
        };
        name == 'Pomodoro' && tab.click();
    });
}

onClickTabs();
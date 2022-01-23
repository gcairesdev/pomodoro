const shortBreak = $('#shortBreakTab');

const activeShortBreakTab = () => {
    clearActiveTab();
    shortBreak.classList.add('active');
}

shortBreak.addEventListener('click', activeShortBreakTab);
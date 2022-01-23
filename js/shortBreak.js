const shortBreak = $('#shortBreakTab');

const activeShortBreakTab = () => {
    clearActiveTab();
    changePageColor('#5092d9');
    shortBreak.classList.add('active');
}

shortBreak.addEventListener('click', activeShortBreakTab);
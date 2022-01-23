const longBreak = $('#longBreakTab');

const activelongBreakTab = () => {
    clearActiveTab();
    longBreak.classList.add('active');
}

longBreak.addEventListener('click', activelongBreakTab);
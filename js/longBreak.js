const longBreak = $('#longBreakTab');

const activelongBreakTab = () => {
    clearActiveTab();
    changePageColor('#375192');
    longBreak.classList.add('active');
}

longBreak.addEventListener('click', activelongBreakTab);
const longBreakMinutes = 15;
const longBreakColor = '#375192';
const longBreak = $('#longBreakTab');

longBreak.onclick = () => setActiveTab(longBreak, longBreakColor, longBreakMinutes);
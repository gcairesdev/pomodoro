const shortBreakMinutes = 5;
const shortBreakColor = '#5092d9';
const shortBreak = $('#shortBreakTab');

shortBreak.onclick = () => setActiveTab(shortBreak, shortBreakColor, shortBreakMinutes);
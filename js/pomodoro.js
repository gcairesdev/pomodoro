const pomodoroMinutes = 25;
const pomodoroColor = '#d95550';
const pomodoro = $('#pomodoroTab');

setActiveTab(pomodoro, pomodoroColor, pomodoroMinutes);
pomodoro.onclick = () => setActiveTab(pomodoro, pomodoroColor, pomodoroMinutes);

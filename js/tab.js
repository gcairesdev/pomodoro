const clearActiveTab = () => $('.active').classList.remove('active');

const getActiveTab = () => $('.active').innerText;

const setActiveTab = tab => {
    clearActiveTab();
    tab.classList.add('active');
}
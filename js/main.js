let timer = $('#timer');
const controlBtn = $('#controlButton');

controlBtn.addEventListener('click', function() {
    changeButtonText();
});

const changeButtonText = () => controlBtn.value = controlBtn.value === 'START' ? 'STOP' : 'START';
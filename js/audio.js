const playAudio = file => {
    const audio = document.createElement('audio');
    audio.style.display = 'none';
    audio.src = `audios/${file}`;
    audio.autoplay = true;
    audio.onended = () => audio.remove();
    document.body.appendChild(audio);
}
const audio = new Audio('/assets/audio/baby-you-got-something-in-your-nose-sound-effect.mp3')
audio.muted = true
let url = document.location.pathname

console.log(url);
if (url) {
    playAudio(true)
    console.log('play');
}
function playAudio(willPlayAudio) {
    audio.muted = !willPlayAudio
    if (willPlayAudio) {
        audio.play()
    }
}

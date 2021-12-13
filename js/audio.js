//Audio 기능
function findAudio (i){
    const audio = new Audio(`sound/test ${i}.flac`);
    return audio
    }

function soundPrintHandler(i){
    const audio = findAudio(i+2);
    if (audio.paused) audio.play();
    else {
        audio.currentTime = 0
    }
}


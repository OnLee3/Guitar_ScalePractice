//Audio 기능
function findAudio (i){
    const audio = new Audio(`sound/test${i}.wav`);
    return audio
    }

    // 1번줄 개방현부터 i=0 카운트. 마지막 노트 도달할때까지 i++
    for (let i=0; i<clickBtn.length; i++){
    clickBtn[i].addEventListener("click", (e)=>{
        const audio = findAudio(i+2);
        if (audio.paused) audio.play();
        else {
            audio.currentTime = 0
        }
        console.log(e);
        console.log(`It's ${i}`)
    });
    }
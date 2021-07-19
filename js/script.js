/* 중요한 건, 클릭한 구역에 따라 다른 사운드를 출력하고, 기존 사운드의 출력을 멈추는 거다.
핵심 기능 구현 후, 디자인 디테일을 추가하자.*/

/* 스트링 겉모습을 잡고, note div를 투명하게 배치하여 클릭요소를 활성화 */



//array 형태
const note = document.getElementsByClassName("note")
const clickBtn = document.getElementsByClassName("clickBtn")

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
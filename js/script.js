/*중요한 건, 클릭한 구역에 따라 다른 사운드를 출력하고, 기존 사운드의 출력을 멈추는 거다.
핵심 기능 구현 후, 디자인 디테일을 추가하자.*/

//array 형태
const note = document.getElementsByClassName("note")
console.log(note);

function findAudio (i){
const audio = new Audio(`sound/test${i}.wav`);
return audio
}

for (let i=0; i<note.length; i++){
note[i].addEventListener("click", (e)=>{
    const audio = findAudio(i);
    if (audio.paused) audio.play();
    else {
        audio.currentTime = 0
    }
    console.log(e);
    console.log(`It's ${i}`)
});
}
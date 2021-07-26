/* 중요한 건, 클릭한 구역에 따라 다른 사운드를 출력하고, 기존 사운드의 출력을 멈추는 거다.
핵심 기능 구현 후, 디자인 디테일을 추가하자.*/

/* 스트링 겉모습을 잡고, note div를 투명하게 배치하여 클릭요소를 활성화 */



//array 형태
const note = document.getElementsByClassName("note")
const clickBtn = document.getElementsByClassName("clickBtn")


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

//음계 순서 설정
const pitch = ["A", "A#", "B", "C", "C#", "D", "D#", "E", "F", "F#", "G", "G#"];
let cnt = 0;

//노트에 음계 부여
function pitchToNote (){
    for(let i=8; i<pitch.length; i++){
clickBtn[cnt].innerText = pitch[i];
cnt = cnt+1;
//줄별로 시작피치 설정
if (cnt === 15) i = 2;
if (cnt === 30) i = 10;
if (cnt === 45) i = 5;
if (cnt === 60) i = 0;
if (cnt === 75) i = 7;
if (cnt === 90) break
if (i === 11) i = -1;
    }
}
pitchToNote();

//스케일 선택 시 해당 음계 색상 변경
const scaleBtn = document.createElement("select");
const none = document.createElement("option");
const penta = document.createElement("option");
const major = document.createElement("option");
none.innerText = "None"
penta.innerText = "Pentatonic Scale"
major.innerText = "Major Scale"
scaleBtn.appendChild(none);
scaleBtn.appendChild(penta);
scaleBtn.appendChild(major);
document.body.appendChild(scaleBtn);

function scaleBtnHandler(){
if(scaleBtn.value === "Pentatonic Scale") {
    for(i=0; i=note.length; i++){
        console.log(i)
        if(clickBtn.innerHTML === "G" || "A" || "C" || "D" || "E" ) console.log("It works");
    }
}
else console.log("Just kidding");
};

scaleBtn.addEventListener("change", scaleBtnHandler);


//코드톤 선택 시 해당 코드톤 색상 변경
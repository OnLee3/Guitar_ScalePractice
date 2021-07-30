
//array 형태
const body = document.querySelector("body")
const note = document.getElementsByClassName("note")
const clickBtn = document.getElementsByClassName("clickBtn")

//음계 설정
const pitch = ["A", "A#", "B", "C", "C#", "D", "D#", "E", "F", "F#", "G", "G#"];
const totalNote = note.length-15
let currentKey = "C";
let currentScale = "None";
let pentaPitch = ["G", "A", "C", "D", "E"];
let majorPitch = ["G", "A", "B", "C", "D", "E", "F"];

//select html 생성
const keyBtn = document.createElement("select");
const cKey = document.createElement("option");
const cSharpkey = document.createElement("option");
const dKey = document.createElement("option");
const dSharpKey = document.createElement("option");
const ekey = document.createElement("option");
const fKey = document.createElement("option");
const fSharpKey = document.createElement("option");
const gkey = document.createElement("option");
const gSharpKey = document.createElement("option");
const aKey = document.createElement("option");
const aSharpkey = document.createElement("option");
const bKey = document.createElement("option");
cKey.innerText = "C"
cSharpkey.innerText = "C#"
dKey.innerText = "D"
dSharpKey.innerText = "D#"
ekey.innerText = "E"
fKey.innerText = "F"
fSharpKey.innerText = "F#"
gkey.innerText = "G"
gSharpKey.innerText = "G#"
aKey.innerText = "A"
aSharpkey.innerText = "A#"
bKey.innerText = "B"
keyBtn.appendChild(cKey);
keyBtn.appendChild(cSharpkey);
keyBtn.appendChild(dKey);
keyBtn.appendChild(dSharpKey);
keyBtn.appendChild(ekey);
keyBtn.appendChild(fKey);
keyBtn.appendChild(gkey);
keyBtn.appendChild(gSharpKey);
keyBtn.appendChild(aKey);
keyBtn.appendChild(aSharpkey);
keyBtn.appendChild(bKey);
document.body.appendChild(keyBtn);
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
const btnBox = document.createElement("div");
btnBox.classList.add("btnBox");
btnBox.appendChild(keyBtn)
btnBox.appendChild(scaleBtn)
body.appendChild(btnBox)

//노트에 음계 부여
let cnt = 0;
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


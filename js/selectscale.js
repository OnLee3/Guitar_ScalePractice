//스케일 선택 시 해당 음계 색상 변경

function changePitch(key){
    console.log(pitch.indexOf(key) - pitch.indexOf("C"));
    const pitchGap = pitch.indexOf(key) - pitch.indexOf("C");
    const changedPitch = pentaPitch.map((v, i) => {
        let changedIndex = pitch.indexOf(pentaPitch[i]) + pitchGap
        if(changedIndex >= 12) changedIndex -= 12;
        else if(changedIndex < 0) changedIndex += 12;
        return pitch[changedIndex];
    })
    console.log(pentaPitch)
    pentaPitch = changedPitch
    console.log(pentaPitch)
}
changePitch("D");

function deleteSelectedScale(){
    for(let i=0; i<(note.length-15); i++){
        clickBtn[i].classList.remove("selectedScale");
    }
}

function scaleBtnHandler(){
deleteSelectedScale();
    if(scaleBtn.value === "Pentatonic Scale") {
    for(let i=0; i<(note.length-15); i++){
        for(let j=0; j<pentaPitch.length; j++){
            if(clickBtn[i].innerText === pentaPitch[j]) clickBtn[i].classList.add("selectedScale");
        }
    }
}

else if(scaleBtn.value === "Major Scale") {
deleteSelectedScale();
    for(let i=0; i<(note.length-15); i++){
        for(let j=0; j<majorPitch.length; j++){
            if(clickBtn[i].innerText === majorPitch[j]) clickBtn[i].classList.add("selectedScale");
        }
    }
}
else deleteSelectedScale();
};

scaleBtn.addEventListener("change", scaleBtnHandler);


//코드톤 선택 시 해당 코드톤 색상 변경
//스케일 선택 시 해당 음계 색상 변경

function changePitch(e){
    const key = e.target.value
    const pitchGap = pitch.indexOf(key) - pitch.indexOf(currentKey);    
    currentKey = key;

    const changedPentaPitch = pentaPitch.map((v, i) => {
        let changedIndex = pitch.indexOf(pentaPitch[i]) + pitchGap
        if(changedIndex >= 12) changedIndex -= 12;
        else if(changedIndex < 0) changedIndex += 12;
        return pitch[changedIndex];
    })
    const changedMajorPitch = majorPitch.map((v, i) => {
        let changedIndex = pitch.indexOf(majorPitch[i]) + pitchGap
        if(changedIndex >= 12) changedIndex -= 12;
        else if(changedIndex < 0) changedIndex += 12;
        return pitch[changedIndex];
    })
    pentaPitch = changedPentaPitch
    majorPitch = changedMajorPitch
    paintScale(currentScale);
}

function changeScale(e){
    const scale = e.target.value
    currentScale = scale;
    paintScale(currentScale);
}

function deleteSelectedScale(){
    for(let i=0; i<totalNote; i++){
        clickBtn[i].classList.remove("selectedScale");
    }
}

function paintScale(scale){
    deleteSelectedScale();
    switch(scale){
        case "Pentatonic Scale":
            for(let i=0; i<totalNote; i++){
                for(let j=0; j<pentaPitch.length; j++){
                    if(clickBtn[i].innerText === pentaPitch[j]) clickBtn[i].classList.add("selectedScale");
            }
        }   break;

        case "Major Scale":
            for(let i=0; i<totalNote; i++){
                for(let j=0; j<majorPitch.length; j++){
                    if(clickBtn[i].innerText === majorPitch[j]) clickBtn[i].classList.add("selectedScale");
            }
        }   break;

    }
}

keyBtn.addEventListener("change", changePitch);
scaleBtn.addEventListener("change", changeScale);

//코드톤 선택 시 해당 코드톤 색상 변경
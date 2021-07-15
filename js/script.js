const guitar = document.querySelector(".guitar");
console.log(guitar);
const column = guitar.querySelector(".column");
console.log(column);
//array 형태
const note = column.getElementsByClassName("note")
console.log(note);

const audio = new Audio("sound/test.mp3");
console.log(audio);

function test(e){
    alert("Hi");
    audio.play();
}

note[0].addEventListener("click", test);
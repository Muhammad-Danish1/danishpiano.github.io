const pianoKeys = document.querySelectorAll('.key');
const pressKey = document.querySelectorAll('.key');
const voiceKey = document.querySelectorAll('.key');




// play audio --------------------------------

let audio = new Audio("tunes/a.wav")
Array.from(pianoKeys).forEach((item)=> {
    item.addEventListener("click", (e)=>{
        const pianoKeysValue = e.target.innerHTML
        audio.src = `tunes/${pianoKeysValue}.wav`;
        audio.play();
    })
})

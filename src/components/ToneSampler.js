import * as Tone from "tone";


const sampler = new Tone.Sampler({
    urls: {
        "A4": "A4.mp3",
        "D#4": "Ds4.mp3",
        "F#4": "Fs4.mp3",
        "A4": "A4.mp3",
    },
    baseUrl: "https://tonejs.github.io/audio/salamander/",
}).toDestination();

export const playSynth = (pitch,duration) =>{
        
    Tone.loaded().then(() => {
        sampler.triggerAttackRelease(pitch, duration);
    })


}
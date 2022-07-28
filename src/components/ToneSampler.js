import * as Tone from "tone";


const sampler = new Tone.Sampler({
    urls: {
        "g3": "G3.mp3",
        "g3#": "Gs3.mp3",
        "a3": "A3.mp3",
        "a3#": "As3.mp3",
        "b3": "B3.mp3",
        "c4": "C4.mp3",
        "c4#": "Cs4.mp3",
        "d4": "D4.mp3",
        "d4#": "Ds4.mp3",
        "e4": "E4.mp3",
        "f4": "F4.mp3",
        "f4#": "Fs4.wav",
        "g4": "G4.mp3",
        "g4#": "Gs4.mp3",
        "a4": "A4.mp3",
        "a4#": "As4.mp3",
        "b4": "B4.mp3",
        "c5": "C5.mp3",
        "c5#": "Cs5.mp3",
        "d5": "D5.mp3",
        "d5#": "Ds5.mp3",
        "e5": "E5.mp3",
        "f5": "F5.mp3",
        "f5#": "Fs5.mp3",
        "g5": "G5.mp3",
        "g5#": "Gs5.wav",
        "a5": "A5.mp3",
        "a5#": "As5.mp3",
        "b5": "B5.mp3",
        "c6": "C6.mp3",
    },
    baseUrl: "https://olli22221.github.io/",
}).toDestination();

export const playSynth = (pitch,duration) =>{
        
    Tone.loaded().then(() => {
        sampler.triggerAttackRelease(pitch, duration);
    })


}
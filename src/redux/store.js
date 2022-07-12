import { atom } from "recoil";
import { recoilPersist } from "recoil-persist";
import {defaultpitches,defaultpitchesoccupied,defaultPitchesArray} from '../data/composePanelData';

const { persistAtom } = recoilPersist()


export const context = atom ({
    key: "context",
    default: null, 
    effects_UNSTABLE: [persistAtom],
})

export const group = atom ({
    key: "group",
    default: '', 
    effects_UNSTABLE: [persistAtom],
})


export const board = atom({
    key: "board",
    default: defaultPitchesArray, 
    effects_UNSTABLE: [persistAtom],
})

export const meter = atom({
    key: "meter",
    default: "4/4", 
    effects_UNSTABLE: [persistAtom],
})

export const pointer = atom({
    key: "pointer_",
    default: 1, 
    effects_UNSTABLE: [persistAtom],
})

export const hovering = atom({
    key: "hover",
    default: false, 
    effects_UNSTABLE: [persistAtom],
})

export const dragging = atom({
    key: "drag",
    default: false, 
    effects_UNSTABLE: [persistAtom],
})

export const jwtToken = atom({
    key: "jwt",
    default: [], 
    effects_UNSTABLE: [persistAtom],
})

export const midiFiles = atom({
    key: "file",
    default: [], 
    effects_UNSTABLE: [persistAtom],
})

export const counter = atom({
    key: "counter",
    default: 0, 
    effects_UNSTABLE: [persistAtom],
})

export const subjectId = atom({
    key: "id",
    default: [], 
    effects_UNSTABLE: [persistAtom],
})

export const musicNotes = atom({
    key: "notes",
    default: [], 
    effects_UNSTABLE: [persistAtom],
})

export const notePointer =  atom({
    key: "pointer",
    default: -1,
    effects_UNSTABLE: [persistAtom],
})

export const noteCount =  atom({
    key: "count",
    default: 0,
    effects_UNSTABLE: [persistAtom],
})


export const durationOption =  atom({
    key: "durOption",
    default: 4,
    effects_UNSTABLE: [persistAtom],
})

export const pitchOption =  atom({
    key: "pitchOption",
    default: 4,
    effects_UNSTABLE: [persistAtom],
})

export const composePanelState =  atom({
    key: "panelOption",
    default: 0,
    effects_UNSTABLE: [persistAtom],
})
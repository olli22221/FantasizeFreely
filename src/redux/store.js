import { atom } from "recoil";
import { recoilPersist } from "recoil-persist";
import {defaultpitches,defaultpitchesoccupied,defaultPitchesArray,defaultPitchesArray_} from '../data/composePanelData';

const { persistAtom } = recoilPersist()


export const activePanel = atom ({
    key: "replaceActive",
    default: 2, 
    effects_UNSTABLE: [persistAtom],
})

export const replaceActivated = atom ({
    key: "replaceActive",
    default: false, 
    effects_UNSTABLE: [persistAtom],
})

export const activeMeasure = atom ({
    key: "activeMeasure",
    default: 0, 
    effects_UNSTABLE: [persistAtom],
})

export const activeNote = atom ({
    key: "activeNote",
    default: 0, 
    effects_UNSTABLE: [persistAtom],
})

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

export const measure1Meter = atom({
    key: "meter1",
    default: 17, 
    effects_UNSTABLE: [persistAtom],
})

export const measure2Meter = atom({
    key: "meter2",
    default: 17, 
    effects_UNSTABLE: [persistAtom],
})
export const measure3Meter = atom({
    key: "meter3",
    default: 17, 
    effects_UNSTABLE: [persistAtom],
})


export const measure1 = atom({
    key: "board",
    default: defaultPitchesArray_(17), 
    effects_UNSTABLE: [persistAtom],
})
export const measure2 = atom({
    key: "board1",
    default: defaultPitchesArray_(17), 
    effects_UNSTABLE: [persistAtom],
})

export const measure3 = atom({
    key: "board2",
    default: defaultPitchesArray_(17), 
    effects_UNSTABLE: [persistAtom],
})

export const meter = atom({
    key: "meter",
    default: 9, 
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
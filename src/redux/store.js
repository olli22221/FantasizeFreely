import { atom } from "recoil";
import { recoilPersist } from "recoil-persist";
import {defaultpitches,defaultpitchesoccupied,defaultPitchesArray,defaultPitchesArray_} from '../data/composePanelData';

const { persistAtom } = recoilPersist()



export const inspirationFlag = atom ({
    key: "inspirationFlag",
    default: false, 
    effects_UNSTABLE: [persistAtom],
})

export const submissions = atom ({
    key: "submissions",
    default: 0, 
    effects_UNSTABLE: [persistAtom],
})

export const musicatResponse = atom ({
    key: "musicatResponse_",
    default: "", 
    effects_UNSTABLE: [persistAtom],
})


export const flexabilityScore = atom ({
    key: "flexabilityScore",
    default: 0, 
    effects_UNSTABLE: [persistAtom],
})

export const fluencyScore = atom ({
    key: "fluencyScore",
    default: 0, 
    effects_UNSTABLE: [persistAtom],
})

export const originalityScore = atom ({
    key: "originalityScore",
    default: 0, 
    effects_UNSTABLE: [persistAtom],
})


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

export const measure4Meter = atom({
    key: "meter4",
    default: 17, 
    effects_UNSTABLE: [persistAtom],
})

export const measure5Meter = atom({
    key: "meter5",
    default: 17, 
    effects_UNSTABLE: [persistAtom],
})
export const measure6Meter = atom({
    key: "meter6",
    default: 17, 
    effects_UNSTABLE: [persistAtom],
})

export const measure7Meter = atom({
    key: "meter7",
    default: 17, 
    effects_UNSTABLE: [persistAtom],
})
export const measure8Meter = atom({
    key: "meter8",
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

export const measure4 = atom({
    key: "board3",
    default: defaultPitchesArray_(17), 
    effects_UNSTABLE: [persistAtom],
})
export const measure5 = atom({
    key: "board4",
    default: defaultPitchesArray_(17), 
    effects_UNSTABLE: [persistAtom],
})

export const measure6 = atom({
    key: "board5",
    default: defaultPitchesArray_(17), 
    effects_UNSTABLE: [persistAtom],
})
export const measure7 = atom({
    key: "board6",
    default: defaultPitchesArray_(17), 
    effects_UNSTABLE: [persistAtom],
})

export const measure8 = atom({
    key: "board7",
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
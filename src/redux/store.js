import { atom } from "recoil";
import { recoilPersist } from "recoil-persist";

const { persistAtom } = recoilPersist()


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

export const defaultpitches = 
    {
        show: false,
        type: ["c/4"],
        duration: "h",
        locked: true,
        occupied: false,
        src:require('../media/pitches/empty.PNG'),

    }

    export const defaultpitchesoccupied = 
    {
        show: false,
        type: ["c/4"],
        duration: "h",
        locked: true,
        occupied: true,
        src:require('../media/pitches/empty.PNG'),

    }
    



export const halfpitches = [
    {
        show: true,
        type: ["c/4"],
        duration: "h",
        locked: false,
        occupied: true,
        src:require('../media/pitches/C4_h.PNG'),

    },
    
]
export const wholepitches = [
    {
        show: true,
        type: ["c/4"],
        duration: "w",
        locked: false,
        occupied: true,
        src:require('../media/pitches/C4_w.PNG'),

    },
    
]
export const pitches = [
    {
        show: true,
        type: ["g/3"],
        duration: "q",
        locked: false,
        occupied: true,
        src:require('../media/composeMedia/quarterNotes/g3.PNG'),

    },
    {
        show: true,
        type: ["a/3"],
        duration: "q",
        locked: false,
        occupied: true,
        src:require('../media/composeMedia/quarterNotes/a3.PNG'),

    },
    {
        show: true,
        type: ["b/3"],
        duration: "q",
        locked: false,
        occupied: true,
        src:require('../media/composeMedia/quarterNotes/b3.PNG'),

    },
    {
        show: true,
        type: ["c/4"],
        duration: "q",
        locked: false,
        occupied: true,
        src:require('../media/composeMedia/quarterNotes/c4.PNG'),

    },
    {
        show: true,
        type: ["c/4"],
        duration: "q",
        locked: false,
        occupied: true,
        src:require('../media/composeMedia/quarterNotes/d4.PNG'),

    },
    {
        show: true,
        type: ["d/4"],
        duration: "q",
        locked: false,
        occupied: true,
        src:require('../media/composeMedia/quarterNotes/e4.PNG'),

    },
]

export const eightpitches = [
    {
        show: true,
        type: ["c/4"],
        duration: "8d",
        locked: false,
        occupied: true,
        src:require('../media/pitches/C4_8d.PNG'),

    },
    
]

export const sixteenthpitches = [
    
    {
        show: true,
        type: ["a/3"],
        duration: "16",
        locked: false,
        occupied: true,
        src:require('../media/composeMedia/sixteenthNotes/a3.PNG'),

    },
    {
        show: true,
        type: ["b/3"],
        duration: "16",
        locked: false,
        occupied: true,
        src:require('../media/composeMedia/sixteenthNotes/b3.PNG'),

    },
    {
        show: true,
        type: ["c/4"],
        duration: "16",
        locked: false,
        occupied: true,
        src:require('../media/composeMedia/sixteenthNotes/c4.PNG'),

    },
    {
        show: true,
        type: ["c/4"],
        duration: "16",
        locked: false,
        occupied: true,
        src:require('../media/composeMedia/sixteenthNotes/c4.PNG'),

    },
    {
        show: true,
        type: ["d/4"],
        duration: "16",
        locked: false,
        occupied: true,
        src:require('../media/composeMedia/sixteenthNotes/d4.PNG'),

    },
    {
        show: true,
        type: ["e/4"],
        duration: "16",
        locked: false,
        occupied: true,
        src:require('../media/composeMedia/sixteenthNotes/e4.PNG'),

    },
    {
        show: true,
        type: ["f/4"],
        duration: "16",
        locked: false,
        occupied: true,
        src:require('../media/composeMedia/sixteenthNotes/f4.PNG'),

    },
    {
        show: true,
        type: ["g/4"],
        duration: "16",
        locked: false,
        occupied: true,
        src:require('../media/composeMedia/sixteenthNotes/g4.PNG'),

    },
    {
        show: true,
        type: ["a/4"],
        duration: "16",
        locked: false,
        occupied: true,
        src:require('../media/composeMedia/sixteenthNotes/a4.PNG'),

    },
    {
        show: true,
        type: ["b/4"],
        duration: "16",
        locked: false,
        occupied: true,
        src:require('../media/composeMedia/sixteenthNotes/b4.PNG'),

    },
    {
        show: true,
        type: ["c/5"],
        duration: "16",
        locked: false,
        occupied: true,
        src:require('../media/composeMedia/sixteenthNotes/c5.PNG'),

    },
    {
        show: true,
        type: ["d/5"],
        duration: "16",
        locked: false,
        occupied: true,
        src:require('../media/composeMedia/sixteenthNotes/d5.PNG'),

    },
    {
        show: true,
        type: ["d/5s"],
        duration: "16",
        locked: false,
        occupied: true,
        src:require('../media/composeMedia/sixteenthNotes/d55.PNG'),

    },
    {
        show: true,
        type: ["e/5"],
        duration: "16",
        locked: false,
        occupied: true,
        src:require('../media/composeMedia/sixteenthNotes/e5.PNG'),

    },
    {
        show: true,
        type: ["f/5"],
        duration: "16",
        locked: false,
        occupied: true,
        src:require('../media/composeMedia/sixteenthNotes/f5.PNG'),

    },
    {
        show: true,
        type: ["g/5"],
        duration: "16",
        locked: false,
        occupied: true,
        src:require('../media/composeMedia/sixteenthNotes/g5.PNG'),

    },
    {
        show: true,
        type: ["a/5"],
        duration: "16",
        locked: false,
        occupied: true,
        src:require('../media/composeMedia/sixteenthNotes/a5.PNG'),

    },
    {
        show: true,
        type: ["b/5"],
        duration: "16",
        locked: false,
        occupied: true,
        src:require('../media/composeMedia/sixteenthNotes/b5.PNG'),

    },
    {
        show: true,
        type: ["c/6"],
        duration: "16",
        locked: false,
        occupied: true,
        src:require('../media/composeMedia/sixteenthNotes/c6.PNG'),

    },
    
]

     const defaultPitchesArray_= () => { 
        let  result= []
        for (var  i = 1; i <= 8; i++) {
            result = result.concat(new Array(1).fill(defaultpitchesoccupied).concat(new Array(16).fill(defaultpitches)))
          }
          console.log(result)
          return result
        
    }

    export const defaultPitchesArray = defaultPitchesArray_()

    



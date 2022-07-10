
export const defaultpitches = 
    {
        show: false,
        type: ["c/4"],
        duration: "h",
        locked: true,
        occupied: false,
        src:require('../media/pitches/EmptyPlace.PNG'),

    }

    export const defaultpitchesoccupied = 
    {
        show: false,
        type: ["c/4"],
        duration: "h",
        locked: true,
        occupied: true,
        src:require('../media/pitches/EmptyPlace.PNG'),

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
        type: ["c/4"],
        duration: "q",
        locked: false,
        occupied: true,
        src:require('../media/pitches/Gclef_C1_1-4.png'),

    },
    {
        show: true,
        type: ["d/4"],
        duration: "q",
        locked: false,
        occupied: true,
        src:require('../media/pitches/Gclef_D1_1-4.png'),
        
    },
    {
        show: true,
        type: ["e/4"],
        duration: "q",
        locked: false,
        occupied: true,
        src:require('../media/pitches/Gclef_E1_1-4.png'),
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

     const defaultPitchesArray_= () => { 
        let  result= []
        for (var  i = 1; i <= 8; i++) {
            result = result.concat(new Array(1).fill(defaultpitchesoccupied).concat(new Array(16).fill(defaultpitches)))
          }
          console.log(result)
          return result
        
    }

    export const defaultPitchesArray = defaultPitchesArray_()

    



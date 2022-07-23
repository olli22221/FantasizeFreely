export const calculateSteps = (duration) => {

    switch (duration) {
        case "8d":
            return 2
        case "16":
            return 1
        case "q":
            return 4
        case "h":
            return 8
        case "w":
            return 16
        case "n":
            return 1                    
            
    
        default:
            break;
    }
}
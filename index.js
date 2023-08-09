// my code
function distanceFromHqInBlocks(value){
    if (value < 42) {
        return 42 - value
    } else if (value > 42){ 
        return value - 42
    }
}

// my code
function distanceFromHqInFeet(blocks){  
    const diffInBlocks = distanceFromHqInBlocks(blocks)
    return diffInBlocks * 264
}

// My orignal code for distanceTravelledInFeet()
function distanceTravelledInFeet(start, destination) {
    let feetTravelled;
    if (destination > start){
        feetTravelled = destination - start;
        feetTravelled *= 264
        return feetTravelled
    } else if (start > destination){
        feetTravelled = start - destination;
        feetTravelled *= 264
        return feetTravelled
    }
  }
// How I should've wrote it
// function distanceTravelledInFeet(start, destination) {
//     const feetPerBlock = 264;
//     return Math.abs(destination - start) * feetPerBlock;
// }
// Also a technical coach introduced me to Math.abs()

function calculatesFarePrice(start, destination) {
    const feetPerBlock = 264;
    const feetTravelled = Math.abs(destination - start) * feetPerBlock;
    if (feetTravelled < 400){
        return 0;
    } else if (feetTravelled > 400 && feetTravelled < 2000){
        return feetTravelled * .2
    }
  }

function findClosestPerson(x,y,z) {
    
    let noOfStepsX = x - z;
    let noOfStepsY = y - z;

    if (Math.abs(noOfStepsY) > Math.abs(noOfStepsX)) {
        return "1";
    } else if (Math.abs(noOfStepsX) > Math.abs(noOfStepsY)) {
        return "2";
    } else {
        return "0";
    }
}

console.log(findClosestPerson(2,7,4));
console.log(findClosestPerson(2,5,6));
console.log(findClosestPerson(1,5,3));
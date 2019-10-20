/*
return an array of numbers of each floor the elevator stops on

lift stops at a floor even while full

while not done
  for each floor in queues
    for each personNum on elevator
      if personNum is equal to floor
        add path to end of final path list
        move person from elevator to floor
    for each personNum on floor
      add path to end of final path list
      if personNum is going up and elevator isnt full
        move personNum from floor to elevator
        decrement elevatorspace 
  
  go in reverse order starting from top floor visited

*/

let areWeDone = function (currentQ) {
  for (let floorNum = 0; floorNum < currentQ.length; floorNum++) {
    let floorArray = currentQ[floorNum]
    for (let j = 0; j < floorArray.length; j++) {
      let personNum = floorArray[j]
      if (personNum !== floorNum) {
        return false
      }
    }
  }
  return true
}

var theLift = function (queues, capacity) {
  console.log(queues, capacity)
  let currentQ = queues
  let finalPath = []
  let done = false
  let test = 0
  while(!done) {
    let elevatorRiders = []
    // start first trip up
    console.log("start up")
    for (let floorNum = 0; floorNum < currentQ.length; floorNum++) {
      let floor = currentQ[floorNum]
      let stoppedHere = false
      // loop through personNums waiting on floors
      for (let j = 0; j < floor.length; j++) {
        let personNum = floor[j]
        console.log(personNum, floorNum)
        if(personNum > floorNum && !stoppedHere){
          stoppedHere = true
          if(finalPath[finalPath.length-1]!==floorNum){
            finalPath.push(floorNum)
          }
        }
        if(personNum > floorNum && capacity !== 0){
          capacity--
          elevatorRiders.push(floor.splice(j,1)[0])
          j--
        }
      }
      if(elevatorRiders.includes(floorNum) && !stoppedHere){
        finalPath.push(floorNum)
        stoppedHere = true
      }
      // loop through elevatorRiders and check if Rider needs to get off
      for (let k = 0; k < elevatorRiders.length; k++ ){
        let elevatorRiderNum = elevatorRiders[k]
        if(elevatorRiderNum === floorNum){
          currentQ[floorNum].push(elevatorRiders.splice(k,1)[0])
          capacity++
          k--
        }
      }
    }
    console.log(currentQ)
    console.log("start down")
    // start first trip down
    for (let floorNum = currentQ.length - 1; floorNum >= 0; floorNum--) {
      let floor = currentQ[floorNum]
      let stoppedHere = false
      // loop through personNums waiting on floors
      for (let j = 0; j < floor.length; j++) {
        let personNum = floor[j]
        console.log(personNum, floorNum)
        if(personNum < floorNum && !stoppedHere){
          stoppedHere = true
          if(finalPath[finalPath.length-1]!==floorNum){
            finalPath.push(floorNum)
          }
        }
        if(personNum < floorNum && capacity !== 0){
          capacity--
          elevatorRiders.push(floor.splice(j,1)[0])
          j--
        }
      }
      
      if(elevatorRiders.includes(floorNum) && !stoppedHere){
        finalPath.push(floorNum)
        stoppedHere = true
      }
      // loop through elevatorRiders and check if Rider needs to get off
      for (let k = 0; k < elevatorRiders.length; k++ ){
        let elevatorRiderNum = elevatorRiders[k]
        if(elevatorRiderNum === floorNum){
          currentQ[floorNum].push(elevatorRiders.splice(k,1)[0])
          capacity++
          k--
        }
      }
    }
    console.log(currentQ)
    console.log(finalPath)
    done = areWeDone(currentQ)
  }
  if(finalPath[0]===0 && finalPath[finalPath.length-1]===0){
    return [...finalPath]
  } else if(finalPath[finalPath.length-1]===0) {
    return [0,...finalPath]
  } else if(finalPath[0]===0) {
    return [...finalPath,0]
  } else if(finalPath.length === 0) {
    return [0]
  } else {
    return [0, ...finalPath, 0]
  }
}

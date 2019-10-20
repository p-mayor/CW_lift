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
  let currentQUp = queues
  let currentQDown = queues
  let finalPath = []
  let done = false
  let test = 0
  while(!done) {
    console.log(currentQUp)
    let elevatorRiders = []
    // start first trip up
    for (let floorNum = 0; floorNum < currentQUp.length; floorNum++) {
      let floor = currentQUp[floorNum]
      console.log(floor)
      let stoppedHere = false
      // loop through personNums waiting on floors
      for (let j = 0; j < floor.length; j++) {
        let personNum = floor[j]
        console.log(personNum, floorNum, capacity, j, personNum)
        if(personNum > floorNum && !stoppedHere){
          stoppedHere = true
          finalPath.push(floorNum)
        }
        if(personNum > floorNum && capacity !== 0){
          capacity--
          elevatorRiders.push(floor.splice(j,1)[0])
          j--
        }
      }
      if(elevatorRiders.includes(floorNum) && !stoppedHere){
        finalPath.push(floorNum)
      }
      // loop through elevatorRiders and check if Rider needs to get off
      for (let k = 0; k < elevatorRiders.length; k++ ){
        let elevatorRiderNum = elevatorRiders[k]
        if(elevatorRiderNum === floorNum){
          currentQUp[floorNum].push(elevatorRiders.splice(k,1)[0])
          k--
        }
      }
    }
    console.log(finalPath)
    done = areWeDone(currentQUp)
    console.log(elevatorRiders)
    // start first trip down
    for (let floorNum = currentQUp.length - 1; floorNum > 0; floorNum--) {
      let floor = currentQUp[floorNum]
      let stoppedHere = false
      // loop through personNums waiting on floors
      for (let j = 0; j < floor.length; j++) {
        let personNum = floor[j]
        console.log(personNum, floorNum)
        if(personNum < floorNum && !stoppedHere){
          stoppedHere = true
          finalPath.push(floorNum)
        }
        if(personNum < floorNum && capacity !== 0){
          capacity--
          elevatorRiders.push(floor.splice(j,1)[0])
          j--
        }
      }
      
      if(elevatorRiders.includes(floorNum)){
        console.log('hi')
        finalPath.push(floorNum)
      }
      // loop through elevatorRiders and check if Rider needs to get off
      for (let k = 0; k < elevatorRiders.length; k++ ){
        let elevatorRiderNum = elevatorRiders[k]
        if(elevatorRiderNum === floorNum){
          currentQUp[floorNum].push(elevatorRiders.splice(k,1)[0])
          k--
        }
      }
    }
  test++
  }
  console.log(finalPath)
  return [0,...finalPath,0]
}

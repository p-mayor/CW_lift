/*
return an array of numbers of each floor the elevator stops on

while not done
  for each floor in queues
    for each personNum on elevator
      if personNum is equal to floor
        add path to end of final path list
        move person from elevator to floor
    for each personNum on floor
      if personNum is going up and elevator isnt full
        add path to end of final path list
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
  let done = areWeDone(currentQ)
  while (!done) {
    let elevatorSpace = capacity
    let elevatorRiders = []
    // start first trip up
    for (let floorNum = 0; floorNum < currentQ.length; floorNum++) {
      let floor = currentQ[floorNum]
      for (let j = 0; j < floor.length; j++) {
        if(elevatorRiders.includes(floorNum)){
          finalPath.push(floorNum)
          for(let passengerNum = 0; passengerNum < elevatorRiders.length; elevatorRiders++){
            let currentPassenger = elevatorRiders[passengerNum]
            if(currentPassenger === floorNum){

            }
          }
        }
        if (elevatorSpace > 0) {
          finalPath.push(floorNum)
          elevatorRiders.push(floor.shift())
          console.log(elevatorRiders, floor)
          elevatorSpace--
        }
      }
    }
  }
}

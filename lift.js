let areWeDone = function (currentQ) {
  for (let floorNum = 0; floorNum < currentQ.length; floorNum++) {
    let floorArray = currentQ[floorNum]
    for (let j = 0; j < floorArray.length; j++) {
      let personNum = floorArray[j]
      console.log(personNum, floorNum)
      if (personNum !== floorNum) {
        return false
      }
    }
  }
  return true
}

var theLift = function (queues, capacity) {
  // Your code here!
  console.log(queues, capacity)
  let currentQ = queues
  let finalPath = []
  // let test = true
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

theLift([[1,1,1],[],[1]],1)
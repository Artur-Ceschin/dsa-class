

class Vehicle {

  constructor(type, plate){
    this.type = type
    this.plate = plate
  }
}

class Car extends Vehicle {
  constructor(plate) {
    super('CAR', plate)
  }
}

class Motorcycle extends Vehicle {
  constructor(plate){
    super('MOTORCYCLE', plate)
  }
}


class ParkingSpot {

  constructor(vehicleType) {
    this.vehicleType = vehicleType
    this.isAvailable = true
    this.vehicle = null
  }
}

class ParkingLot {
  constructor(floors, spots) {
    this.parkingLot = Array.from({ length: floors }, () =>
      Array.from({ length: spots }, () => new ParkingSpot('CAR')))
  }

  park(type, plate) {
    const newVehicle = new Vehicle(type, plate)

    for(let i = 0; i < this.parkingLot.length; i++) {
      
      for(let j = 0; j < this.parkingLot[i].length; j++) {
        const spot = this.parkingLot[i][j]
        if((spot.vehicleType === 'CAR' || spot.vehicleType === type) && spot.isAvailable) {
          spot.isAvailable = false
          spot.vehicle = newVehicle

          return true
        } 
      }
    }

    return false
  }

  removeVehicle(plate) {
    for(let i = 0; i < this.parkingLot.length; i++) {

      for(let j = 0; j < this.parkingLot[i].length; j++) {
        const current = this.parkingLot[i][j]

        if(current.vehicle && current.vehicle.plate === plate) {
          current.isAvailable = true
          current.vehicle = null

          return true
        }
      }
    }

    return false
  }
}


// const parkingStop = new ParkingSpot()
const parkingLot = new ParkingLot(3, 5)
parkingLot.park('CAR', '1212-sdf')
parkingLot.park('CAR', '126-3434')
parkingLot.park('MOTORCYCLE', '1247657-3434')

console.log(parkingLot, parkingLot.park('CAR', '1247657-3434'), parkingLot.park('MOTORCYCLE', '1247657-3434'))
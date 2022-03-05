const result = (inventory) => {
    const lastCar = inventory[inventory.length -1];
    return (`Last car is a ${lastCar.car_make} ${lastCar.car_model}`)
}

module.exports = result;
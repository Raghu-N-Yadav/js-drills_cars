const result = inventory => {
    BMW_Audi = [];
    for(let i =0;i< inventory.length;i++){
        if(inventory[i].car_make == 'Audi' || inventory[i].car_make == 'BMW'){
            BMW_Audi.push(inventory[i]);
        }
    }
    return JSON.stringify(BMW_Audi);
}

module.exports = result;
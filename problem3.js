const result = inventory => {
    //let modelName = [];
    for(let i=0;i< inventory.length;i++){
        for(let j = i+1;j< inventory.length;j++){
            if(inventory[j].car_model.toUpperCase() < inventory[i].car_model.toUpperCase()){
                let temp = inventory[i];
                inventory[i] = inventory[j];
                inventory[j] = temp;
            }
        }
        //modelName.push(inventory[i].car_model);
    }


    return inventory;
}


module.exports = result;

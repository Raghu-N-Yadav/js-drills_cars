const result = (yearList) => {
    let olderCars = [];
    for(let i =0; i< yearList.length;i++){
        if(yearList[i] < 2000){
            olderCars.push(yearList[i]);
        }
    }
    return olderCars;
}

module.exports = result;
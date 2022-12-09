/**
 * @param {number} big
 * @param {number} medium
 * @param {number} small
 */
var ParkingSystem = function(big, medium, small) {
    this.big = big;
    this.medium = medium;
    this.small = small;
};

/** 
 * @param {number} carType
 * @return {boolean}
 */
ParkingSystem.prototype.addCar = function(carType) {
    if(carType===1){
        if(!this.big) return false;
        this.big--;
        return true;
    }
    else if(carType===2){
        if(!this.medium) return false;
        this.medium--;
        return true;
    }
    else if(carType===3){
        if(!this.small) return false;
        this.small--;
        return true;
    }
};

/** 
 * Your ParkingSystem object will be instantiated and called as such:
 * var obj = new ParkingSystem(big, medium, small)
 * var param_1 = obj.addCar(carType)
 */
var Car = (function () {
    function Car(name, mileage) {
        this.name = name;
        this.mileage = mileage;
    }
    Car.prototype.start = function (str) {
        this.str = str;
    };
    Car.prototype.drive = function (dr) {
        this.dr = dr;
    };
    Car.prototype.getPosition = function (pos) {
        this.pos = pos;
    };
    return Car;
}());
var myCar = new Car('ford', 34);
myCar.start(true);
myCar.drive("Left hand drive");
myCar.getPosition("mumbai cst");
console.log(myCar);
//# sourceMappingURL=classinterface.js.map
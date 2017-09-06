//interface Drivable defined
interface Drivable {
    start(str: boolean): void;
    drive(dr: string): void;
    getPosition(pos: number): void;
}
//class Car defined which implements interface Drivable
class Car implements Drivable {
    name: string;
    mileage: number;
    str: boolean;
    dr: string;
    pos: (number | string);
    //constructor method
    constructor(name: string, mileage: number) {
        this.name = name;
        this.mileage = mileage;
    }
    start(str: boolean) {
        this.str = str;
    }
    drive(dr: string) {
        this.dr = dr;
    }
    getPosition(pos: number | string) {
        this.pos = pos;
    }
}
//new instance of class Car created
const myCar = new Car('ford', 34);
//car methods called
myCar.start(true);
myCar.drive("Left hand drive");
myCar.getPosition("mumbai cst");
//car object logged to the console
console.log(myCar);
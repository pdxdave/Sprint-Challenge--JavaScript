// 1. Copy and paste your prototype in here and refactor into class syntax.


/****  I was getting an error that CuboidMaker was already taken.  Perhaps because         of the props.js file.  For this reason I changed the names to CuboidMaker2          and cuboid2.
 */


class CuboidMaker2 {
    constructor(obj){
        this.length = obj.length;
        this.width = obj.width;
        this.height = obj.height
        this.vol = (this.length)*(this.width)*(this.height);
        this.surf = 2 * ((this.length * this.width) + (this.length * this.height) + (this.width * this.height));
    }

    volume() {
        return(`The volume is ${this.vol}`);
    }

    surfaceArea() {
        return(`The surface area is ${this.surf}`);
    }
}

class CubeMaker extends CuboidMaker2 {
    constructor(obj){
        super(obj)
    }
}

const cuboid2 = new CuboidMaker2({
    length: 4,
    width: 5,
    height: 5
})





// Test your volume and surfaceArea methods by uncommenting the logs below:
console.log(cuboid2.volume()); // 100
console.log(cuboid2.surfaceArea()); // 130

// Stretch Task: Extend the base class CuboidMaker with a sub class called CubeMaker.  Find out the formulas for volume and surface area for cubes and create those methods using the dimension properties from CuboidMaker.  Test your work by logging out your volume and surface area.

const cuboid3 = new CubeMaker({
    length: 6,
    width: 9,
    height: 7
})

console.log(cuboid3.volume());
console.log(cuboid3.surfaceArea());
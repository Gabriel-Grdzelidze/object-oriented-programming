class Student{
    constructor(firstName , lastName){
        this.firstName = firstName;
        this.lastName = lastName;
        this.apsent = 0;
        let scores = [];
    }

    fullName(){
        let first_name=this.firstName[0].toUpperCase() + this.firstName.slice(1)
        let last_name=this.lastName[0].toUpperCase() + this.lastName.slice(1)
        return `you full name is ${first_name} ${last_name}`
    }

    countApsents(){
        this.apsent++
        let first_name=this.firstName[0].toUpperCase() + this.firstName.slice(1)
        let last_name=this.lastName[0].toUpperCase() + this.lastName.slice(1)
        return `${first_name} ${last_name} has been late for ${this.apsent} times`
    }

    // addScores(...scores){
    //     this.scores.push(...scores).fleat
    //     let first_name=this.firstName[0].toUpperCase() + this.firstName.slice(1)
    //     let last_name=this.lastName[0].toUpperCase() + this.lastName.slice(1)
    //     return `${first_name} ${last_name}'s scores are ${scores}`
    // }

}

let student_1 = new Student("ilia" , "topuria")

console.log(student_1.fullName())
console.log(student_1.countApsents())
// console.log(student_1.addScores())
console.log(student_1)

class Point{
    constructor(x,y){
        this.x = x;
        this.y = y
    }

    static distance(a,b){
        let dx = a.x - b.x;
        let dy = a.y - b.y;
        return Math.hypot(dx,dy)
    }


}

let point_1 = new Point(3,7)
let point_2 = new Point(6,11)

console.log(Point.distance(point_1,point_2))

class ReverceNum{
    constructor(numbers){
        this.numbers = numbers
    }

    reverse(){
        const reversed = this.numbers.toString().split("").reverse().join('')
        return parseInt(reversed) 
    }
}

let number_1 = new ReverceNum(123)

console.log(number_1.reverse())

class ReverseStr{
    constructor(string){
        this.string = string
    }

    reverse(){
        return this.string.split("").reverse().join('')
    }
}

let str_1 = new ReverseStr("hello")
console.log(str_1.reverse())
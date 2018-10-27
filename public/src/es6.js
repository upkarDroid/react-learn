class Person{
    constructor(name='anonymous',age=0){
            this.name=name;
            this.age = age;
    }

    getName(){
        return this.name;
    }

    greet(){
        return `hi there ${this.name} , you are ${this.age} years old`
    }
}

class Student extends Person{

    constructor(name,age,major){
        super(name,age);
        this.major = major;
    }
    hasMajor(){
        return !!this.major;
    }
    greet(){

        let greet = super.greet();
        return greet+ (this.hasMajor() ? ` still persuing a major in ${this.major} , shame!!!!!` : '');
    }

}

const me = new Student('upkar singh',30,"Electronics");

console.log(me.greet(),me);
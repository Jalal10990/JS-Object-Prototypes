function Person(first, last, age, eyecolor){
    this.firstName = first;
    this.lastName = last;
    this.age = age;
    this.eyeColor = eyecolor;
    // this.nationality = "Pakistani";

}
Person.prototype.nationality = "Paistani";

Person.prototype.name = function(){
    return this.firstName + " " + this.lastName
};

const myFather = new Person("Ali", "Jan", 45, "blue");
const myMother = new Person("Alia", "Jani", 40, "rown");

document.getElementById("demo").innerHTML = "My father name is " + myFather.name() +  ". My father is " + myFather.age + ". My mother is " + myMother.age + ". The nationality of me father is " + myFather.nationality;


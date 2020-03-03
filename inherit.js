//inheritance
class parent{
    constructor(){
        this.fatherName = "oaes";
        this.motherName = "mila"
    }
}
class child extends parent{
    constructor(name){
        super();
        this.name = name;
    }
}
const baby = new child("belal");
const baby2 = new child("labiba")
console.log(baby,baby2)
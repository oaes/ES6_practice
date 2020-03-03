class student{
    constructor(sId,sName){
        this.id = sId;
        this.name = sName;
        this.school = "khatal";
    }
}

const student1 = new student(3, "farjana");
const student2 = new student(3, "nargis");
console.log(student1.school, student2.name);
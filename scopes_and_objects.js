let globalCount = 0;

function showLocalScope() {
    let localCount = 5;
    console.log("Local count:", localCount);
    console.log("Global count:", globalCount);
}

function changeCounts() {
        globalCount += 1; 
        let localCount = 10; 
    localCount += 2;

    console.log("After change -> globalCount:", globalCount);
    console.log("After change -> localCount:", localCount);
}

function Student(name, age, course) {
    this.name = name;
    this.age = age;
    this.course = course;
    this.introduce = function() {
        return "Hi, my name is " + this.name + ". I'm " + this.age + " and I study " + this.course + ".";
    };
}

let studentA = new Student("Natheefah", 18, "Software Development");
let studentB = new Student("Imtiyaaz", 19, "Web Design");
let studentC = new Student("Aiden", 23, "Cyber Security");
let studentD = new Student("Mujahid", 20, "Sales Force Technician");
let studentE = new Student("Storm", 19, "Robotics Engineer");
let studentF = new Student("Taaraa", 19, "Geologist");
let studentG = new Student("Liviwe", 20, "Data Analysist");

console.log(studentA.introduce());
console.log(studentB.introduce());
console.log(studentC.introduce());
console.log(studentD.introduce());
console.log(studentE.introduce());
console.log(studentF.introduce());
console.log(studentG.introduce());

const school = {
    name: "Tech Academy",
    location: {
        city: "Cape Town",
        country: "South Africa"
    },
    subjects: ["HTML", "CSS", "JavaScript", "Python"],
    principal: {
        fullName: "Qaasim Davids",
        yearsExperience: 10
    }
};

console.log("School:", school.name);
console.log("City:", school.location.city);
console.log("Principal:", school.principal.fullName);

showLocalScope();
changeCounts();

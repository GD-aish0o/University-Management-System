// clone of Sir Hamzah's OOP st.management system As it was.
// from the video link, provided on discord.
// university Student management system:
// using Object Oriented Programming (OOP);
// parent of students & instructors
class person {
    name;
    age;
    constructor(name, age) {
        this.age = age;
        this.name = name;
    }
}
// inherit of person
class student extends person {
    static staticRollNumber = 0;
    rollnumber;
    courses = [];
    // public method
    RegisterForCourse(course) {
        this.courses.push(course);
    }
    constructor(name, age) {
        super(name, age);
        this.rollnumber = ++student.staticRollNumber;
    }
    //   method of registration for courses
    registerForCourses(course, crs4) {
        this.courses.push(course);
    }
}
// inherit of person
class instructor extends person {
    //   salary :number= 38000;
    salary;
    course = [];
    constructor(name, age, salary) {
        super(name, age);
        this.salary = salary;
    }
    //   method of assigning course
    assignCourse(courses) {
        this.course.push(courses);
    }
}
// Its a better practice to use methods outside console.
// courses
class course {
    id;
    name;
    students = [];
    instructors = [];
    constructor(id, name) {
        this.id = id;
        this.name = name;
    }
    // add student
    addStudent(std) {
        this.students.push(std);
    }
    // Add instructor
    addInstructor(Inst) {
        this.instructors.push(Inst);
    }
}
class Department {
    name;
    courses = [];
    constructor(name) {
        this.name = name;
    }
    AddCourse(course) {
        this.courses.push(course);
    }
}
// courses
const crs1 = new course(1, "Web 3.0 ");
const crs2 = new course(2, "Metaverse");
const crs3 = new course(3, "blockChain");
const crs4 = new course(4, "Gen AI eng");
// students
const std1 = new student("Hedda", 20);
const std2 = new student("Terry", 24);
const std3 = new student("Pascal", 32);
const std4 = new student("Kakearika", 20);
const std5 = new student("doe", 28);
std1.RegisterForCourse(crs1); //hedda is now regitered for web 3.0
// instructors
const inst1 = new instructor("darren", 38, 56000);
const inst2 = new instructor("jenny", 31, 49000);
const inst3 = new instructor("Spike", 40, 60000);
crs1.addInstructor(inst1); // darren is now the instructor of the course 1 (web3.0)
std5.rollnumber, std5.registerForCourses(crs2, crs4);
// Department
const dept1 = new Department("Computer Science");
const dept2 = new Department("Information Technology");
const dept3 = new Department("Internal relations");
dept1.AddCourse(crs1);
dept1.AddCourse(crs2);
dept1.AddCourse(crs3);
crs1.addStudent(std5);
crs1.addInstructor(inst2);
console.log(dept1.courses);
export {};

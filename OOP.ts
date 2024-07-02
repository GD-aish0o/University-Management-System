// The idea was provided by sir hamzah syed .
// from the video link, provided on discord.

// university Student management system:
// using Object Oriented Programming (OOP);

// parent of students & instructors

class person {
  name: string;
  age: number;

  constructor(name: string, age: number) {
    this.age = age;
    this.name = name;
  }
}

// inherit of person
class student extends person {

  static staticRollNumber: number = 0;

  rollnumber: number;

  courses: course[] = [];

  // public method
  RegisterForCourse(course: course) {
    this.courses.push(course);
  }

  constructor(name: string, age: number) {
    super(name, age);
    this.rollnumber = ++student.staticRollNumber;
  }

  //   method of registration for courses
  registerForCourses(course: course, crs4: course) {
    this.courses.push(course);
  }
}

// inherit of person
class instructor extends person {
  //   salary :number= 38000;
  salary: number;
  course: course[] = [];

  constructor(name: string, age: number, salary: number) {
    super(name, age);
    this.salary = salary;
  }

  //   method of assigning course
  assignCourse(courses: course) {
    this.course.push(courses);
  }
}

// Its a better practice to use methods outside console.

// courses

class course {
  id: number;
  name: string;
  students: student[] = [];
  instructors: instructor[] = [];

  constructor(id: number, name: string) {
    this.id = id;
    this.name = name;
  }

  // add student
  addStudent(std: student) {
    this.students.push(std);
  }

  // Add instructor
  addInstructor(Inst: instructor) {
    this.instructors.push(Inst);
  }
}

class Department {
    name:string;
    courses :course[]= [];

    constructor(name:string) {
        this.name = name;
    }

    AddCourse(course:course){
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

const dept1 = new Department("Computer Science" );
const dept2 = new Department("Information Technology");
const dept3 = new Department("Internal relations");

dept1.AddCourse(crs1);
dept1.AddCourse(crs2);
dept1.AddCourse(crs3);



crs1.addStudent(std5);
crs1.addInstructor(inst2);
console.log(dept1.courses);


// Sir gave us a task at the end of the session (organize code ), Already done * shrugs * 
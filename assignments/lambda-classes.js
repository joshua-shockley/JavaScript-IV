// CODE here for your Lambda Classes

class Person {
    constructor(attributes) {
        this.name = attributes.name,
            this.age = attributes.age,
            this.location = attributes.location
    }
    speak() {
        console.log(`Hello my name is ${this.name}, I am from ${this.location}`);
    }
}


class Instructor extends Person {
    constructor(attributes) {
        super(attributes);
        this.specialty = attributes.specialty,
            this.favLanguage = attributes.favLanguage,
            this.catchPhrase = attributes.catchPhrase
    }
    demo(subject) {
        console.log(`Today we are learning about ${subject}`);
    }
    grade(student, subject) {
        console.log(`${student.name} receives a perfect score on ${subject}`);
    }

}

class Student extends Person {
    constructor(attributes) {
        super(attributes);
        this.previousBackground = attributes.previousBackground,
            this.className = attributes.className,
            this.favSubjects = attributes.favSubjects
    }
    listsSubjects() {
        let subject = this.favSubjects.forEach(item =>
            console.log(item));
    }
    PRAssignment(subject) {
        console.log(`${this.name} has submitted a PR for ${subject}.`)
    }
}

class ProjectManager extends Instructor {
    constructor(attributes) {
        super(attributes);
        this.gradClassName = attributes.gradClassName,
            this.favInstructor = attributes.favInstructor
    }
    standUp() {
        let slackChannel = '{name}';
        let channelName = '{channel}';
        console.log(`${slackChannel} announces to ${channelName}, @channel standy times!`)
    }
    debugsCode(student, subject) {
        console.log(`${this.name} debugs ${student.name}'s code on ${subject}`);
    }
}

const instructorOne = new Instructor({
    name: 'the teach',
    location: 'first room',
    age: 38,
    favLanguage: 'JavaScript',
    specialty: 'Front-end',
    catchPhrase: 'to code or not to code, not really a question; is it?'
});

const instructorTwo = new Instructor({
    name: 'the taughter',
    location: 'next room',
    age: 35,
    favLanguage: 'C++',
    specialty: 'All of it',
    catchPhrase: 'Do or do not, there is not try'
});

const studentOne = new Student({
    name: 'Malcom',
    location: 'his room',
    age: 15,
    previousBackground: 'server',
    className: 'web dev',
    favSubjects: ['HTML', 'CSS', 'JavaScript']
});

const studentTwo = new Student({
    name: 'Bobbie',
    location: 'a room',
    age: 16,
    previousBackground: 'retail',
    className: 'web dev',
    favSubjects: ['JAVA', 'C++', 'JavaScript']
});

const projectManagerOne = new ProjectManager({
    name: 'Manager Chiara',
    location: 'library',
    age: 75,
    gradClassName: 'CS1',
    favInstructor: 'Terry'
});

const projectManagerTwo = new ProjectManager({
    name: 'Manager Dave',
    location: 'here',
    age: 65,
    gradClassName: 'CS2',
    favInstructor: 'Devon'
});

console.log(studentOne.name);
console.log(studentTwo.className);
console.log(projectManagerOne.favInstructor);
console.log(projectManagerTwo.gradClassName);
console.log(instructorOne.specialty);
console.log(instructorTwo.catchPhrase);
studentOne.listsSubjects();
studentOne.PRAssignment('maths');
instructorOne.grade(studentTwo, 'java');
instructorTwo.demo('gym');
projectManagerOne.speak();
projectManagerOne.standUp();
projectManagerTwo.debugsCode(studentOne, 'math');
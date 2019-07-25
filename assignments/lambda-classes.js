// CODE here for your Lambda Classes

class Person {
    constructor(attributes) {
        this.name = attributes.name,
            this.age = attributes.age,
            this.location = attributes.location
    }
    speak() {
        return `Hello my name is ${this.name}, I am from ${this.location}`;
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
        return `Today we are learning about ${this.subject}`;
    }
    grade(subject) {
        return `${student.name} receives a perfect score on ${subject}`;
    }

}

class Student {
    constructor(attributes) {
        super(attributes);
        this.previousBackground = attributes.previousBackground,
            this.className = attributes.className,
            this.favSubjects = attributes.favSubjects
    }
    listsSubjects() {

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
    age: 55,
    favLanguage: 'C++',
    specialty: 'All of it',
    catchPhrase: 'Do or do not, there is not try'
});

const studentOne = new Student({
    previousBackground: 'server',
    className: 'web dev',
    favSubjects: ['HTML', 'CSS', 'JavaScript']
})

const studentTwo = new Student({
    previousBackground: 'retail',
    className: 'web dev',
    favSubjects: ['HTML', 'CSS', 'JavaScript']
})
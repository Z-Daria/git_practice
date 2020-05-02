class School {
  constructor(name, level, numberOfStudents) {
    this._name = name;
    this._level = level; // should be one of three strings: 'primary', 'middle', or 'high'
    this._numberOfStudents = numberOfStudents;
  }
  
  get name() {
    return this._name;
  }
  get level() {
    return this._level;
  }
  get numberOfStudents() {
    return this._numberOfStudents;
  }
  set numberOfStudents(num) {
    if (typeof num === 'number') {
      this._numberOfStudents = num;
    } else {
      console.log('Invalid input: numberOfStudents must be set to a Number.');
    }
  }
  quickFacts() {
    console.log(`${this._name} educates ${this._numberOfStudents} students at the ${this._level} school level.`);
  }
  
  static pickSubstituteTeacher(teachers) {
    const l = teachers.length;
    const i = Math.floor(Math.random() * l);
    const teacher = teachers[i];
    return teacher;
  }
};

class PrimarySchool extends School {
  constructor(name, numberOfStudents, pickupPolicy) {  // level in this subclass should always be 'primary'. How set this?
    super(name, 'primary', numberOfStudents);  
    this._pickupPolicy = pickupPolicy;
  }
  get pickupPolicy() {
    return this._pickupPolicy;
  }
};

class HighSchool extends School {
    constructor(name, numberOfStudents, sportTeams) {
        super(name, 'high', numberOfStudents);
        this._sportTeams = sportTeams;
    }

    get sportTeams() {
        console.log(this._sportTeams);
    }
}

const lorraineHansbury = new PrimarySchool('Loraine Hansbury', 514, 'Students must be picked up by a parent, guardian, or a family member over the age of 13.');
lorraineHansbury.quickFacts();
console.log(lorraineHansbury._numberOfStudents);
console.log(lorraineHansbury);
const teacher = School.pickSubstituteTeacher(['Jamal Crawford', 'Lou Williams', 'J. R. Smith', 'James Harden', 'Jason Terry', 'Manu Ginobli']);
console.log(teacher);

const alSmith = new HighSchool('Al E. Smith', 415, ['Baseball', 'Basketball', 'Volleyball', 'Track and Field']);
console.log(alSmith);
alSmith.sportTeams;

class SchoolCatalog {
    constructor(school) {
      this._schools = [school];
    }
    
    set school(newSchool) {
      this._schools.push(newSchool);
    }
  };
  
const a = new SchoolCatalog(alSmith);
a.school = lorraineHansbury;

console.log(a); // create new School Catalog

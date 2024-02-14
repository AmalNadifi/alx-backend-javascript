// Import necessary classes and interfaces
import { Subjects } from './subjects/Cpp';
import { Subjects as SubjectsJava } from './subjects/Java';
import { Subjects as SubjectsReact } from './subjects/React';
import { Teacher } from './subjects/Teacher';

// Create and export constants for each subject
export const cpp = new Subjects.Cpp();
export const java = new SubjectsJava.Java();
export const react = new SubjectsReact.React();

// Create a Teacher object with experienceTeachingC = 10
export const cTeacher: Teacher = {
  firstName: 'John',
  lastName: 'Doe',
  experienceTeachingC: 10
};

// For Cpp subject
console.log('C++');
cpp.setTeacher(cTeacher);
console.log(cpp.getRequirements());
console.log(cpp.getAvailableTeacher());

// For Java subject
console.log('Java');
java.setTeacher(cTeacher);
console.log(java.getRequirements());
console.log(java.getAvailableTeacher());

// For React subject
console.log('React');
react.setTeacher(cTeacher);
console.log(react.getRequirements());
console.log(react.getAvailableTeacher());

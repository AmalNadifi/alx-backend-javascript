// Define the Teacher interface
interface Teacher {
  readonly firstName: string; // First name of the teacher (read-only)
  readonly lastName: string; // Last name of the teacher (read-only)
  fullTimeEmployee: boolean; // Whether the teacher is a full-time employee
  yearsOfExperience?: number; // Optional years of experience of the teacher
  location: string; // Location of the teacher
  [propName: string]: any; // Allow any additional properties
}

// Define the Directors interface extending Teacher
interface Directors extends Teacher {
  numberOfReports: number; // Number of reports for Directors
}

// Define a function type for printing teacher information
interface printTeacherFunction {
  (firstName: string, lastName: string): string; // Function taking first and last names and returning a string
}

// Define a function to print teacher information
const printTeacher: printTeacherFunction = (firstName: string, lastName: string): string => `${firstName.charAt(0)}.${lastName}`;

// Define an interface for a class
interface classInterface {
  workOnHomework(): string; // Method to work on homework and return a string
  displayName(): string; // Method to display the name and return a string
}

// Define a class implementing classInterface
class StudentClass implements classInterface {
  firstName: string; // First name of the student
  lastName: string; // Last name of the student

  constructor(firstName: string, lastName: string) {
    this.firstName; // Initialize first name
    this.lastName; // Initialize last name
  }

  workOnHomework(): string {
    return "Currently working"; // Return a string indicating working on homework
  }

  displayName(): string {
    return this.firstName; // Return the first name
  }
}

// Define a function to create instances of StudentClass
interface StudentConstructor {
  (firstName: string, lastName: string): classInterface; // Function taking first and last names and returning an instance of classInterface
}

// Create an instance of StudentClass
const student = new StudentClass("Djo", "djo");
console.log(student.displayName()); // Display the student's name
console.log(student.workOnHomework()); // Indicate that the student is working on homework

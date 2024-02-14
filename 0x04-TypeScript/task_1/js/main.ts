// main.ts

// Define the Teacher interface
interface Teacher {
  readonly firstName: string;
  readonly lastName: string;
  readonly fullTimeEmployee: boolean;
  readonly yearsOfExperience?: number;
  readonly location: string;
  [key: string]: any; // Allow any additional properties
}

// Create a function to create a Teacher object with initial attributes
function createTeacher(
  firstName: string,
  lastName: string,
  fullTimeEmployee: boolean,
  location: string,
  attributes: Record<string, any> = {}
): Teacher {
  return {
    firstName,
    lastName,
    fullTimeEmployee,
    location,
    ...attributes,
  };
}

// Example usage
const teacher3: Teacher = createTeacher('John', 'Doe', false, 'London', { contract: false });

console.log(teacher3);

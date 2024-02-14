// Define an interface for a Student
interface Student {
  firstName: string;
  lastName: string;
  age: number;
  location: string;
}

// Define two students using the Student interface
const student1: Student = {
  firstName: "John",
  lastName: "Doe",
  age: 20,
  location: "New York"
};

const student2: Student = {
  firstName: "Jane",
  lastName: "Doe",
  age: 22,
  location: "Los Angeles"
};

// Create an array containing the two students
const studentsList: Student[] = [student1, student2];

// Function to render a table with student data
function renderTable(students: Student[]): void {
  // Create a new table element
  const table = document.createElement("table");

  // Iterate over each student in the array
  students.forEach(student => {
    // Insert a new row for each student
    const row = table.insertRow();
    // Insert cells in the row for student's first name and location
    const cell1 = row.insertCell();
    const cell2 = row.insertCell();

    // Populate cells with student data
    cell1.textContent = student.firstName;
    cell2.textContent = student.location;
  });

  // Append the table to the document body
  document.body.appendChild(table);
}

// Call the renderTable function with the studentsList array
renderTable(studentsList);


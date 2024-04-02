const { readDatabase } = require('../utils');

class StudentsController {
  static async getAllStudents(request, response) {
    try {
      const studentsByField = await readDatabase(process.argv[2]);
      let output = 'This is the list of our students\n';
      Object.entries(studentsByField).forEach(([field, students]) => {
        const studentList = `${students.length ? students.length : 'No'} student${students.length !== 1 ? 's' : ''}`;
        output += `Number of students in ${field}: ${studentList}. List: ${students.join(', ')}\n`;
      });
      response.status(200).send(output);
    } catch (error) {
      response.status(500).send('Cannot load the database');
    }
  }

  static async getAllStudentsByMajor(request, response) {
    const { major } = request.params;
    if (major !== 'CS' && major !== 'SWE') {
      response.status(500).send('Major parameter must be CS or SWE');
      return;
    }
    try {
      const studentsByField = await readDatabase(process.argv[2]);
      const studentsInMajor = studentsByField[major] || [];
      const output = `List: ${studentsInMajor.join(', ')}`;
      response.status(200).send(output);
    } catch (error) {
      response.status(500).send('Cannot load the database');
    }
  }
}

module.exports = StudentsController;

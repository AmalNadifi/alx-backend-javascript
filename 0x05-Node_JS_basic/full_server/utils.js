const { readFile } = require('fs');

function readDatabase(filePath) {
  return new Promise((resolve, reject) => {
    readFile(filePath, 'utf-8', (err, data) => {
      if (err) {
        reject(new Error('Cannot load the database'));
      } else {
        const lines = data.trim().split('\n');
        const studentsByField = {};
        lines.forEach(line => {
          const [firstname, , , field] = line.split(',');
          if (field) {
            studentsByField[field] = studentsByField[field] || [];
            studentsByField[field].push(firstname);
          }
        });
        resolve(studentsByField);
      }
    });
  });
}

module.exports = { readDatabase };

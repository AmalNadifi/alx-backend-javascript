const express = require('express');
const { readFile } = require('fs');

const server = express();
const port = 1245;

function countStudents(fileName) {
  const studentsList = {};
  const fieldsCount = {};
  let studentsLength = 0;
  return new Promise((resolve, reject) => {
    readFile(fileName, (err, data) => {
      if (err) {
        reject(err);
      } else {
        let output = '';
        const lines = data.toString().split('\n');
        for (let i = 0; i < lines.length; i += 1) {
          if (lines[i]) {
            studentsLength += 1;
            const fields = lines[i].toString().split(',');
            if (Object.prototype.hasOwnProperty.call(studentsList, fields[3])) {
              studentsList[fields[3]].push(fields[0]);
            } else {
              studentsList[fields[3]] = [fields[0]];
            }
            if (Object.prototype.hasOwnProperty.call(fieldsCount, fields[3])) {
              fieldsCount[fields[3]] += 1;
            } else {
              fieldsCount[fields[3]] = 1;
            }
          }
        }
        const l = studentsLength - 1;
        output += `Number of students: ${l}\n`;
        for (const [key, value] of Object.entries(fieldsCount)) {
          if (key !== 'field') {
            output += `Number of students in ${key}: ${value}. `;
            output += `List: ${studentsList[key].join(', ')}\n`;
          }
        }
        resolve(output);
      }
    });
  });
}

server.get('/', (request, response) => {
  response.send('Hello Holberton School!');
});
server.get('/students', (request, response) => {
  countStudents(process.argv[2].toString()).then((output) => {
    response.send(['This is the list of our students', output].join('\n'));
  }).catch(() => {
    response.send('This is the list of our students\nCannot load the database');
  });
});

server.listen(port, () => {
});

module.exports = server;

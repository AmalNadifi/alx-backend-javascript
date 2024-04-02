const http = require('http');
const { readFile } = require('fs').promises;

const hostname = '127.0.0.1';
const port = 1245;

async function countStudents(fileName) {
  try {
    const data = await readFile(fileName, 'utf-8');
    const students = {};
    const fields = {};
    let length = 0;
    const lines = data.trim().split('\n');
    lines.forEach(line => {
      const [firstname, lastname, age, field] = line.split(',');
      if (!students[field]) students[field] = [];
      students[field].push(firstname);
      fields[field] = (fields[field] || 0) + 1;
      length++;
    });
    const l = length - 1;
    let output = `Number of students: ${l}\n`;
    for (const [key, value] of Object.entries(fields)) {
      if (key !== 'field') {
        output += `Number of students in ${key}: ${value}. `;
        output += `List: ${students[key].join(', ')}\n`;
      }
    }
    return output;
  } catch (error) {
    throw new Error('Cannot load the database');
  }
}

const app = http.createServer(async (request, response) => {
  response.statusCode = 200;
  response.setHeader('Content-Type', 'text/plain');
  if (request.url === '/') {
    response.write('Hello Holberton School!');
    response.end();
  } else if (request.url === '/students') {
    response.write('This is the list of our students\n');
    try {
      const output = await countStudents(process.argv[2].toString());
      response.end(output);
    } catch (error) {
      response.statusCode = 404;
      response.end('Cannot load the database');
    }
  } else {
    response.statusCode = 404;
    response.end('Page not found');
  }
});

app.listen(port, hostname, () => {
});

module.exports = app;

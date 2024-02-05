export default function createIteratorObject(report) {
  const resultArray = [];

  for (const item of Object.values(report.allEmployees)) {
    resultArray.push(...item);
  }

  return resultArray;
}

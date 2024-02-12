export default function groceriesList() {
  // Initialize an empty Map
  const finalMap = new Map();

  // Define an object containing groceries and their quantities
  const obj = {
    Apples: 10,
    Tomatoes: 10,
    Pasta: 1,
    Rice: 1,
    Banana: 5,
  };

  // Get all the keys in the object into an array
  const list = Array.from(Object.keys(obj));

  // Map through the array and for each item, set the value to the key in the finalMap
  list.map((item) => finalMap.set(item, obj[item]));

  // Return the populated finalMap
  return finalMap;
}

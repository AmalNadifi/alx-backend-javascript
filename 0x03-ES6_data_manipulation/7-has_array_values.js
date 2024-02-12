/* eslint-disable array-callback-return */
export default function hasValuesFromArray(set, list) {
  let verdict = true;
  list.map((value) => {
    if (!set.has(value)) {
      verdict = false;
    }
  });

  return verdict;
}

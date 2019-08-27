export const toTitleCase = str => {
  let strArr = str.split(" ");
  strArr = strArr.map(
    word => word[0].toUpperCase() + word.substring(1, word.length).toLowerCase()
  );
  return strArr.join(" ");
};

export const checkIfExists = (val, arr) => {
  let elem;
  for (elem of arr) {
    if (elem === val) return true;
  }
  return false;
};

export const checkSubArray = (subArr, arr) => {
  const bool = subArr.map(cur => checkIfExists(cur, arr));
  return !bool.includes(false);
};

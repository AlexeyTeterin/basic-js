module.exports = function countCats(matrix) {
  if (matrix==null) return 0;
  let sum=0;
  for (let x of matrix) {
    for (let y of x){
      if (y=="^^") sum++;
    }
  }
  return sum;
};

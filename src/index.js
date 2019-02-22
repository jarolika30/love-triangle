/**
 * @param preferences - an array of integers. Indices of people, whom they love
 * @returns number of love triangles
 */
module.exports = function getLoveTrianglesCount(preferences = []) {
  
  // your implementation
  let mas = preferences;
  let count = 0;

  if (mas.length >= 3) {
    let matrix = createMatrix(mas);
    
    mas.unshift(0);

    for (index = 1; index !== mas.length; index++) {
        let b = mas[index];
        let c = mas[b];
      //check that indexes are different and values are not excluded
      if (b !== 0 && b !== index && c !== 0 &&  b !== c) {
        let diagonal =  matrix[index][index] + matrix[b][b] + matrix[c][c];
        let diagonal2 = 0;
        if(mas[b] === c) {
          diagonal2 += (c + index);
        }
        if(mas[c] === index) {
          diagonal2 += (index + b);
        }
        if(mas[index] === b){
          diagonal2 += (b + c);
        }
        if(diagonal === diagonal2){
          count++;
          mas[index], mas[b], mas[c] = 0;
        }
      }
    }
  }

  function createMatrix(mas) {
    let matrix = [];

    for (var i = 0; i !==   mas.length + 1; i++) {
        matrix[i] = [];
        for (var j = 0; j  !==   mas.length + 1; j++) {
          if (i === 0 || j === 0) {
              matrix[i][j] = 0;
          } else {
              matrix[i][j] = mas[j - 1] + i;
          }
        }
    }

    return matrix;
  }
  
  return count;
};



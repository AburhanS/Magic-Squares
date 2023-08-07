function isMagicSquare(array){
    let n; // declare a variable for the size of the square
    if(Array.isArray(array[0])){ // if the first element of the array is an array
        n = array.length; // get the number of rows
        if(n != 3){
            return false;
        }else if(!array.every(row => row.length == n)){ // if not every row has the same length as n
            return false;
        }
    } else {
        n = Math.sqrt(array.length); // get the square root of the number of elements in the one-dimensional array
        if(n != 3){
            return false;
        }
    }
    let expectedSum = 15
    let diagonalSum1 = 0; // initialize the sum of the first diagonal to zero
    let diagonalSum2 = 0; // initialize the sum of the second diagonal to zero
    for(let i = 0; i < n; i++){ // loop over the rows
        let rowSum = 0; // initialize the sum of the current row to zero
        let colSum = 0; // initialize the sum of the current column to zero
        for(let j = 0; j < n; j++){ // loop over the columns
            let element; // declare a variable for the current element
            if(Array.isArray(array[0])){ // if the input array is two-dimensional
                element = array[i][j]; // get the element at row i and column j
            } else { // if the input array is one-dimensional
                element = array[i*n + j]; // get the element at index i*n + j
            }
            rowSum += element; // add the element to the row sum
            colSum += array[j*n + i]; // add the element to the column sum
            if(i == j){ // if on the first diagonal
                diagonalSum1 += element; // add the element to the diagonal sum
            }
            if(i == n-j-1){ // if on the second diagonal
                diagonalSum2 += array[i*n + (n-j-1)]; // add the element to the diagonal sum
            }
        }
        if(rowSum != expectedSum || colSum != expectedSum){ // if either the row sum or the column sum is not equal to the expected sum
            return false; // return false
        }
    }
    if(diagonalSum1 != expectedSum || diagonalSum2 != expectedSum){ // if either the diagonal sum is not equal to the expected sum
        return false; // return false
    }
    return true; // return true if all sums are equal to the expected sum
};

let testArray1 = [8, 1, 6, 3, 5, 7, 4, 9, 2]; // a sample one dimensional array that is a magic square
let testArray2 = [[2, 7, 6], [9, 5, 1], [4, 3, 8]]; // a sample two dimensional array that is a magic square
let testArray3 = [1, 2, 3]; // a sample one dimensional array that is not a magic square
let testArray4 = [[1, 2], [3, 4]]; // a sample two dimensional array that is not a magic square

console.log(isMagicSquare(testArray1)); // print true
console.log(isMagicSquare(testArray2)); // print true
console.log(isMagicSquare(testArray3)); // print false
console.log(isMagicSquare(testArray4)); // print false


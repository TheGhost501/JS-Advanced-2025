function isMagicalMatrix(matrix) {
  const n = matrix.length;
  const m = matrix[0].length;

  // 1. Reference sum from first row
  const targetSum = matrix[0].reduce((a, b) => a + b, 0);

  // 2. Check rows
  for (let row of matrix) {
    let rowSum = row.reduce((a, b) => a + b, 0);
    if (rowSum !== targetSum) return false;
  }

  // 3. Check columns
  for (let col = 0; col < m; col++) {
    let colSum = 0;
    for (let row = 0; row < n; row++) {
      colSum += matrix[row][col];
    }
    if (colSum !== targetSum) return false;
  }

  // If all checks pass
  return true;
}
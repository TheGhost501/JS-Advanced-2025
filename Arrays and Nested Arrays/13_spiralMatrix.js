function spiralMatrix(rows, cols) {
    // Step 1: create an empty matrix
    let matrix = Array.from({ length: rows }, () => Array(cols).fill(0));

    // Step 2: define boundaries
    let top = 0,
        bottom = rows - 1,
        left = 0,
        right = cols - 1;

    let num = 1; // start filling from 1

    // Step 3: loop until all cells are filled
    while (top <= bottom && left <= right) {
        // left → right
        for (let i = left; i <= right; i++) {
            matrix[top][i] = num++;
        }
        top++;

        // top → bottom
        for (let i = top; i <= bottom; i++) {
            matrix[i][right] = num++;
        }
        right--;

        // right → left (check if still within bounds)
        if (top <= bottom) {
            for (let i = right; i >= left; i--) {
                matrix[bottom][i] = num++;
            }
            bottom--;
        }

        // bottom → top (check again)
        if (left <= right) {
            for (let i = bottom; i >= top; i--) {
                matrix[i][left] = num++;
            }
            left++;
        }
    }

    // Step 4: print matrix
    matrix.forEach(row => console.log(row.join(" ")));
}

spiralMatrix(5, 5)
function buildOrbit(input) {
    const [rows, cols, starRow, starCol] = input;
    const matrix = [];

    for (let r = 0; r < rows; r++) {
        matrix[r] = [];
        for (let c = 0; c < cols; c++) {
            // Chebyshev distance + 1
            const distance = Math.max(Math.abs(r - starRow), Math.abs(c - starCol)) + 1;
            matrix[r][c] = distance;
        }
    }

    // Print
    matrix.forEach(row => console.log(row.join(" ")));
}
buildOrbit([4, 4, 0, 0])
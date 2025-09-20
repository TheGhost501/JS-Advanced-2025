function ticTac(data) {
    let initialMatrice = [
        [false, false, false],
        [false, false, false],
        [false, false, false]
    ];

    let playerOne = true;

    for (let coordinates of data) {
        let [x, y] = coordinates.split(" ");

        let marker = playerOne ? "X" : "O";

        if (initialMatrice[x][y]) {
            console.log("This place is already taken. Please choose another!");
            continue;
        }
        initialMatrice[x][y] = marker;

        if (checkWin(initialMatrice, marker)) {
            console.log(`Player ${marker} wins!`);
            printDash(initialMatrice);
            return;
        }

        if (!checkFreeSpace(initialMatrice)) {

            console.log("The game ended! Nobody wins :(");
            printDash(initialMatrice);
            return;
        }

        playerOne = !playerOne;
    }

    function checkWin(dashboard, marker) {

        for (let i = 0; i < dashboard.length; i++) {
            if (
                dashboard[i][0] == marker &&
                dashboard[i][1] == marker &&
                dashboard[i][2] == marker
            ) {
                return true;
            } else if (
                dashboard[0][i] == marker &&
                dashboard[1][i] == marker &&
                dashboard[2][i] == marker) {
                return true;
            } else if (
                dashboard[0][0] == marker &&
                dashboard[1][1] == marker &&
                dashboard[2][2] == marker) {
                return true;
            } else if (
                dashboard[0][2] == marker &&
                dashboard[1][1] == marker &&
                dashboard[2][0] == marker) {
                return true;
            }

        }
        return false;
    }

    function checkFreeSpace(dashboard) {

        return dashboard.flat().filter(x => !x).length
    }

    function printDash(dashboard) {
        dashboard.forEach(row => {
            console.log(row.join("\t"));

        });

    }

}
ticTac(["0 1",
    "0 0",
    "0 2",
    "2 0",
    "1 0",
    "1 2",
    "1 1",
    "2 1",
    "2 2",
    "0 0"]
)
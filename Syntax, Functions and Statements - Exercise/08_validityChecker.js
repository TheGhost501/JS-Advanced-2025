function validity(...data) {
    let x1 = data[0];
    let y1 = data[1];
    let x2 = data[2];
    let y2 = data[3];

    function check(x1, y1, x2, y2) {
        let distanceX = x2 - x1;
        let distanceY = y2 - y1;

        return Math.sqrt(distanceX ** 2 + distanceY ** 2);

    }

    if (Number.isInteger(check(x1, y1, 0, 0))) {
        console.log((`{${x1}, ${y1}} to {0, 0} is valid`));
    } else {
        console.log((`{${x1}, ${y1}} to {0, 0} is invalid`));
    }
    if (Number.isInteger(check(x2, y2, 0, 0))) {
        console.log((`{${x2}, ${y2}} to {0, 0} is valid`));
    } else {
        console.log((`{${x2}, ${y2}} to {0, 0} is invalid`));
    }
    if (Number.isInteger(check(x1, y1, x2, y2))) {
        console.log((`{${x1}, ${y1}} to {${x2}, ${y2}} is valid`));
    } else {
        console.log((`{${x1}, ${y1}} to {${x2}, ${y2}} is invalid`));
    }
}

validity(2, 1, 1, 1)
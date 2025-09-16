function radar(input1, input2) {
    let currentSpeed = Number(input1);
    let area = input2;

    let speedLimits = {
        "motorway": 130,
        "interstate": 90,
        "city": 50,
        "residential": 20
    }

    if (currentSpeed > speedLimits[area]) {
        let difference = currentSpeed - speedLimits[area];
        let status = calculateStatus(difference);
        console.log(`The speed is ${difference} km/h faster than the allowed speed of ${speedLimits[area]} - ${status}`)
    } else {
        console.log(`Driving ${currentSpeed} km/h in a ${speedLimits[area]} zone`);
    }

    function calculateStatus(speed) {
        if (speed <= 20) {
            return "speeding";
        } else if (speed <= 40) {
            return "excessive speeding";
        } else {
            return "reckless driving";
        }
    }
}

radar(60, 'city')
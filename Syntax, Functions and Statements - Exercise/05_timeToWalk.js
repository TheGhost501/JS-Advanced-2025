function walk(steps, footprint, speed) {
    let distance = steps * footprint;
    let breaks = Math.floor(distance / 500);
    let time = (distance / (speed * 1000)) * 60 + breaks;
    let hours = Math.floor(time / 60);
    let minutes = Math.floor(time);
    let second = Math.round((time % minutes) * 60);
    function format(num) {
        return String(num).padStart(2, "0");
    }
    console.log(format(hours) + ":" + format(minutes) + ":" + format(second));


}
walk(4000, 0.60, 5)
walk(2564, 0.70, 5.5)
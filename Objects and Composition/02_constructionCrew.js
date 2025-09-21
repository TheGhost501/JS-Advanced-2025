function construction(worker) {

    let checkDizzy = worker.dizziness;
    if (checkDizzy) {
        worker.levelOfHydrated += 0.1 * worker.weight * worker.experience;
        worker.dizziness = false;

    }

    return worker;

}
let result = construction({
    weight: 80,
    experience: 1,
    levelOfHydrated: 0,
    dizziness: true
}
)
console.log(result);

function carFactory(carSpecs) {
    let engines = {
        smallEngine: { power: 90, volume: 1800 },
        normalEngine: { power: 120, volume: 2400 },
        monsterEngine: { power: 200, volume: 3500 },
    }

    let wheelsize = carSpecs.wheelsize % 2 == 0 ? carSpecs.wheelsize - 1 : carSpecs.wheelsize;

    let model = carSpecs.model;
    let engine = choseEngine(carSpecs.power, engines);
    let carCarriage = carriage = { type: carSpecs.carriage, color: carSpecs.color };
    let wheels = new Array(4).fill(wheelsize);

    let newCar = {
        model: model, engine: engine, carriage: carCarriage, wheels: wheels
    }

    return newCar;

    function choseEngine(power, enginesInStock) {

        for (const key in enginesInStock) {
            if (!Object.hasOwn(enginesInStock, key)) continue;
            const element = enginesInStock[key].power;
            if (power <= element) {
                return enginesInStock[key];
            }


        }
    }
}
console.log(carFactory({
    model: 'VW Golf II',
    power: 90,
    color: 'blue',
    carriage: 'hatchback',
    wheelsize: 14
}))

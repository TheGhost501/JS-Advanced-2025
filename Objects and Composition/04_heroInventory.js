function heroRegister(input) {
    let heroes = [];

    for (let line of input) {
        if (!line.trim()) continue; // skip empty lines

        let [name, level, itemsStr] = line.split(" / ");
        let hero = {
            name: name,
            level: Number(level),
            items: itemsStr ? itemsStr.split(", ") : []
        };
        heroes.push(hero);
    }

    console.log(JSON.stringify(heroes));
}
heroRegister(['Isacc / 25 / Apple, GravityGun',
    'Derek / 12 / BarrelVest, DestructionSword',
    'Hes / 1 / Desolator, Sentinel, Antara']
)
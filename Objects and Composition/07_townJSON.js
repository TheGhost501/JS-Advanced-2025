function convertToJSON(tableArr) {

    tableArr.shift();
    let townArr = [];

    for (const town of tableArr) {
        let [city, lat, long] = town.split(/\s*\|\s*/).filter(x => x !== '');
        townArr.push({
            "Town": city,
            "Latitude": Number(Number(lat).toFixed(2)),
            "Longitude": Number(Number(long).toFixed(2))
        })
    }

  return JSON.stringify(townArr)
    
}


console.log(convertToJSON(['| Town | Latitude | Longitude |',
    '| Sofia | 42.696552 | 23.32601 |',
    '| Beijing | 39.913818 | 116.363625 |'
]));

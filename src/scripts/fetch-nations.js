const axios = require("axios");
const fs = require("fs");

URL = "https://api.worldofwarships.eu/wows/encyclopedia/ships/";
APPID = "d9e3cd11e2529af77d0317ff1597b2be";

SHIP_NATIONS = [
    "usa",
    "japan",
    "ussr",
    "germany",
    "uk",
    "commonwealth",
    "france",
    "italy",
    "pan_asia",
    "europe",
    "pan_america",
];

FIELDS = [
    "name",
    "tier",
    "type",
    "images.small",
];

SHIP_NATIONS.forEach(nation => {
    axios.get(URL, {
        params: {
            application_id: APPID,
            nation: nation,
            fields: FIELDS.join(","),
            language: "en",
        }
    })
        .then(resp => {
            console.log(`${nation}:`);
            if (resp.data.status === "ok") {
                console.log(resp.data.meta);

                var content = resp.data;
                content.data = transformShipData(content.data);
                var contentStr = JSON.stringify(content, null, 2);
                fs.writeFileSync(`./src/assets/nations/${nation}.json`, contentStr);
            } else if (resp.data.status === "error") {
                console.log(resp.data.error.message);
            }
        })
        .catch(err => {
            console.log(`${nation}:`);
            console.error(err.errno);
        });
});

function transformShipData(data) {
    const excludedShips = [
        "STALINGRAD #2",
        "Brennus",
        "L'Effronté",
        "Alabama ST",
        "Giunio Bruto",
    ]
    var newData = [];

    for (const id in data) {
        const ship = data[id];
        if (!(ship.name.startsWith("[") || excludedShips.some(name => ship.name === name))) {
            newData.push({
                id: id,
                name: ship.name,
                type: ship.type,
                tier: ship.tier,
                image: ship.images.small,
            });
        }
    }

    return newData;
}
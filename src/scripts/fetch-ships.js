const axios = require("axios");
const fs = require("fs");

URL = "https://api.worldofwarships.ru/wows/encyclopedia/ships/";
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

SHIP_TYPES = [
    "Destroyer",
    "Cruiser",
    "Battleship",
    "AirCarrier",
];

FIELDS = [
    "name",
    "tier",
    "is_premium",
    "is_special",
    "images",
];

SHIP_NATIONS.forEach(nation => {
    SHIP_TYPES.forEach(type => {
        axios.get(URL, {
            params: {
                application_id: APPID,
                nation: nation,
                type: type,
                fields: FIELDS.join(","),
                language: "en",
            }
        })
            .then(resp => {
                console.log(`${nation} ${type}`);
                if (resp.data.status === "ok") {
                    console.log(resp.data.meta);

                    var content = resp.data;
                    content.data = transformShipData(content.data);
                    var contentStr = JSON.stringify(content, null, 2);
                    fs.writeFileSync(`./src/assets/${nation}-${type}.json`, contentStr);
                } else if (resp.data.status === "error") {
                    console.log(resp.data.error.message);
                }
            })
            .catch(err => {
                console.log(`${nation} ${type}`);
                console.error(err.errno);
            });
    });
});

function transformShipData(data) {
    var newData = [];

    for (const id in data) {
        const ship = data[id];
        if (!ship.name.startsWith("[")) {
            newData.push({
                id,
                ...ship,
            });
        }
    }

    return newData;
}
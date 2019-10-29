const axios = require("axios");
const fs = require("fs");

URL = "https://api.worldofwarships.eu/wows/encyclopedia/ships/";
APPID = "d9e3cd11e2529af77d0317ff1597b2be";

SHIP_NATIONS = [
    "japan",
]

FIELDS = [
    "name",
    "images",
    "next_ships",
    "default_profile",
    "modules_tree",
]

SHIP_NATIONS.forEach(nation => {
    const ships = require(`../assets/nations/${nation}.json`).data;


    ships.forEach(ship => {
        console.log(`${nation} - ${ship.name}:`);
        axios.get(URL, {
            params: {
                application_id: APPID,
                ship_id: ship.id,
                fields: FIELDS.join(","),
                language: "en",
            }
        })
            .then(resp => {
                if (resp.data.status === "ok") {
                    console.log("\tOK");

                    var content = resp.data;
                    // content.data = transformShipData(content.data);
                    var contentStr = JSON.stringify(content, null, 2);
                    fs.writeFileSync(`./src/assets/ships/${ship.id}.json`, contentStr);
                } else if (resp.data.status === "error") {
                    console.log("\t", resp.data.error.message);
                }
            })
            .catch(err => {
                console.error("\t", err.errno);
            });
    })
});

function transformShipParams(data) {
    return {
        images: data.images,

        speed: data.default_profile.mobility.max_speed,
        rudderTime: data.default_profile.mobility.rudder_time,
    }
}
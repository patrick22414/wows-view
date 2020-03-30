const axios = require("axios");
const fs = require("fs");

URL = "https://api.worldofwarships.eu/wows/encyclopedia/ships/";
APPID = "d9e3cd11e2529af77d0317ff1597b2be";

NATIONS = [
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

NATIONS.forEach((nation) => {
  axios
    .get(URL, {
      params: {
        application_id: APPID,
        nation: nation,
        language: "en",
      },
    })
    .then((resp) => {
      console.log(`${nation}:`);

      if (resp.data.status === "ok") {
        console.log(resp.data.meta);

        var content = resp.data;
        content.data = transformNationData(content.data);

        fs.writeFileSync(`./assets/nations/${nation}.json`, JSON.stringify(content, null, 2));
      } else if (resp.data.status === "error") {
        console.log(resp.data.error.message);
      }
    })
    .catch((err) => {
      console.log(`${nation}:`);
      console.error(err.errno);
    });

  new Promise((r) => setTimeout(r, 100)).then();
});

function transformNationData(data) {
  const excluded_ships = ["STALINGRAD #2", "Brennus", "L'Effronté", "Alabama ST", "Giunio Bruto"];

  var new_data = [];

  for (const id in data) {
    const ship = data[id];
    if (ship.name.startsWith("[") || ship.name.endsWith(" B") || excluded_ships.some((name) => ship.name === name)) {
      continue;
    }

    new_data.push({
      id: id,
      id_str: ship.ship_id_str,
      name: ship.name,
      type: ship.type,
      tier: ship.tier,
      is_premium: ship.is_premium,
      is_special: ship.is_special,
      image: ship.images.small,
    });
  }

  return new_data;
}

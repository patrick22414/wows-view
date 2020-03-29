const axios = require("axios");
const fs = require("fs");

URL = "https://api.worldofwarships.eu/wows/encyclopedia/ships/";
APPID = "d9e3cd11e2529af77d0317ff1597b2be";

SHIP_NATIONS = [
    // "commonwealth",
    // "europe",
    // "france",
    // "germany",
    // "italy",
    // "japan",
    // "pan_america",
    // "pan_asia",
    // "uk",
    "usa",
    // "ussr",
]

SHIP_NATIONS.forEach(nation => {
    const ships = require(`../assets/nations/${nation}.json`).data;

    ships.forEach(ship => {
        axios.get(URL, {
            params: {
                application_id: APPID,
                ship_id: ship.id,
                language: "en",
            }
        })
            .then(resp => {
                console.log(`${nation} - ${ship.name}:`);
                if (resp.data.status === "ok") {
                    console.log("\tOK");

                    const content = transformRawData(resp.data.data[ship.id]);
                    const contentStr = JSON.stringify(content, null, 2);

                    fs.writeFileSync(`./assets/ships/${ship.id}.json`, contentStr);
                } else if (resp.data.status === "error") {
                    console.log("\t", resp.data.error.message);
                }
            })
            .catch(err => {
                console.error("\t", err.errno);
            });

        new Promise(r => setTimeout(r, 100)).then();
    })

    new Promise(r => setTimeout(r, 100)).then();
});

function transformRawData(data) {
    return {
        id: data.ship_id,
        name: data.name,
        type: data.type,
        tier: data.tier,
        description: data.description,
        price_gold: data.price_gold,
        price_credit: data.price_credit,
        params: transformDefaultProfile(data.default_profile),
        images: data.images,
    };
}

function transformDefaultProfile(profile) {
    return {
        health: profile.hull.health,

        artillery: profile.artillery ? {
            reload: profile.artillery.shot_delay,
            range: profile.artillery.distance,
            traverseTime: profile.artillery.rotation_time,
            shells: {
                he: profile.artillery.shells.HE ? {
                    damage: profile.artillery.shells.HE.damage,
                    velocity: profile.artillery.shells.HE.bullet_speed,
                    mass: profile.artillery.shells.HE.bullet_mass,
                    fireChance: profile.artillery.shells.HE.burn_probability,
                } : null,
                sap: profile.artillery.shells.SAP ? {
                    damage: profile.artillery.shells.SAP.damage,
                    velocity: profile.artillery.shells.SAP.bullet_speed,
                    mass: profile.artillery.shells.SAP.bullet_mass,
                } : null,
                ap: profile.artillery.shells.AP ? {
                    damage: profile.artillery.shells.AP.damage,
                    velocity: profile.artillery.shells.AP.bullet_speed,
                    mass: profile.artillery.shells.AP.bullet_mass,
                } : null,
            }
        } : null,

        torpedoes: profile.torpedoes ? {
            range: profile.torpedoes.distance,
            reload: profile.torpedoes.reload_time,
            visibility: profile.torpedoes.visibility_dist,
        } : null,

        concealment: profile.concealment.detect_distance_by_ship,
        airConcealment: profile.concealment.detect_distance_by_plane,

        speed: profile.mobility.max_speed,
        rudderTime: profile.mobility.rudder_time,
        turnRadius: profile.mobility.turning_radius,
    }
}
const axios = require("axios");
const fs = require("fs");

URL = "https://api.worldofwarships.eu/wows/encyclopedia/info/"
APPID = "d9e3cd11e2529af77d0317ff1597b2be";

axios.get(URL, {
    params: {
        application_id: APPID,
        language: "en",
    }
})
    .then(
        resp => {
            if (resp.data.status === "ok") {
                const json = JSON.stringify(resp.data.data, null, 2);
                fs.writeFileSync("./assets/encyclopedia.json", json);
            } else if (resp.data.status === "error") {
                console.log(resp.data.error.message);
            }
        }
    )
    .catch(
        err => {
            console.error(err.errno);
        }
    );

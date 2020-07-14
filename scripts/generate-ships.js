const fs = require("fs");
const path = require("path");

const game_params = "/Users/songyi/Documents/wows-params/GameParams";
const ship_files = fs.readdirSync(path.join(game_params, "Ship"));
const projectile_files = fs.readdirSync(path.join(game_params, "Projectile"));

const nations = ["usa"];

const Artillery = {
  id,
  id_str,
  name,
  range,
  reload,
  diameter,
  traverse_180,
  he_shell: {
    alpha,
    velocity,
    air_drag,
    projectile_mass,
    penetration,
    fire_chance,
  },
  ap_shell: {
    alpha,
    velocity,
    air_drag,
    projectile_mass,
    ricochet_start,
    ricochet_always,
    overmatch,
  },
  sap_shell: {
    alpha,
    velocity,
    air_drag,
    projectile_mass,
    ricochet_start,
    ricochet_always,
  },
};

const Engine = {
  id,
  id_str,
  name,
  forward_time,
  backward_time,
};

const Hull = {
  id,
  id_str,
  name,
  health,
  concealment: {
    sea,
    air,
    sea_with_fire,
    air_with_fire,
    sea_firing_in_smoke,
    air_firing_in_smoke,
  },
  mobility: {
    speed,
    rudder_time,
    turning_radius,
    power_mass_ratio,
  },
};

const Suo = {
  id,
  id_str,
  name,
  range_coeff,
  sigma_coeff,
};

const Torpedoes = {
  id,
  id_str,
  name,
  range,
  reload,
  diameter,
  traverse_180,
  alpha,
  speed,
  concealment,
};

for (const nation of nations) {
  const ships_of_nation = require(`../src/assets/nations/${nation}.json`).data;

  for (const ship of ships_of_nation) {
    console.log(`${ship.name} ${ship.id_str}`);

    const ship_file = ship_files.find((filename) => filename.startsWith(ship.id_str));
    console.log(ship_file);

    const ship_params = require(path.join(game_params, "Ship", ship_file));

    console.log(ship_params.typeinfo);
    const ship_upgrade_info = ship_params.ShipUpgradeInfo;

    for (const module_id in ship.modules_tree) {
      const module = ship.modules_tree[module_id];

      const ship_upgrade_info_key = Object.keys(ship_upgrade_info).find((key) => key.startsWith(module.module_id_str));
      const ship_upgrade = ship_upgrade_info[ship_upgrade_info_key];
      console.log(`${ship_upgrade_info_key} ${ship_upgrade.ucType} ${module.name}`);

      switch (ship_upgrade.ucType) {
        case "_Artillery":
          const new_module = Object.create(Artillery);

          break;

        default:
          break;
      }
    }
    console.log();
  }
}

function Artillery2(x, y) {
  this.x = x;
  this.y = y;
}

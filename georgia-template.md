* id (ship_id)
* name (name)
* type (type)
* tier (tier)
* nation (nation)
* description (description)
* is premium (is_premium)
* is special (is_special)

# price
gold (price_gold)
credit (price_credit)

# images
* small
* large
* medium
* contour

# params (...default_profile)
## hull
* health (hull.health)
* concealment (concealment.detect_distance_by_ship) km
* air concealment (concealment.detect_distance_by_plane) km

## mobility
* max speed (mobility.max_speed) kn
* rudder time (mobility.rudder_time) s
* turning radius (mobility.turning_radius) m


## main armament ? (...artillery)
- guns []
    * guns x barrels name
* range (artillery.distance) km
* reload (artillery.shot_delay) s
* traverse (artillery.rotation_time) s
- he shell ?
    * damage ()
    * velocity () m/s
    * fire chance () %
- ap shell ?
    * damage ()
    * velocity () m/s
- sap shell ?
    * damage ()
    * velocity () m/s

- secondary armament [] ?
    * shell () type
    * range () km
    * reload () s
    * damage ()
    * velocity () m/s
    * fire chance () % ?

- torpedoes ?
    - torpedoes []
        * guns x barrels name
    * range () km
    * reload () s
    * damage ()
    * speed () kn
    * concealment () km
    * traverse () s

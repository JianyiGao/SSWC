// Fast html framework
var express = require('express');
var app = express();

// For receiving JSON in posts
var bodyParser = require('body-parser');
var jsonParser = bodyParser.json();
var urlencodedParser = bodyParser.urlencoded({ extended: false });

// For the database
var sqlite3 = require('sqlite3'); //.verbose();
var db = new sqlite3.Database('./db/flowers.db');

// Add restful controller
require('./flowerController')(app, db, jsonParser);
require('./sightings_Californiaflannelbush_Controller')(app, db, jsonParser);
require('./sightings_Ithurielsspear_Controller')(app, db, jsonParser);
require('./sightings_Primrosemonkeyflower_Controller')(app, db, jsonParser);
require('./sightings_Sheltonsviolet_Controller')(app, db, jsonParser);
require('./sightings_ShowyJacobsladder_Controller')(app, db, jsonParser);
require('./sightings_Douglasdustymaiden_Controller')(app, db, jsonParser);
require('./sightings_Paleowlsclover_Controller')(app, db, jsonParser);
require('./sightings_Deathcamas_Controller')(app, db, jsonParser);
require('./sightings_Broad-seededrock-cress_Controller')(app, db, jsonParser);
require('./sightings_One-seededpussypaws_Controller')(app, db, jsonParser);
require('./sightings_Varied-leavedjewelflower_Controller')(app, db, jsonParser);
require('./sightings_Leopardlily_Controller')(app, db, jsonParser);
require('./sightings_Torreyslomatium_Controller')(app, db, jsonParser);
require('./sightings_Alpinepenstemon_Controller')(app, db, jsonParser);
require('./sightings_Woodlandstar_Controller')(app, db, jsonParser);
require('./sightings_Rangersbuttons_Controller')(app, db, jsonParser);
require('./sightings_Doves-footgeranium_Controller')(app, db, jsonParser);
require('./sightings_Globegilia_Controller')(app, db, jsonParser);
require('./sightings_Canyondudleya_Controller')(app, db, jsonParser);
require('./sightings_LargefalseSolomonsseal_Controller')(app, db, jsonParser);
require('./sightings_Hartwegswildginger_Controller')(app, db, jsonParser);
require('./sightings_Alpinelewisia_Controller')(app, db, jsonParser);
require('./sightings_Cowparsnip_Controller')(app, db, jsonParser);
require('./sightings_Bridgesgilia_Controller')(app, db, jsonParser);
require('./sightings_Alpinesheepsorrel_Controller')(app, db, jsonParser);
require('./sightings_SierraNevadarushl_Controller')(app, db, jsonParser);
require('./sightings_Mudsedge_Controller')(app, db, jsonParser);
require('./sightings_Draperia_Controller')(app, db, jsonParser);
require('./sightings_Showymilkweed_Controller')(app, db, jsonParser);
require('./sightings_Butterandeggs_Controller')(app, db, jsonParser);
require('./sightings_Sierrastonecrop_Controller')(app, db, jsonParser);
require('./sightings_Hoarybuckwheat_Controller')(app, db, jsonParser);
require('./sightings_Sierraangelica_Controller')(app, db, jsonParser);
require('./sightings_Snowplant_Controller')(app, db, jsonParser);
require('./sightings_Sierradaisy_Controller')(app, db, jsonParser);
require('./sightings_Alpinecolumbine_Controller')(app, db, jsonParser);
require('./sightings_Kingssandwort_Controller')(app, db, jsonParser);
require('./sightings_Woollysunflower_Controller')(app, db, jsonParser);
require('./sightings_One-sidedwintergreen_Controller')(app, db, jsonParser);
require('./sightings_Redmountainheather_Controller')(app, db, jsonParser);
require('./sightings_Condensedphlox_Controller')(app, db, jsonParser);
require('./sightings_Diamondclarkia_Controller')(app, db, jsonParser);
require('./sightings_Large-leavedlupine_Controller')(app, db, jsonParser);
require('./sightings_Purplepenstemon_Controller')(app, db, jsonParser);
require('./sightings_Fireweed_Controller')(app, db, jsonParser);
require('./sightings_Oakviolet_Controller')(app, db, jsonParser);
require('./sightings_Watergroundsel_Controller')(app, db, jsonParser);
require('./sightings_Tinkerspenny_Controller')(app, db, jsonParser);
require('./sightings_Yellow-and-whitemonkeyflower_Controller')(app, db, jsonParser);
require('./sightings_Lovage_Controller')(app, db, jsonParser);



// Serve static files
app.use(express.static('root'));

app.listen(3000);

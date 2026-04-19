const fs = require('fs');

function linkMoves(filePath, parentMap) {
  const data = JSON.parse(fs.readFileSync(filePath, 'utf8'));
  
  data.movesList.forEach(move => {
    // If this move is in our map as a child, set its parentMoveId
    if (parentMap[move.id]) {
      move.parentMoveId = parentMap[move.id];
    }
  });

  fs.writeFileSync(filePath, JSON.stringify(data, null, 2));
  console.log(`Updated ${filePath}`);
}

// C. Viper links
const viperLinks = {
  'tracer_combination': 'thunder_dash',
  'knuckled_pursuit': 'burning_kick',
  'double_burn': 'burning_kick',
};

// Alex links
const alexLinks = {
  'slashing_elbow': 'prowler_stance',
  'palm_jab': 'prowler_stance',
  'shoulder_launcher': 'prowler_stance',
  'heavy_lariat': 'prowler_stance',
  'tactical_hop': 'prowler_stance',
  'air_stampede': 'prowler_stance',
  'sweep_combination': 'prowler_stance',
  'hyper_takedown': 'prowler_stance',
  'dangerous_armbar': 'prowler_stance'
};

try {
  linkMoves('public/data/street-fighter-6/c-viper.json', viperLinks);
} catch(e) { console.error('Failed on c-viper', e); }

try {
  linkMoves('public/data/street-fighter-6/alex.json', alexLinks);
} catch(e) { console.error('Failed on alex', e); }

console.log('Follow-ups linked.');

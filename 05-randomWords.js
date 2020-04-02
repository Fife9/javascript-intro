var adjective = ["Lover of", "Hater of", "Stan of", "Bandmember of"];
var band = ["drake", "fleetwood mac", "velvet underground", "gorillaz", "playboi carti", "alanis morissette"]

var randomAdjective = Math.floor(Math.random() * adjective.length);
var randomBand = Math.floor(Math.random() * band.length);

console.log(adjective[randomAdjective], band[randomBand]);

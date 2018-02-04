var seeds = 0;
var seedHarvesters = 0;
var seedGrinders = 0;
var pigeons = 0;
var pigeonDifference = 0;
var persistantPigeons = 0;
var interval = 1;
var fatPigeons = 0;
var oldFatPigeons = 0;
var fatPigeonsRevealed = 0;
var oldFatPigeonsRevealed = 0;
var flour = 0;
var bread = 0;
var breadRevealed = 0;
var loadedGameState = 0;


function setup()
{
    Load();
    
    UpdateLabels("seeds");
    UpdateLabels("flour");
    UpdateLabels("days"); 
    
    if (loadedGameState == 0)
    {
        Hide("seedsButton");
        Hide("breadButton");
        document.getElementById("story").innerHTML = "You have no home, no money, no shoes. </br> You sit on a park bench looking at your one possession, a bag of seeds.";
    }
    else if (loadedGameState == 1)
    {
        UpdateLabels("pigeons");
        if(bread>=1){breadRevealed = 1; UpdateLabels("bread");}
        if(fatPigeons>=1){fatPigeonsRevealed = 1; UpdateLabels("pigeons");}
        if(oldFatPigeons>=1){oldFatPigeonsRevealed = 1; UpdateLabels("pigeons");}
        var nextGCost = Math.floor(10 * Math.pow(1.1,seedGrinders));                       
        document.getElementById('grinderCost').innerHTML = nextGCost; 
        var nextHCost = Math.floor(10 * Math.pow(1.1,seedHarvesters));                       
        document.getElementById("harvesterCost").innerHTML = nextHCost;
        document.getElementById("story").innerHTML = "You return to your park bench."
    }
}

function seedClick (number)
{
    seeds = seeds+number;
    UpdateLabels("seeds");
}
function flourClick (number)
{
    flour = flour+number;
    UpdateLabels("flour");
}

function buySeedHarvester()
{
    var harvesterCost = Math.floor(10 * Math.pow(1.1,seedHarvesters));         //works out the cost of this cursor
    if(seeds >= harvesterCost){                                                 //checks that the player can afford the cursor
        seedHarvesters = seedHarvesters + 1;                                   //increases number of cursors
    	seeds = seeds - harvesterCost;                                           //removes the cookies spent
        UpdateLabels("seeds");                                                //updates the number of cookies for the user
    }
    var nextCost = Math.floor(10 * Math.pow(1.1,seedHarvesters));                       //works out the cost of the next cursor
    document.getElementById('harvesterCost').innerHTML = nextCost;               //updates the cursor cost for the user
}

function buySeedGrinders()
{
    var grinderCost = Math.floor(10 * Math.pow(1.1,seedGrinders));         //works out the cost of this cursor
    if(flour >= grinderCost){                                                 //checks that the player can afford the cursor
        seedGrinders = seedGrinders + 1;                                   //increases number of cursors
    	flour = flour - grinderCost;                                              //removes the cookies spent
        UpdateLabels("flour");                                                //updates the number of cookies for the user
    }
    var nextCost = Math.floor(10 * Math.pow(1.1,seedGrinders));                       //works out the cost of the next cursor
    document.getElementById('grinderCost').innerHTML = nextCost;               //updates the cursor cost for the user
}

function getRandomInt(max) 
{
  return Math.floor(Math.random() * Math.floor(max));
}

function throwSeeds()
{
    var previousPigeons = pigeons;
    
    var pigeonHunger = getRandomInt(5) + 1;
    pigeons = Math.floor(seeds/5);
    seeds = 0;
    if(interval == 1)
    {
        persistantPigeons = pigeons;
    }
    pigeonDifference = pigeons - persistantPigeons;
    if (seeds > pigeonDifference)
    {
        persistantPigeons = pigeons;
    }
    
    if (bread >= fatPigeons)
    {
        bread = bread - fatPigeons;
    }
    else
    {
        fatPigeons = bread;
        bread = 0;
    }
    
    interval = interval + 1;
    if (interval == 8)
    {        
        oldFatPigeons = oldFatPigeons + fatPigeons;
        if (oldFatPigeons >= 1){oldFatPigeonsRevealed = 1;}
        fatPigeons = persistantPigeons;
        interval = 1;
        if (fatPigeons >= 1){fatPigeonsRevealed = 1;}
    }
    
    UpdateLabels("seeds");
    UpdateLabels("bread");
    UpdateLabels("days"); 
    UpdateLabels("pigeons");
    Hide("story");
       
}

function groundSeedsIntoFlour ()
{
    flour = flour + seeds/10;
    seeds = 0;
    
    UpdateLabels("seeds");
    UpdateLabels("flour");
}

function bakeBread ()
{
    if (flour >= 100)
    {
        bread = bread + 1;
        flour = flour - 100;
        if (bread >= 1){breadRevealed = 1;}
        
        UpdateLabels("flour");
        UpdateLabels("bread");
    }
}

function Reveal(name) 
{
    var x = document.getElementById(name);
    if (x.style.display === "none") {
        x.style.display = "block";
    }
}
function Hide(name) 
{
    var x = document.getElementById(name);
    x.style.display = "none";
}

function UpdateLabels (type)
{
    if (type == "days"){
        document.getElementById("interval").innerHTML = interval;}
    
    if (type == "seeds"){
        document.getElementById("seeds").innerHTML = seeds;
        document.getElementById('seedHarvesters').innerHTML = seedHarvesters;}
    
    if (type == "flour"){
        flour = Math.round(flour*10)/10; //Round the flour to 1 dp.
        document.getElementById("flour").innerHTML = flour;
        document.getElementById('seedGrinders').innerHTML = seedGrinders;}
    
    if (type == "bread"){
        if (breadRevealed == 1){
            document.getElementById("bread").innerHTML = bread + " loaves";}
    }
    
    if (type == "pigeons"){
        document.getElementById("pigeons").innerHTML = pigeons + " pigeons currently feeding";
        if (fatPigeonsRevealed == 1){
            document.getElementById("fatPigeons").innerHTML = fatPigeons + " fat pigeons looking for bread";}
        if (oldFatPigeonsRevealed == 1){
            document.getElementById("oldFatPigeons").innerHTML = oldFatPigeons + " old fat pigeons";}
    }
}

window.setInterval(function()
{
    seedClick(seedHarvesters);
    flourClick(seedGrinders);
    
    if (flour >= 100)
    {
        Reveal("breadButton");
    }
    
    if (seeds >= 50)
    {
        Reveal("seedsButton");
    }
    
    Save();
    
}, 1000);

function Save ()
{
    var save = {seeds: seeds, seedHarvesters: seedHarvesters, flour: flour,
            seedGrinders: seedGrinders, interval: interval, bread: bread,
            pigeons: pigeons, fatPigeons:fatPigeons, oldFatPigeons: oldFatPigeons}
    
    localStorage.setItem("save",JSON.stringify(save));
}

function Load ()
{
    var savegame = JSON.parse(localStorage.getItem("save"));
    seeds = savegame.seeds;
    seedHarvesters = savegame.seedHarvesters;
    flour = savegame.flour;
    seedGrinders = savegame.seedGrinders;
    interval = savegame.interval;
    bread = savegame.bread;
    pigeons = savegame.pigeons;
    fatPigeons = savegame.fatPigeons;
    oldFatPigeons = savegame.oldFatPigeons;
    if (typeof savegame.cookies !== "undefined") cookies = savegame.cookies;
    if (pigeons >= 1){loadedGameState = 1}
}

function DeleteSave()
{
    localStorage.removeItem("save");
    Load();
}

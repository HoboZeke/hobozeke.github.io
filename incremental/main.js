var seeds = 0;
var seedHarvesters = 0;
var pigeons = 0;
var pigeonDifference = 0;
var persistantPigeons = 0;
var interval = 1;
var fatPigeons = 0;
var flour = 0;
var bread = 0;


function seedClick (number)
{
    seeds = seeds+number;
    document.getElementById("seeds").innerHTML = seeds;
}

function buySeedHarvester()
{
    var harvesterCost = Math.floor(10 * Math.pow(1.1,seedHarvesters));         //works out the cost of this cursor
    if(seeds >= harvesterCost){                                                 //checks that the player can afford the cursor
        seedHarvesters = seedHarvesters + 1;                                   //increases number of cursors
    	seeds = seeds - harvesterCost;                                           //removes the cookies spent
        document.getElementById('seedHarvesters').innerHTML = seedHarvesters;  //updates the number of cursors for the user
        document.getElementById('seeds').innerHTML = seeds;                       //updates the number of cookies for the user
    }
    var nextCost = Math.floor(10 * Math.pow(1.1,seedHarvesters));                       //works out the cost of the next cursor
    document.getElementById('harvesterCost').innerHTML = nextCost;               //updates the cursor cost for the user
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
    interval = interval + 1;
    if (interval == 8)
    {
        fatPigeons = fatPigeons + persistantPigeons;
        document.getElementById("fatPigeons").innerHTML = fatPigeons + " fat pigeons";
        interval = 1;
    }
    
    document.getElementById("pigeons").innerHTML = pigeons + " pigeons currently feeding";
    document.getElementById("seeds").innerHTML = seeds;
    document.getElementById("interval").innerHTML = interval; 
}

function groundSeedsIntoFlour ()
{
    flour = flour + seeds/10;
    flour = Math.round(flour*10)/10; //Round the flour to 1 dp.
    seeds = 0;
    
    document.getElementById("seeds").innerHTML = seeds;
    document.getElementById("flour").innerHTML = flour;
}

function bakeBread ()
{
    if (flour >= 100)
    {
        bread = bread + 1;
        flour = flour - 100;
        
        document.getElementById("flour").innerHTML = flour;
        document.getElementById("bread").innerHTML = bread + " loaves";
    }
}

window.setInterval(function()
{
    seedClick(seedHarvesters);
}, 1000);

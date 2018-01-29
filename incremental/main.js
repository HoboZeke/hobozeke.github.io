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
       
}

function groundSeedsIntoFlour ()
{
    flour = flour + seeds/10;
    flour = Math.round(flour*10)/10; //Round the flour to 1 dp.
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

function toggleVisibilty(name) 
{
    var x = document.getElementById(name);
    if (x.style.display === "none") {
        x.style.display = "block";
    } else {
        x.style.display = "none";
    }
}

function UpdateLabels (type)
{
    if (type == "days")
    {
        document.getElementById("interval").innerHTML = interval;
    }
    
    if (type == "seeds")
    {
        document.getElementById("seeds").innerHTML = seeds;
        document.getElementById('seedHarvesters').innerHTML = seedHarvesters;
    }
    
    if (type == "flour")
    {
        document.getElementById("flour").innerHTML = flour;
        document.getElementById('seedGrinders').innerHTML = seedGrinders; 
    }
    
    if (type == "bread")
    {
        if (breadRevealed == 1)
        {
            document.getElementById("bread").innerHTML = bread + " loaves";
        }
    }
    
    if (type == "pigeons")
    {
        document.getElementById("pigeons").innerHTML = pigeons + " pigeons currently feeding";
        if (fatPigeonsRevealed == 1)
        {
            document.getElementById("fatPigeons").innerHTML = fatPigeons + " fat pigeons looking for bread";
        }
        if (oldFatPigeonsRevealed == 1)
        {
            document.getElementById("oldFatPigeons").innerHTML = oldFatPigeons + " old fat pigeons";
        }
    }
}

window.setInterval(function()
{
    seedClick(seedHarvesters);
    flourClick(seedGrinders);
}, 1000);

var seeds = 0;
var seedHarvesters = 0;
var pigeons = 0;

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
    };
    var nextCost = Math.floor(10 * Math.pow(1.1,seedHarvesters));                       //works out the cost of the next cursor
    document.getElementById('harvesterCost').innerHTML = nextCost;               //updates the cursor cost for the user
};

function throwSeeds()
{
    var pigeonHunger = Math.floor(Math.random() * Math.floor(5))
    pigeons = pigeonHunger/seeds;
    seeds = 0;
    
    document.getElementById("pigeons").innerHTML = pigeons;
    document.getElementById("seeds").innerHTML = seeds;
}

window.setInterval(function()
{
    seedClick(seedHarvesters);
}, 1000);

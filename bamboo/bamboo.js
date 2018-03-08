//Bamboo Growth Simulator
var bambooLength = 0;
var maxBambooHeight = 10;
var maxReached = 0;
var intervalTimer = 5000;
var bambooShootBase = "_I_";
var noBambooShootBase = "___";
var bambooShoot = "&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;I<br/>";
var bambooShootLeafLeft = "&nbsp;<>I<br/>";
var bambooShootLeafRight = "&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;I<><br/>";
var bambooShootLeafBoth = "&nbsp;<>I<><br/>";
var noBambooShoot = "&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<br/>";
var shootsCollected = 0;
var leavesCollected = 0;
var leafCount = 0;
var leafChance = 250; //This is measured against 1000, so basically % * 10
var doubleLeafChance = 10;

function GrowBamboo()
{
	if (bambooLength < maxBambooHeight)
	{
		bambooLength++;   //increse the length of bamboo
	}
	console.log("Bamboo Length:"+bambooLength);
	
	var index = bambooLength;
	var name = "bamboo" + String(index);
	var chance = GetRandomInt(1000);
	
	console.log("Chance:"+chance);
		
	if (bambooLength<=1) //A catch for the first shoot, to allow proper rendering of plant pot.
	{
		document.getElementById(name).innerHTML = bambooShootBase;
	}
	else if (bambooLength == maxBambooHeight)
	{
		if (maxReached >= 1)
		{
			console.log("max length reached");
		}
		else
		{
			maxReached = 1;
		}
	}
	else
	{
		if(leafChance >= chance)
		{
			if(doubleLeafChance >= chance)
			{
				document.getElementById(name).innerHTML = bambooShootLeafBoth;
				leafCount = leafCount + 2;
			}
			else if(leafChance/2 >= chance)
			{
				document.getElementById(name).innerHTML = bambooShootLeafRight;
				leafCount = leafCount + 1;
			}
			else
			{
				document.getElementById(name).innerHTML = bambooShootLeafLeft;
				leafCount = leafCount + 1;
			}
		}
		else
		{
			document.getElementById(name).innerHTML = bambooShoot;
		}
	}
}

function Harvest()
{
	for (i = 0; i < bambooLength; i++)  //loop through all the shoots
	{
		var index = i+1;
		var name = "bamboo" + String(index);
		
		if (i<=0) //A catch for the first shoot, to allow proper rendering of plant pot.
		{
			document.getElementById(name).innerHTML = noBambooShootBase;
		}
		else
		{
			document.getElementById(name).innerHTML = noBambooShoot;
		}
	}
	
	shootsCollected = shootsCollected + bambooLength;
	document.getElementById("shootsCollected").innerHTML = shootsCollected;
	leavesCollected = leavesCollected + leafCount;
	document.getElementById("leavesCollected").innerHTML = leavesCollected;
	bambooLength = 0;
	leafCount = 0;
	console.log("Bamboo Length:" +bambooLength);
}
	
function IncreaseBambooSize ()
{
	if (maxBambooHeight >= 20)
	{
		return;
	}
	else
	{
		maxBambooHeight++;
		maxReached = 0;
		var newName = "bamboo" + String(maxBambooHeight);
		Reveal(newName);
	}
}

function GetRandomInt(max) 
{
	return Math.floor(Math.random() * Math.floor(max));
}
function Reveal(name) 
{
	var x = document.getElementById(name);
	if (x.style.display === "none") {
		x.style.display = "inline";
	}
}
function Hide(name) 
{
	var x = document.getElementById(name);
	x.style.display = "none";
}

window.setInterval(function()
	{
		GrowBamboo();
	}, intervalTimer);

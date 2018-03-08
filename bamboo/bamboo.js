//Bamboo Growth Simulator
var bambooLength = 0;
var maxBambooHeight = 10;
var maxReached = 0;
var intervalTimer = 5000;
var bambooShootBase = "_I_";
var noBambooShootBase = "___";
var bambooShoot = "&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;I<br/>";
var bambooShootLeafLeft = "&#8239;&#8239;<>I<br/>";
var bambooShootLeafRight = "&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;I<><br/>";
var bambooShootLeafBoth = "&#8239;&#8239;<>I<><br/>";
var noBambooShoot = "&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<br/>";
var shootsCollected = 0;
var leavesCollected = 0;
var leafCount = 0;
var leafChance = 250; //This is measured against 1000, so basically % * 10
var doubleLeafChance = 10;
var bambooSizeCost = 10;
var growthSpeedCost = 25;
var leafChanceCost = 20;
var rankCost = 200;
var bambooRank = 1;
var bambooShootBaseR2 = "_II";
var bambooShootR2 = "&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;II<br/>";
var bambooShootLeafLeftR2 = "&#8239;&#8239;<>II<br/>";
var bambooShootLeafRightR2 = "&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;II<><br/>";
var bambooShootLeafBothR2 = "&#8239;&#8239;<>II<><br/>";
var bambooShootBaseR3 = "III";
var bambooShootR3 = "&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;III<br/>";
var bambooShootLeafLeftR3 = "<>III<br/>";
var bambooShootLeafRightR3 = "&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;III<><br/>";
var bambooShootLeafBothR3 = "<>III<><br/>";

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
		if(bambooRank==1){document.getElementById(name).innerHTML = bambooShootBase;}
		else if(bambooRank==2){document.getElementById(name).innerHTML = bambooShootBaseR2;}
		else if(bambooRank==3){document.getElementById(name).innerHTML = bambooShootBaseR3;}
		
	}
	else if (maxReached >= 1)
	{
		console.log("max length reached:"+maxBambooHeight);
	}
	else
	{
		if(leafChance >= chance)
		{
			if(doubleLeafChance >= chance)
			{
				if(bambooRank==1){document.getElementById(name).innerHTML = bambooShootLeafBoth;}
				else if(bambooRank==2){document.getElementById(name).innerHTML = bambooShootLeafBothR2;}
				else if(bambooRank==3){document.getElementById(name).innerHTML = bambooShootLeafBothR3;}
				leafCount = leafCount + 2;
			}
			else if(leafChance/2 >= chance)
			{
				if(bambooRank==1){document.getElementById(name).innerHTML = bambooShootLeafRight;}
				else if(bambooRank==2){document.getElementById(name).innerHTML = bambooShootLeafRightR2;}
				else if(bambooRank==3){document.getElementById(name).innerHTML = bambooShootLeafRightR3;}
				leafCount = leafCount + 1;
			}
			else
			{
				if(bambooRank==1){document.getElementById(name).innerHTML = bambooShootLeafLeft;}
				else if(bambooRank==2){document.getElementById(name).innerHTML = bambooShootLeafLeftR2;}
				else if(bambooRank==3){document.getElementById(name).innerHTML = bambooShootLeafLeftR3;}
				leafCount = leafCount + 1;
			}
		}
		else
		{
			if(bambooRank==1){document.getElementById(name).innerHTML = bambooShoot;}
			else if(bambooRank==2){document.getElementById(name).innerHTML = bambooShootR2;}
			else if(bambooRank==3){document.getElementById(name).innerHTML = bambooShootR3;}
		}
		
		if (bambooLength == maxBambooHeight)
		{
			maxReached = 1;
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
	
	shootsCollected = shootsCollected + (bambooLength*bambooRank);
	document.getElementById("shootsCollected").innerHTML = shootsCollected;
	leavesCollected = leavesCollected + leafCount;
	document.getElementById("leavesCollected").innerHTML = leavesCollected;
	bambooLength = 0;
	leafCount = 0;
	maxReached = 0;
	console.log("Bamboo Length:" +bambooLength);
}
	
function IncreaseBambooSize ()
{
	if (maxBambooHeight >= 20 || shootsCollected < bambooSizeCost)
	{
		return;
	}
	else
	{
		maxBambooHeight++;
		maxReached = 0;
		shootsCollected = shootsCollected - bambooSizeCost;
		bambooSizeCost = bambooSizeCost * 1.5;
		document.getElementById("increaseSizeCost").innerHTML = bambooSizeCost;
		document.getElementById("shootsCollected").innerHTML = shootsCollected;
		var newName = "bamboo" + String(maxBambooHeight);
		Reveal(newName);
	}
}

function IncreaseLeafChance ()
{
	if (shootsCollected < leafChanceCost)
	{
		return;
	}
	else
	{
		shootsCollected = shootsCollected - leafChanceCost;
		leafChance = leafChance + 50;
		doubleLeafChance = doubleLeafChance + 10;
		leafChanceCost = leafChanceCost * 1.5;
		document.getElementById("increaseLeafChanceCost").innerHTML = leafChanceCost;
		document.getElementById("shootsCollected").innerHTML = shootsCollected;
	}
}

function IncreaseGrowthSpeed ()
{
	if (shootsCollected < growthSpeedCost)
	{
		return;
	}
	else
	{
		shootsCollected = shootsCollected - growthSpeedCost;
		if(intervalTimer > 100){intervalTimer = intervalTimer - 100;}
		growthSpeedCost = growthSpeedCost * 1.5;
		document.getElementById("increaseGrowthSpeedCost").innerHTML = growthSpeedCost;
		document.getElementById("shootsCollected").innerHTML = shootsCollected;
	}
}

function IncreaseRank ()
{
	if (shootsCollected < rankCost)
	{
		return;
	}
	else
	{
		shootsCollected = shootsCollected - rankCost;
		if(bambooRank < 3){bambooRank++;}
		rankCost = rankCost * 1.5;
		document.getElementById("increaseRankCost").innerHTML = rankCost;
		document.getElementById("shootsCollected").innerHTML = shootsCollected;
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

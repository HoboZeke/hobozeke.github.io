//Bamboo Growth Simulator
var bambooLength = 0;
var bambooLength2 = 0;
var bambooLength3 = 0;
var bambooLength4 = 0;
var bambooLength5 = 0;
var maxBambooHeight = 10;
var maxBambooHeight2 = 10;
var maxBambooHeight3 = 10;
var maxBambooHeight4 = 10;
var maxBambooHeight5 = 10;
var maxReached = 0;
var maxReached2 = 0;
var maxReached3 = 0;
var maxReached4 = 0;
var maxReached5 = 0;
var intervalTimer = 5000;
var intervalTimer2 = 5000;
var intervalTimer3 = 5000;
var intervalTimer4 = 5000;
var intervalTimer5 = 5000;
var leafCount = 0;
var leafCount2 = 0;
var leafCount3 = 0;
var leafCount4 = 0;
var leafCount5 = 0;
var leafChance = 250; //This is measured against 1000, so basically % * 10
var leafChance2 = 250; //This is measured against 1000, so basically % * 10
var leafChance3 = 250; //This is measured against 1000, so basically % * 10
var leafChance4 = 250; //This is measured against 1000, so basically % * 10
var leafChance5 = 250; //This is measured against 1000, so basically % * 10
var doubleLeafChance = 10;
var doubleLeafChance2 = 10;
var doubleLeafChance3 = 10;
var doubleLeafChance4 = 10;
var doubleLeafChance5 = 10;
var bambooSizeCost = 5;
var bambooSizeCost2 = 10;
var bambooSizeCost3 = 15;
var bambooSizeCost4 = 20;
var bambooSizeCost5 = 25;
var growthSpeedCost = 25;
var growthSpeedCost2 = 50;
var growthSpeedCost3 = 75;
var growthSpeedCost4 = 100;
var growthSpeedCost5 = 125;
var leafChanceCost = 20;
var leafChanceCost2 = 40;
var leafChanceCost3 = 60;
var leafChanceCost4 = 80;
var leafChanceCost5 = 100;
var rankCost = 200;
var rankCost2 = 400;
var rankCost3 = 600;
var rankCost4 = 800;
var rankCost5 = 1000;
var bambooRank = 1;
var bambooRank2 = 1;
var bambooRank3 = 1;
var bambooRank4 = 1;
var bambooRank5 = 1;

//Global costs
var plantCost = 100;
var plantCount = 1;
var upgradeCount = 0;
var leafUpgradeCost = 10;
var growthUpgradeCost = 25;
var rankUpgradeCost = 50;

//Global Resources
var shootsCollected = 0;
var leavesCollected = 0;

//Graphics
var bambooShootBase = "_I_";
var noBambooShootBase = "___";
var bambooShoot = "&#8239;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;I<br/>";
var bambooShootLeafLeft = "&#8239;&#8239;&#8239;<>I<br/>";
var bambooShootLeafRight = "&#8239;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;I<><br/>";
var bambooShootLeafBoth = "&#8239;&#8239;&#8239;<>I<><br/>";
var noBambooShoot = "&#8239;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<br/>";
var bambooShootBaseR2 = "_II";
var bambooShootR2 = "&#8239;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;II<br/>";
var bambooShootLeafLeftR2 = "&#8239;&#8239;&#8239;<>II<br/>";
var bambooShootLeafRightR2 = "&#8239;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;II<><br/>";
var bambooShootLeafBothR2 = "&#8239;&#8239;&#8239;<>II<><br/>";
var bambooShootBaseR3 = "III";
var bambooShootR3 = "&#8239;&nbsp;&nbsp;&nbsp;&nbsp;III<br/>";
var bambooShootLeafLeftR3 = "<>III<br/>";
var bambooShootLeafLeftR3v2 = "&#8239;&#8239;&#8239;<>II<br/>";
var bambooShootLeafRightR3 = "&#8239;&nbsp;&nbsp;&nbsp;&nbsp;III<><br/>";
var bambooShootLeafRightR3v2 = "&#8239;&nbsp;&nbsp;&nbsp;&nbsp;II<><br/>";
var bambooShootLeafBothR3 = "<>III<><br/>";

function OnLoad()
{
	Load();
	
	FirstTimer();
	SecondTimer();
	ThirdTimer();
	FourthTimer();
	FifthTimer();
	
	//Cycle through the plants, revealing all that the player has bought
	for(i=0; i<plantCount; i++)
	{
		var newPlant = "plant" + String(i+1);
		Reveal(newPlant);
	}
	
	//Update the upgrades with that which is already been bought
	if(upgradeCount == 1){
		Reveal("leafSection");
		Hide ("leafUpgrade");
	} else if (upgradeCount == 2){
		Reveal("growthSection");
		Hide ("growthUpgrade");
	} else if (upgradeCount == 4){
		Reveal("rankSection");
		Hide ("rankUpgrade");
	} else if (upgradeCount == 3){
		Reveal("leafSection");
		Hide ("leafUpgrade");
		Reveal("growthSection");
		Hide ("growthUpgrade");
	} else if (upgradeCount == 5){
		Reveal("leafSection");
		Hide ("leafUpgrade");
		Reveal("rankSection");
		Hide ("rankUpgrade");
	} else if (upgradeCount == 6){
		Reveal("growthSection");
		Hide ("growthUpgrade");
		Reveal("rankSection");
		Hide ("rankUpgrade");
	} else if (upgradeCount == 7){
		Reveal("leafSection");
		Hide ("leafUpgrade");
		Reveal("growthSection");
		Hide ("growthUpgrade");
		Reveal("rankSection");
		Hide ("rankUpgrade");
	}
	
}

function BuyPlant()
{
	if (leavesCollected < plantCost)
	{
		return;
	}
	
	plantCount++;
	leavseCollected = leavesCollected - plantCost;
	
	var newPlant = "plant" + String(plantCount);
	
	Reveal(newPlant);
	
	plantCost = plantCost*2;
	
	document.getElementById("plantCost").innerHTML = plantCost;
	document.getElementById("leavesCollected").innerHTML = leavesCollected;
}

function BuyUpgrade(upgrade)
{
	if(upgrade == 1){
		var cost = leafUpgradeCost;}
	else if (upgrade == 2){
		var cost = growthUpgradeCost;}
	else if (upgrade == 3){
		var cost = rankUpgradeCost;}
	
	if (leavesCollected < cost)
	{
		return;
	}
	
	if(upgrade == 1){
		Reveal("leafSection");
		Hide ("leafUpgrade");
		upgradeCount+= 1;}
	else if (upgrade == 2){
		Reveal("growthSection");
		Hide ("growthUpgrade");
		upgradeCount+= 2;}
	else if (upgrade == 3){
		Reveal("rankSection");
		Hide ("rankUpgrade");
		upgradeCount+= 4;}
	
	if(upgradeCount >= 7)
	{
		Reveal("plantUpgrade");
	}
	
	leavesCollected = leavesCollected - cost;
	
	document.getElementById("leavesCollected").innerHTML = leavesCollected;
}

function GrowBamboo(plant)
{
	//Convert to temp identifiers for the specific bamboo.
	if(plant == 1){
		var bLength =   bambooLength;
		var bName = "bamboo";
		var bRank = bambooRank;
		var lCount = leafCount;
		var mReached = maxReached;
		var mHeight = maxBambooHeight;
		var lChance =leafChance;
		var dlChance =doubleLeafChance;
	}else if (plant == 2){
		var bLength =   bambooLength2;
		var bName = "2bamboo";
		var bRank = bambooRank2;
		var lCount = leafCount2;
		var mReached = maxReached2;
		var mHeight = maxBambooHeight2;
		var lChance =leafChance2;
		var dlChance =doubleLeafChance2;
	}else if (plant == 3){
		var bLength =   bambooLength3;
		var bName = "3bamboo";
		var bRank = bambooRank3;
		var lCount = leafCount3;
		var mReached = maxReached3;
		var mHeight = maxBambooHeight3;
		var lChance =leafChance3;
		var dlChance =doubleLeafChance3;
	}else if (plant == 4){
		var bLength =   bambooLength4;
		var bName = "4bamboo";
		var bRank = bambooRank4;
		var lCount = leafCount4;
		var mReached = maxReached4;
		var mHeight = maxBambooHeight4;
		var lChance =leafChance4;
		var dlChance =doubleLeafChance4;
	}else if (plant == 5){
		var bLength =   bambooLength5;
		var bName = "5bamboo";
		var bRank = bambooRank5;
		var lCount = leafCount5;
		var mReached = maxReached5;
		var mHeight = maxBambooHeight5;
		var lChance =leafChance5;
		var dlChance =doubleLeafChance5;
	}
	
	
	if (bLength < mHeight)
	{
		bLength++;   //increse the length of bamboo
	}
	
	var index = bLength;
	var name = bName + String(index);
	var chance = GetRandomInt(1000);
	var randNum = GetRandomInt(100);
		
	if (bLength<=1) //A catch for the first shoot, to allow proper rendering of plant pot.
	{
		if(bRank==1){document.getElementById(name).innerHTML = bambooShootBase;}
		else if(bRank==2){document.getElementById(name).innerHTML = bambooShootBaseR2;}
		else if(bRank==3){document.getElementById(name).innerHTML = bambooShootBaseR3;}
		
	}
	else if (mReached >= 1)
	{
		return;
	}
	else
	{
		if(lChance >= chance)
		{
			if(dlChance >= chance)
			{
				if(bRank==1){document.getElementById(name).innerHTML = bambooShootLeafBoth;}
				else if(bRank==2){document.getElementById(name).innerHTML = bambooShootLeafBothR2;}
				else if(bRank==3){document.getElementById(name).innerHTML = bambooShootLeafBothR3;}
				lCount = lCount + 2;
			}
			else if(lChance/2 >= chance)
			{
				if(bRank==1){document.getElementById(name).innerHTML = bambooShootLeafRight;}
				else if(bRank==2){document.getElementById(name).innerHTML = bambooShootLeafRightR2;}
				else if(bRank==3){
					if(randNum >=50){document.getElementById(name).innerHTML = bambooShootLeafRightR3;}
					else{document.getElementById(name).innerHTML = bambooShootLeafRightR3v2;}}
				lCount = lCount + 1;
			}
			else
			{
				if(bRank==1){document.getElementById(name).innerHTML = bambooShootLeafLeft;}
				else if(bRank==2){document.getElementById(name).innerHTML = bambooShootLeafLeftR2;}
				else if(bRank==3){
					if(randNum >=50){document.getElementById(name).innerHTML = bambooShootLeafLeftR3;}
					else{document.getElementById(name).innerHTML = bambooShootLeafLeftR3v2;}}
				lCount = lCount + 1;
			}
		}
		else
		{
			if(bRank==1){document.getElementById(name).innerHTML = bambooShoot;}
			else if(bRank==2){document.getElementById(name).innerHTML = bambooShootR2;}
			else if(bRank==3){document.getElementById(name).innerHTML = bambooShootR3;}
		}
		
		if (bLength == mHeight)
		{
			mReached = 1;
		}
	}
	
	//Convert temp identifiers back to solid values
	if(plant == 1){
		bambooLength = bLength;
		bambooRank = bRank;
		leafCount = lCount;
		maxReached = mReached;
		maxBambooHeight = mHeight;
		leafChance = lChance;
		doubleLeafChance = dlChance;
	}else if (plant == 2){
		bambooLength2 = bLength;
		bambooRank2 = bRank;
		leafCount2 = lCount;
		maxReached2 = mReached;
		maxBambooHeight2 = mHeight;
		leafChance2 = lChance;
		doubleLeafChance2 = dlChance;
	}else if (plant == 3){
		bambooLength3 = bLength;
		bambooRank3 = bRank;
		leafCount3 = lCount;
		maxReached3 = mReached;
		maxBambooHeight3 = mHeight;
		leafChance3 = lChance;
		doubleLeafChance3 = dlChance;
	}else if (plant == 4){
		bambooLength4 = bLength;
		bambooRank4 = bRank;
		leafCount4 = lCount;
		maxReached4 = mReached;
		maxBambooHeight4 = mHeight;
		leafChance4 = lChance;
		doubleLeafChance4 = dlChance;
	}else if (plant == 5){
		bambooLength5 = bLength;
		bambooRank5 = bRank;
		leafCount5 = lCount;
		maxReached5 = mReached;
		maxBambooHeight5 = mHeight;
		leafChance5 = lChance;
		doubleLeafChance5 = dlChance;
	}
	
	Save();
}

function Harvest(plant)
{
	if(plant == 1){
		var bLength =   bambooLength;
		var bName = "bamboo";
		var bRank = bambooRank;
		var lCount = leafCount;
		var mReached = maxReached;
	}else if (plant == 2){
		var bLength =   bambooLength2;
		var bName = "2bamboo";
		var bRank = bambooRank2;
		var lCount = leafCount2;
		var mReached = maxReached2;
	}else if (plant == 3){
		var bLength =   bambooLength3;
		var bName = "3bamboo";
		var bRank = bambooRank3;
		var lCount = leafCount3;
		var mReached = maxReached3;
	}else if (plant == 4){
		var bLength =   bambooLength4;
		var bName = "4bamboo";
		var bRank = bambooRank4;
		var lCount = leafCount4;
		var mReached = maxReached4;
	}else if (plant == 5){
		var bLength =   bambooLength5;
		var bName = "5bamboo";
		var bRank = bambooRank5;
		var lCount = leafCount5;
		var mReached = maxReached5;
	}
	
	
	for (i = 0; i < bLength; i++)  //loop through all the shoots
	{
		var index = i+1;
		var name = bName + String(index);
		
		if (i<=0) //A catch for the first shoot, to allow proper rendering of plant pot.
		{
			document.getElementById(name).innerHTML = noBambooShootBase;
		}
		else
		{
			document.getElementById(name).innerHTML = noBambooShoot;
		}
	}
	
	shootsCollected = shootsCollected + (bLength*bRank);
	document.getElementById("shootsCollected").innerHTML = shootsCollected;
	leavesCollected = leavesCollected + lCount;
	document.getElementById("leavesCollected").innerHTML = leavesCollected;
	bLength = 0;
	lCount = 0;
	mReached = 0;
	
	
	if(plant == 1){
		bambooLength = bLength;
		leafCount = lCount;
		maxReached = mReached;
	}else if (plant == 2){
		bambooLength2 = bLength;
		leafCount2 = lCount;
		maxReached2 = mReached;
	}else if (plant == 3){
		bambooLength3 = bLength;
		leafCount3 = lCount;
		maxReached3 = mReached;
	}else if (plant == 4){
		bambooLength4 = bLength;
		leafCount4 = lCount;
		maxReached4 = mReached;
	}else if (plant == 5){
		bambooLength5 = bLength;
		leafCount5 = lCount;
		maxReached5 = mReached;
	}
	
	Save();
}
	
function IncreaseBambooSize (plant)
{
	if(plant == 1){
		var cost =  bambooSizeCost;
		var max = maxBambooHeight;
		var mReached = maxReached;
	}else if (plant == 2){
		var cost =  bambooSizeCost2;
		var max = maxBambooHeight2;
		var mReached = maxReached2;
	}else if (plant == 3){
		var cost =  bambooSizeCost3;
		var max = maxBambooHeight3;
		var mReached = maxReached3;
	}else if (plant == 4){
		var cost =  bambooSizeCost4;
		var max = maxBambooHeight4;
		var mReached = maxReached4;
	}else if (plant == 5){
		var cost =  bambooSizeCost5;
		var max = maxBambooHeight5;
		var mReached = maxReached5;
	}
	
	if (max >= 20 || shootsCollected < cost)
	{
		return;
	}
	else
	{
		max++;
		mReached = 0;
		shootsCollected = shootsCollected - cost;
		cost = Math.floor(cost * 1.5);
		
		if(plant == 1){
			bambooSizeCost = cost;
			maxBambooHeight = max;
			maxReached = mReached;
			var newName = "bamboo" + String(maxBambooHeight);
		}else if (plant == 2){
			bambooSizeCost2 = cost;
			maxBambooHeight2 = max;
			maxReached2 = mReached;
			var newName = "2bamboo" + String(maxBambooHeight2);
		}else if (plant == 3){
			bambooSizeCost3 = cost;
			maxBambooHeight3 = max;
			maxReached3 = mReached;
			var newName = "3bamboo" + String(maxBambooHeight3);
		}else if (plant == 4){
			bambooSizeCost4 = cost;
			maxBambooHeight4 = max;
			maxReached4 = mReached;
			var newName = "4bamboo" + String(maxBambooHeight4);
		}else if (plant == 5){
			bambooSizeCost5 = cost;
			maxBambooHeight5 = max;
			maxReached5 = mReached;
			var newName = "5bamboo" + String(maxBambooHeight5);
		}
		
		var docID = "increaseSizeCost" + String(plant);
		document.getElementById(docID).innerHTML = cost + "m";
		document.getElementById("shootsCollected").innerHTML = shootsCollected;
		Reveal(newName);
		
		if (max >= 20)
		{
			var buttonID = "sizeButton" + String(plant);
			document.getElementById(docID).innerHTML = "MAX";
			Hide(buttonID);
		}
	}
	
	Save();
}

function IncreaseLeafChance (plant)
{
	if(plant == 1){
		var cost =  leafChanceCost;
		var lChance =leafChance;
		var dlChance =doubleLeafChance;
	}else if (plant == 2){
		var cost = leafChanceCost2;
		var lChance =leafChance2;
		var dlChance =doubleLeafChance2;
	}else if (plant == 3){
		var cost = leafChanceCost3;
		var lChance =leafChance3;
		var dlChance =doubleLeafChance3;
	}else if (plant == 4){
		var cost = leafChanceCost4;
		var lChance =leafChance4;
		var dlChance =doubleLeafChance4;
	}else if (plant == 5){
		var cost = leafChanceCost5;
		var lChance =leafChance5;
		var dlChance =doubleLeafChance5;
	}
	
	if (shootsCollected < cost)
	{
		return;
	}
	else
	{
		shootsCollected = shootsCollected - cost;
		lChance = lChance + 50;
		dlChance = dlChance + 10;
		cost = Math.floor(cost * 1.5);
		
		if(plant == 1){
			leafChanceCost = cost;
			leafChance = lChance;
			doubleLeafChance = dlChance;
		}else if (plant == 2){
			leafChanceCost2 = cost;
			leafChance2 = lChance;
			doubleLeafChance2 = dlChance;
		}else if (plant == 3){
			leafChanceCost3 = cost;
			leafChance3 = lChance;
			doubleLeafChance3 = dlChance;
		}else if (plant == 4){
			leafChanceCost4 = cost;
			leafChance4 = lChance;
			doubleLeafChance4 = dlChance;
		}else if (plant == 5){
			leafChanceCost5 = cost;
			leafChance5 = lChance;
			doubleLeafChance5 = dlChance;
		}
		
		var spanID = "leafChance" + String(plant);
		var docID = "increaseLeafChanceCost" + String(plant);
		document.getElementById(docID).innerHTML = cost+ "m";
		document.getElementById(spanID).innerHTML = "Single:" + lChance/10 + "% Double:" + dlChance/10 + "%";
		document.getElementById("shootsCollected").innerHTML = shootsCollected;
	}
	
	Save();
}

function IncreaseGrowthSpeed (plant)
{
	if(plant == 1){
		var cost = growthSpeedCost;
		var timer =intervalTimer;
	}else if (plant == 2){
		var cost = growthSpeedCost2;
		var timer =intervalTimer2;
	}else if (plant == 3){
		var cost = growthSpeedCost3;
		var timer =intervalTimer3;
	}else if (plant == 4){
		var cost = growthSpeedCost4;
		var timer =intervalTimer4;
	}else if (plant == 5){
		var cost = growthSpeedCost5;
		var timer =intervalTimer5;
	}
	
	if (shootsCollected <cost)
	{
		return;
	}
	else
	{
		shootsCollected = shootsCollected - cost;
		if(timer > 150){timer = timer - 100;}
		cost = Math.floor(cost * 1.5);
		
		if(plant == 1){
			growthSpeedCost = cost;
			intervalTimer = timer;
		}else if (plant == 2){
			growthSpeedCost2 = cost;
			intervalTimer2 = timer;
		}else if (plant == 3){
			growthSpeedCost3 = cost;
			intervalTimer3 = timer;
		}else if (plant == 4){
			growthSpeedCost4 = cost;
			intervalTimer4 = timer;
		}else if (plant == 5){
			growthSpeedCost5 = cost;
			intervalTimer5 = timer;
		}
		
		var spanID = "growthRate" + String(plant);
		var docID = "increaseGrowthSpeedCost" + String(plant);
		document.getElementById(spanID).innerHTML = "Every " + timer/1000 + " seconds";
		document.getElementById(docID).innerHTML = cost+ "m";
		document.getElementById("shootsCollected").innerHTML = shootsCollected;
	}
	
	Save();
}

function IncreaseRank (plant)
{
	if(plant == 1){
		var cost = rankCost;
		var bRank = bambooRank;
	}else if (plant == 2){
		var cost = rankCost2;
		var bRank = bambooRank2;
	}else if (plant == 3){
		var cost = rankCost3;
		var bRank = bambooRank3;
	}else if (plant == 4){
		var cost = rankCost4;
		var bRank = bambooRank4;
	}else if (plant == 5){
		var cost = rankCost5;
		var bRank = bambooRank5;
	}
	
	if (shootsCollected < cost)
	{
		return;
	}
	else
	{
		shootsCollected = shootsCollected - rankCost;
		if(bRank < 3)
		{
			if(plant == 1){
				bambooRank++;
			}else if (plant == 2){
				bambooRank2++;
			}else if (plant == 3){
				bambooRank3++;
			}else if (plant == 4){
				bambooRank4++;
			}else if (plant == 5){
				bambooRank5++;
			}
		}
	}
		
	if(plant == 1){
		rankCost = Math.floor(rankCost * 1.5);
		cost = rankCost;
	}else if (plant == 2){
		rankCost2 = Math.floor(rankCost * 1.5);
		cost = rankCost2;
	}else if (plant == 3){
		rankCost3 = Math.floor(rankCost * 1.5);
		cost = rankCost3;
	}else if (plant == 4){
		rankCost4 = Math.floor(rankCost * 1.5);
		cost = rankCost4;
	}else if (plant == 5){
		rankCost5 = Math.floor(rankCost * 1.5);
		cost = rankCost5;
	}
		
	var docID = "increaseRankCost" + String(plant);
	document.getElementById(docID).innerHTML = cost+ "m";
	document.getElementById("shootsCollected").innerHTML = shootsCollected;
	
	if (bRank >= 3)
	{
		var buttonID = "rankButton" + String(plant);
		document.getElementById(docID).innerHTML = "MAX";
		Hide(buttonID);
	}
	
	Save();
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

function Save() {
       
    	var saveGame = {
	    	bambooLength:bambooLength,
		bambooLength2:bambooLength2,
		bambooLength3:bambooLength3,
		bambooLength4:bambooLength4,
		bambooLength5:bambooLength5,
		maxBambooHeight:maxBambooHeight,
		maxBambooHeight2:maxBambooHeight2,
		maxBambooHeight3:maxBambooHeight3,
		maxBambooHeight4:maxBambooHeight4,
		maxBambooHeight5:maxBambooHeight5,
		maxReached:maxReached,
		maxReached2:maxReached2,
		maxReached3:maxReached3,
		maxReached4:maxReached4,
		maxReached5:maxReached5,
		intervalTimer:intervalTimer,
		intervalTimer2:intervalTimer2,
		intervalTimer3:intervalTimer3,
		intervalTimer4:intervalTimer4,
		intervalTimer5:intervalTimer5,
		leafCount:leafCount,
		leafCount2:leafCount2,
		leafCount3:leafCount3,
		leafCount4:leafCount4,
		leafCount5:leafCount5,
		leafChance:leafChance,
		leafChance2:leafChance2,
		leafChance3:leafChance3,
		leafChance4:leafChance4,
		leafChance5:leafChance5,
		doubleLeafChance:doubleLeafChance,
		doubleLeafChance2:doubleLeafChance2,
		doubleLeafChance3:doubleLeafChance3,
		doubleLeafChance4:doubleLeafChance4,
		doubleLeafChance5:doubleLeafChance5,
		bambooSizeCost:bambooSizeCost,
		bambooSizeCost2:bambooSizeCost2,
		bambooSizeCost3:bambooSizeCost3,
		bambooSizeCost4:bambooSizeCost4,
		bambooSizeCost5:bambooSizeCost5,
		growthSpeedCost:growthSpeedCost,
		growthSpeedCost2:growthSpeedCost2,
		growthSpeedCost3:growthSpeedCost3,
		growthSpeedCost4:growthSpeedCost4,
		growthSpeedCost5:growthSpeedCost5,
		leafChanceCost:leafChanceCost,
		leafChanceCost2:leafChanceCost2,
		leafChanceCost3:leafChanceCost3,
		leafChanceCost4:leafChanceCost4,
		leafChanceCost5:leafChanceCost5,
		rankCost:rankCost,
		rankCost2:rankCost2,
		rankCost3:rankCost3,
		rankCost4:rankCost4,
		rankCost5:rankCost5,
		bambooRank:bambooRank,
		bambooRank2:bambooRank2,
		bambooRank3:bambooRank3,
		bambooRank4:bambooRank4,
		bambooRank5:bambooRank5
    	}
    	localStorage.setItem("saveGame",JSON.stringify(saveGame));  
}

function Load() {
	   
	if (localStorage.getItem("saveGame") != null)
	{
    		var loadGame = JSON.parse(localStorage.getItem("saveGame"));    
   		
		bambooLength = loadGame.bambooLength;
		bambooLength2 = loadGame.bambooLength2;
		bambooLength3 = loadGame.bambooLength3;
		bambooLength4 = loadGame.bambooLength4;
		bambooLength5 = loadGame.bambooLength5;
		maxBambooHeight = loadGame.maxBambooHeight;
		maxBambooHeight2 = loadGame.maxBambooHeight2;
		maxBambooHeight3 = loadGame.maxBambooHeight3;
		maxBambooHeight4 = loadGame.maxBambooHeight4;
		maxBambooHeight5 = loadGame.maxBambooHeight5;
		maxReached = loadGame.maxReached;
		maxReached2 = loadGame.maxReached2;
		maxReached3 = loadGame.maxReached3;
		maxReached4 = loadGame.maxReached4;
		maxReached5 = loadGame.maxReached5;
		intervalTimer = loadGame.intervalTimer;
		intervalTimer2 = loadGame.intervalTimer2;
		intervalTimer3 = loadGame.intervalTimer3;
		intervalTimer4 = loadGame.intervalTimer4;
		intervalTimer5 = loadGame.intervalTimer5;
		leafCount = loadGame.leafCount;
		leafCount2 = loadGame.leafCount2;
		leafCount3 = loadGame.leafCount3;
		leafCount4 = loadGame.leafCount4;
		leafCount5 = loadGame.leafCount5;
		leafChance = loadGame.leafChance;
		leafChance2 = loadGame.leafChance2;
		leafChance3 = loadGame.leafChance3;
		leafChance4 = loadGame.leafChance4;
		leafChance5 = loadGame.leafChance5;
		doubleLeafChance = loadGame.doubleLeafChance;
		doubleLeafChance2 = loadGame.doubleLeafChance2;
		doubleLeafChance3 = loadGame.doubleLeafChance3;
		doubleLeafChance4 = loadGame.doubleLeafChance4;
		doubleLeafChance5 = loadGame.doubleLeafChance5;
		bambooSizeCost = loadGame.bambooSizeCost;
		bambooSizeCost2 = loadGame.bambooSizeCost2;
		bambooSizeCost3 = loadGame.bambooSizeCost3;
		bambooSizeCost4 = loadGame.bambooSizeCost4;
		bambooSizeCost5 = loadGame.bambooSizeCost5;
		growthSpeedCost = loadGame.growthSpeedCost;
		growthSpeedCost2 = loadGame.growthSpeedCost2;
		growthSpeedCost3 = loadGame.growthSpeedCost3;
		growthSpeedCost4 = loadGame.growthSpeedCost4;
		growthSpeedCost5 = loadGame.growthSpeedCost5;
		leafChanceCost = loadGame.leafChanceCost;
		leafChanceCost2 = loadGame.leafChanceCost2;
		leafChanceCost3 = loadGame.leafChanceCost3;
		leafChanceCost4 = loadGame.leafChanceCost4;
		leafChanceCost5 = loadGame.leafChanceCost5;
		rankCost = loadGame.rankCost;
		rankCost2 = loadGame.rankCost2;
		rankCost3 = loadGame.rankCost3;
		rankCost4 = loadGame.rankCost4;
		rankCost5 = loadGame.rankCost5;
		bambooRank = loadGame.bambooRank;
		bambooRank2 = loadGame.bambooRank2;
		bambooRank3 = loadGame.bambooRank3;
		bambooRank4 = loadGame.bambooRank4;
		bambooRank5 = loadGame.bambooRank5;
	}
}


function DeleteSave()
{
	localStorage.removeItem("saveGame");
	setup();
}

function FirstTimer()
{
	var bTimer = window.setInterval(function()
	{
		GrowBamboo(1);
		clearInterval(bTimer);
		FirstTimer();
	}, intervalTimer);
}

function SecondTimer()
{
	var b2Timer = window.setInterval(function()
	{
		GrowBamboo(2);
	}, intervalTimer2);
}

function ThirdTimer()
{
	var b3Timer = window.setInterval(function()
	{
		GrowBamboo(3);
	}, intervalTimer3);
}

function FourthTimer()
{
	var b4Timer = window.setInterval(function()
	{
		GrowBamboo(4);
	}, intervalTimer4);
}

function FifthTimer()
{
	var b5Timer = window.setInterval(function()
	{
		GrowBamboo(5);
	}, intervalTimer5);
}

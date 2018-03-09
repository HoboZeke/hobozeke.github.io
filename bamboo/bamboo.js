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
var bambooSizeCost = 10;
var bambooSizeCost2 = 20;
var bambooSizeCost3 = 30;
var bambooSizeCost4 = 40;
var bambooSizeCost5 = 50;
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

//Global Resources
var shootsCollected = 0;
var leavesCollected = 0;

//Graphics
var bambooShootBase = "_I_";
var noBambooShootBase = "___";
var bambooShoot = "&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;I<br/>";
var bambooShootLeafLeft = "&#8239;&#8239;<>I<br/>";
var bambooShootLeafRight = "&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;I<><br/>";
var bambooShootLeafBoth = "&#8239;&#8239;<>I<><br/>";
var noBambooShoot = "&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<br/>";
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
	
	console.log("Chance:"+chance);
		
	if (bLength<=1) //A catch for the first shoot, to allow proper rendering of plant pot.
	{
		if(bRank==1){document.getElementById(name).innerHTML = bambooShootBase;}
		else if(bRank==2){document.getElementById(name).innerHTML = bambooShootBaseR2;}
		else if(bRank==3){document.getElementById(name).innerHTML = bambooShootBaseR3;}
		
	}
	else if (mReached >= 1)
	{
		console.log("max length reached:"+mHeight);
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
				else if(bRank==3){document.getElementById(name).innerHTML = bambooShootLeafRightR3;}
				lCount = lCount + 1;
			}
			else
			{
				if(bRank==1){document.getElementById(name).innerHTML = bambooShootLeafLeft;}
				else if(bRank==2){document.getElementById(name).innerHTML = bambooShootLeafLeftR2;}
				else if(bRank==3){document.getElementById(name).innerHTML = bambooShootLeafLeftR3;}
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
		cost = cost * 1.5;
		
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
		document.getElementById(docID).innerHTML = cost;
		document.getElementById("shootsCollected").innerHTML = shootsCollected;
		Reveal(newName);
	}
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
		cost = cost * 1.5;
		
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
	
		var docID = "increaseLeafChanceCost" + String(plant);
		document.getElementById(docID).innerHTML = cost;
		document.getElementById("shootsCollected").innerHTML = shootsCollected;
	}
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
		cost = cost * 1.5;
		
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
	
		var docID = "increaseGrowthSpeedCost" + String(plant);
		document.getElementById(docID).innerHTML = cost;
		document.getElementById("shootsCollected").innerHTML = shootsCollected;
	}
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
		rankCost = rankCost * 1.5;
		cost = rankCost;
	}else if (plant == 2){
		rankCost2 = rankCost2 * 1.5;
		cost = rankCost2;
	}else if (plant == 3){
		rankCost3 = rankCost3 * 1.5;
		cost = rankCost3;
	}else if (plant == 4){
		rankCost4 = rankCost4 * 1.5;
		cost = rankCost4;
	}else if (plant == 5){
		rankCost5 = rankCost5 * 1.5;
		cost = rankCost5;
	}
		
	var docID = "increaseRankCost" + String(plant);
	document.getElementById(docID).innerHTML = cost;
	document.getElementById("shootsCollected").innerHTML = shootsCollected;
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
		GrowBamboo(1);
	}, intervalTimer);

window.setInterval(function()
	{
		GrowBamboo(2);
	}, intervalTimer2);

window.setInterval(function()
	{
		GrowBamboo(3);
	}, intervalTimer3);

window.setInterval(function()
	{
		GrowBamboo(4);
	}, intervalTimer4);

window.setInterval(function()
	{
		GrowBamboo(5);
	}, intervalTimer5);

//Bamboo Growth Simulator
var bambooLength = 0;
var intervalTimer = 5000;
var bambooShootBase = "_I_";
var noBambooShootBase = "___";
var bambooShoot = "&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;I<br/>";
var noBambooShoot = "&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<br/>";
var shootsCollected = 0;

function GrowBamboo()
{
	if (bambooLength < 10)
	{
		bambooLength++;   //increse the length of bamboo
	}
	console.log("Bamboo Length:" +bambooLength);
	
	for (i = 0; i < bambooLength; i++)  //loop through all the shoots
	{
		var index = i+1;
		var name = "bamboo" + String(index);
		
		if (i<=0) //A catch for the first shoot, to allow proper rendering of plant pot.
		{
			document.getElementById(name).innerHTML = bambooShootBase;
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
	document.getElementById("shottsCollected").innerHTML = shootsCollected;
	bambooLength = 0;
	console.log("Bamboo Length:" +bambooLength);
}

window.setInterval(function()
	{
		GrowBamboo();
	}, intervalTimer);

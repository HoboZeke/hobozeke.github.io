//Bamboo Growth Simulator
var bambooLength;
var intervalTimer = 5000;
var bambooShootBase = "I";
var noBambooShootBase = "_";
var bambooShoot = "&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;I";
var noBambooShoot = "&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;";

function GrowBamboo()
{
	bambooLength++;   //increse the length of bamboo
	
	for (i = 0; i < bambooLength; i++)  //loop through all the shoots
	{
		var name = "bamboo" + String(i+1);
		
		if (i=0) //A catch for the first shoot, to allow proper rendering of plant pot.
		{
			document.getElementById(name).innerHTML = bambooShootBase;
		}
		else
		{
			document.getElementById(name).innerHTML = bambooShoot;
		}
	}
	
}



window.setInterval(function()
	{
		GrowBamboo();
	}, intervalTimer);

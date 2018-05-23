var grid = [ [9,9,9,7,7,9,7,7,7,7,9,9,9,7,9,7,9,9,9,7,7,9,7,7,9,7,9,9,7,7,7,9,9,7,7,9],
                  [7,7,7,9,9,7,9,9,9,9,7,7,7,9,7,9,7,7,7,9,9,7,9,9,7,9,7,7,9,9,9,7,7,9,9,7],
                  [11,8,11,11,8,11,8,8,8,11,11,8,11,11,8,11,8,11,8,8,11,11,11,8,11,8,11,11,8,8,11,8,8,8,8,11],
                  [1,1,5,1,5,5,5,1,5,1,1,1,1,1,10,1,10,10,10,1,10,1,1,10,1,1,10,1,5,5,5,1,5,1,1,5],
                  [9,11,8,8,11,8,11,11,11,8,8,11,8,8,11,8,11,8,11,11,8,8,8,11,8,11,8,8,11,11,8,11,11,11,11,8],
                  [10,10,10,0,10,10,6,10,10,0,10,10,10,10,0,10,10,6,10,10,10,10,10,0,10,6,10,10,0,0,10,6,10,10,10,10],
                  [4,12,12,12,12,12,4,12,4,4,12,4,12,4,4,12,4,12,12,12,4,4,4,12,4,4,12,12,12,4,12,4,4,4,4,2],
                  [6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6],
                  [12,4,4,4,4,4,12,4,12,12,4,12,4,12,12,4,12,4,4,4,12,12,12,4,12,12,4,4,4,12,4,12,12,12,12,4],
                  [2,2,1,2,1,1,1,2,1,2,2,10,2,2,1,2,1,1,1,2,1,2,2,1,10,2,1,2,1,1,1,2,1,2,2,1],
                  [6,6,6,3,6,6,6,6,3,6,6,3,6,6,3,6,6,6,6,3,6,6,6,3,6,6,3,6,6,6,3,6,6,6,3,6],
                  [3,3,2,3,2,2,2,3,2,3,3,2,3,3,2,3,3,3,2,3,2,2,3,3,2,3,2,3,2,2,2,3,2,3,3,2] ];
//1=Copper 2=Lead 3=Iron 4=Charcoal 5=Tin 6=Sulpher 7=Mercury 8=Zinc 9=Arsenic 10=Antimony 11=Bismuth 12=Phosphorus 0 = silver

var usedSolutions = [100,111]; //A couple of element just to populate to be overwritten. 

var startingBase1 = 0;
var startingBase2 = 0;
var startingBase3 = 0;
var base1;
var base2;
var base3;
var currentSolutionCount = 0;

function Setup()
{
}

function ChooseStartingBase(base)
{
  //Base 0 will reset the starting bases to their original value so new bases can be entered.
  if (base <= 0)
  {
    startingBase1 = 0;
    startingBase2 = 0;
    startingBase3 = 0;
  }
  
  //The first entered base will become base1, then base2 then base3 etc.
  if (startingBase1 == 0)  {
    startingBase1 = base;
    base1 = startingBase1;
    document.getElementById("startingBase1").innerHTML = startingBase1;
  }else if (startingBase2 == 0){
    startingBase2 = base;
    base2 = startingBase2;
    document.getElementById("startingBase2").innerHTML = startingBase2;
  }else if (startingBase3 == 0){
    startingBase3 = base;
    base3 = startingBase3;
    document.getElementById("startingBase3").innerHTML = startingBase3;
  }
}

function ApplySolution(solution)
{
  usedSolutions[currnetSolutionCount] = solution;
  currentSolutionCount = currentSolutionCount + 1;

  var stringA = "solutionResultA" + currentSolutionCount;
  var stringB = "solutionResultB" + currentSolutionCount;
  var stringC = "solutionResultC" + currentSolutionCount;
  var stringD = "solution" + currentSolutionCount;
  
  var resultA = grid [base1-1][solution-1];
  var resultB = grid [base2-1][solution-1];
  var resultC = grid [base3-1][solution-1];
  
  base1 = resultA;
  base2 = resultB;
  base3 = resultC;
  
  document.getElementById(stringA).innerHTML = CovertIndexToElement(resultA);
  document.getElementById(stringB).innerHTML = CovertIndexToElement(resultB);
  document.getElementById(stringC).innerHTML = CovertIndexToElement(resultC);
  document.getElementById(stringD).innerHTML = solution;
  
  if (currentSolutionCount == 12){
   CheckForSilver(1); 
  }else if (currentSolutionCount == 24){
    CheckForSilver(2);
  }else if (currentSolutionCount == 36){
    CheckForSilver(3);
  }
}

function CheckForSilver(stage)
{
  if (stage == 1){
    if (base1 == 0 && base2 == 0 && base3 == 0){
      document.getElementById("12thsuccess").innerHTML = "SUCCESS!";
    }else{
      document.getElementById("12thsuccess").innerHTML = "FAILURE";
    }
    
    base1 = startingBase1;
    base2 = startingBase2;
    base3 = startingBase3;
    document.getElementById("startingBase1b").innerHTML = startingBase1;
    document.getElementById("startingBase2b").innerHTML = startingBase1;
    document.getElementById("startingBase3b").innerHTML = startingBase1;
  }else if (stage == 2){
      if (base1 == 0 && base2 == 0 && base3 == 0){
        if(CheckDuplicateSolutions()){
          document.getElementById("24thsuccess").innerHTML = "DUPLICATE SOLUTIONS USED";
        }else{
          document.getElementById("24thsuccess").innerHTML = "SUCCESS!";
        }
    }else{
      document.getElementById("24thsuccess").innerHTML = "FAILURE";
    }
    
    base1 = startingBase1;
    base2 = startingBase2;
    base3 = startingBase3;
    document.getElementById("startingBase1c").innerHTML = startingBase1;
    document.getElementById("startingBase2c").innerHTML = startingBase1;
    document.getElementById("startingBase3c").innerHTML = startingBase1;
  }else if (stage == 3){
      if (base1 == 0 && base2 == 0 && base3 == 0){
        if(CheckDuplicateSolutions()){
          document.getElementById("24thsuccess").innerHTML = "DUPLICATE SOLUTIONS USED";
        }else{
          document.getElementById("24thsuccess").innerHTML = "SUCCESS!";
        }
    }else{
      document.getElementById("36thsuccess").innerHTML = "FAILURE";
    }
    
  }
}

function CheckDuplicateSolutions()
{
  var counts = [];
    for(var i = 0; i <= usedSolutions.length; i++) {
        if(counts[usedSolutions[i]] === undefined) {
            counts[usedSolutions[i]] = 1;
        } else {
            return true;
        }
    }
    return false;
}

function CovertIndexToElement(index)
{
  //1=Copper 2=Lead 3=Iron 4=Charcoal 5=Tin 6=Sulpher 7=Mercury 8=Zinc 
  //9=Arsenic 10=Antimony 11=Bismuth 12=Phosphorus 0 = silver
  if (index == 0){
    var result = "Silver";
  }else if (index == 1){
    var result = "Copper";
  }else if (index == 2){
    var result = "Lead";
  }else if (index == 3){
    var result = "Iron";
  }else if (index == 4){
    var result = "Charcoal";
  }else if (index == 5){
    var result = "Tin";
  }else if (index == 6){
    var result = "Sulpher";
  }else if (index == 7){
    var result = "Mercury";
  }else if (index == 8){
    var result = "Zinc";
  }else if (index == 9){
    var result = "Arsenic";
  }else if (index == 10){
    var result = "Antimony";
  }else if (index == 11){
    var result = "Bismuth";
  }else if (index == 12){
    var result = "Phosphorus";
  }
   
  return result;
}

var infinities = 0;

setInterval (function(){
   if (points == Infinity){
   document.getElementById("preInf").style.display = "none";
document.getElementById("inf").style.display = "inline-block";
	} else{
document.getElementById("preInf").style.display = "inline-block";
document.getElementById("inf").style.display = "none";
	}
	
	if (infinities >= 1){
   document.getElementById("win").style.display = "inline-block";
	} else{
document.getElementById("win").style.display = "none";
	}
},50);

function goInf(){
 points = 10;
 costs = [10, 100, 10000, 1e6, 1e9, 1e13, 1e18, 1e24];
 dims = [0, 0, 0, 0, 0, 0, 0, 0];
 purDims = [0, 0, 0, 0, 0, 0, 0, 0];
 dimMult = [1, 1, 1, 1, 1, 1, 1, 1];
 boostDimMult = [1, 1, 1, 1, 1, 1, 1, 1];
 costInc = [100, 1000, 10000, 100000, 1e7, 1e9, 1e10, 1e11];
 tickspeed = 1;
 tickCost = 1000;
 tickMult = 1.125;
 dimShifts = 0;
 dimBoostReq = 10;
 galaxyReq = 30;
 galaxies = 0;
 infinities++;
 
}

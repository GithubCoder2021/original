var points = 10;
var costs = [10,100,10000,1e6,1e9,1e13,1e18,1e24];
var dims = [0,0,0,0,0,0,0,0];
var purDims = [0,0,0,0,0,0,0,0];
var dimMult = [1,1,1,1,1,1,1,1];
var costInc = [1000,10000,100000,1e6,1e8,1e10,1e12,1e15];
var tickspeed = 1;
var tickCost = 1000;

setInterval (function(){
	document.getElementById("points").innerText = points.toFixed(1);
        document.getElementById("pps").innerText = Math.floor(dims[0]*dimMult[0]*tickspeed);
	document.getElementById("ADimCost1").innerText = costs[0];
	document.getElementById("ADimCost2").innerText = costs[1];
	document.getElementById("ADimCost3").innerText = costs[2];
	document.getElementById("ADimCost4").innerText = costs[3];
	document.getElementById("ADimCost5").innerText = costs[4];
	document.getElementById("ADimCost6").innerText = costs[5];
	document.getElementById("ADimCost7").innerText = costs[6];
	document.getElementById("ADimCost8").innerText = costs[7];
	document.getElementById("ADim1").innerText = Math.floor(dims[0]);
	document.getElementById("ADim2").innerText = Math.floor(dims[1]);
	document.getElementById("ADim3").innerText = Math.floor(dims[2]);
	document.getElementById("ADim4").innerText = Math.floor(dims[3]);
	document.getElementById("ADim5").innerText = Math.floor(dims[4]);
	document.getElementById("ADim6").innerText = Math.floor(dims[5]);
	document.getElementById("ADim7").innerText = Math.floor(dims[6]);
	document.getElementById("ADim8").innerText = Math.floor(dims[7]);
  	document.getElementById("tick").innerText = tickspeed.toFixed(3);
  	document.getElementById("tickCost").innerText = tickCost;
  	points += (dims[0]/20)*dimMult[0]*tickspeed;
  	for (let i = 1; i < 8; i++) {
 	   dims[i-1] += (dims[i]/20)*dimMult[i]*tickspeed;
  	}
},50);

function buyADim(dim){
   if (points >= costs[dim]){
    points -= costs[dim];
    dims[dim]++;
    purDims[dim]++;
    if (purDims[dim] == 10){
    	purDims[dim] = 0;
        dimMult[dim] *= 2;
        costs[dim] *=  costInc[dim];
    }
   }
}


function tickBuy(){
    if (points >= tickCost){
    	points -= tickCost;
    	tickspeed *= 1.125;
    	tickCost *= 10;
    }
}

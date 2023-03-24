var points = 10;
var costs = [10,100,10000,1e6,1e9,1e13,1e18,1e24];
var dims = [0,0,0,0,0,0,0,0];

setInterval (function(){
	document.getElementById("points").innerText = points;
	document.getElementById("ADimCost1").innerText = costs[0];
	document.getElementById("ADimCost2").innerText = costs[1];
	document.getElementById("ADimCost3").innerText = costs[2];
	document.getElementById("ADimCost4").innerText = costs[3];
	document.getElementById("ADimCost5").innerText = costs[4];
	document.getElementById("ADimCost6").innerText = costs[5];
	document.getElementById("ADimCost7").innerText = costs[6];
	document.getElementById("ADimCost8").innerText = costs[7];
	document.getElementById("ADim1").innerText = dims[0];
	document.getElementById("ADim2").innerText = dims[1];
	document.getElementById("ADim3").innerText = dims[2];
	document.getElementById("ADim4").innerText = dims[3];
	document.getElementById("ADim5").innerText = dims[4];
	document.getElementById("ADim6").innerText = dims[5];
	document.getElementById("ADim7").innerText = dims[6];
	document.getElementById("ADim8").innerText = dims[7];
},50);

function buyADim(dim){
	if (points >= costs[dim]){
		points -= costs[dim]
		points -= costs[dim]
	}
}
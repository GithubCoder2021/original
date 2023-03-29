var points = 10;
var costs = [10, 100, 10000, 1e6, 1e9, 1e13, 1e18, 1e24];
var dims = [0, 0, 0, 0, 0, 0, 0, 0];
var purDims = [0, 0, 0, 0, 0, 0, 0, 0];
var dimMult = [1, 1, 1, 1, 1, 1, 1, 1];
var boostDimMult = [1, 1, 1, 1, 1, 1, 1, 1];
var costInc = [1000, 10000, 100000, 1e6, 1e8, 1e10, 1e12, 1e15];
var tickspeed = 1;
var tickCost = 1000;
var dimShifts = 0;
var dimBoostReq = 10;
var galaxyReq = 60;
var galaxies = 0;

setInterval(function() {
  document.getElementById("points").innerText = points.toFixed(1);
  document.getElementById("pps").innerText = Math.floor(dims[0] * dimMult[0] * tickspeed);
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
  document.getElementById("PurDim1").innerText = purDims[0];
  document.getElementById("PurDim2").innerText = purDims[1];
  document.getElementById("PurDim3").innerText = purDims[2];
  document.getElementById("PurDim4").innerText = purDims[3];
  document.getElementById("PurDim5").innerText = purDims[4];
  document.getElementById("PurDim6").innerText = purDims[5];
  document.getElementById("PurDim7").innerText = purDims[6];
  document.getElementById("PurDim8").innerText = purDims[7];
  document.getElementById("mul1").innerText = dimMult[0] * boostDimMult[0];
  document.getElementById("mul2").innerText = dimMult[1] * boostDimMult[1];
  document.getElementById("mul3").innerText = dimMult[2] * boostDimMult[2];
  document.getElementById("mul4").innerText = dimMult[3] * boostDimMult[3];
  document.getElementById("mul5").innerText = dimMult[4] * boostDimMult[4];
  document.getElementById("mul6").innerText = dimMult[5] * boostDimMult[5];
  document.getElementById("mul7").innerText = dimMult[6] * boostDimMult[6];
  document.getElementById("mul8").innerText = dimMult[7] * boostDimMult[7];
  document.getElementById("galaxyReq").innerText = "Req " + galaxyReq + " 8th Dimensions";
  document.getElementById("tick").innerText = (tickspeed * (galaxies / 10)).toFixed(3);
  document.getElementById("tickCost").innerText = tickCost;
  points += (dims[0] / 20) * dimMult[0] * (tickspeed * ((galaxies / 10)+1)) * boostDimMult[0];
  for (let i = 1; i < 8; i++) {
    dims[i - 1] += (dims[i] / 20) * dimMult[i] * (tickspeed * ((galaxies / 50)+1)) * boostDimMult[i];
  }
}, 50);

function buyADim(dim) {
  if (points >= costs[dim]) {
    points -= costs[dim];
    dims[dim]++;
    purDims[dim]++;
    if (purDims[dim] == 10) {
      purDims[dim] = 0;
      dimMult[dim] *= 2;
      costs[dim] *= costInc[dim];
    }
  }
}


function tickBuy() {
  if (points >= tickCost) {
    points -= tickCost;
    tickspeed *= 1.125;
    tickCost *= 10;
  }
}

setInterval(function() {
  if (dimShifts >= 1) {
    document.getElementById("5").style.display = "inline-block";
  } else {
    document.getElementById("5").style.display = "none";
  }
  if (dimShifts >= 2) {
    document.getElementById("6").style.display = "inline";
  } else {
    document.getElementById("6").style.display = "none";
  }
  if (dimShifts >= 3) {
    document.getElementById("7").style.display = "inline";
  } else {
    document.getElementById("7").style.display = "none";
  }
  if (dimShifts >= 4) {
    document.getElementById("8").style.display = "inline";
  } else {
    document.getElementById("8").style.display = "none";
  }
}, 50);

function dimShift() {
  if (dimShifts == 0) {
    if (dims[3] >= 10) {
      dimShifts++;
      boostDimMult[0] *= 2;
      document.getElementById("dimShiftReq").innerText = "Req: 20 5th Dimensions";
      points = 10;
      costs = [10, 100, 10000, 1e6, 1e9, 1e13, 1e18, 1e24];
      dims = [0, 0, 0, 0, 0, 0, 0, 0];
      purDims = [0, 0, 0, 0, 0, 0, 0, 0];
      dimMult = [1, 1, 1, 1, 1, 1, 1, 1];
      tickspeed = 1;
      tickCost = 1000;
    }
  }
  if (dimShifts == 1) {
    if (dims[4] >= 10) {
      dimShifts++;
      boostDimMult[0] *= 2;
      boostDimMult[1] *= 2;
      document.getElementById("dimShiftReq").innerText = "Req: 10 6th Dimensions";
      points = 10;
      costs = [10, 100, 10000, 1e6, 1e9, 1e13, 1e18, 1e24];
      dims = [0, 0, 0, 0, 0, 0, 0, 0];
      purDims = [0, 0, 0, 0, 0, 0, 0, 0];
      dimMult = [1, 1, 1, 1, 1, 1, 1, 1];
      tickspeed = 1;
      tickCost = 1000;
    }
  }
  if (dimShifts == 2) {
    if (dims[5] >= 10) {
      dimShifts++;
      boostDimMult[0] *= 2;
      boostDimMult[1] *= 2;
      boostDimMult[2] *= 2;
      document.getElementById("dimShiftReq").innerText = "Req: 10 7th Dimensions";
      points = 10;
      costs = [10, 100, 10000, 1e6, 1e9, 1e13, 1e18, 1e24];
      dims = [0, 0, 0, 0, 0, 0, 0, 0];
      purDims = [0, 0, 0, 0, 0, 0, 0, 0];
      dimMult = [1, 1, 1, 1, 1, 1, 1, 1];
      tickspeed = 1;
      tickCost = 1000;
    }
  }
  if (dimShifts == 3) {
    if (dims[6] >= 10) {
      dimShifts++;
      boostDimMult[0] *= 2;
      boostDimMult[1] *= 2;
      boostDimMult[2] *= 2;
      boostDimMult[3] *= 2;
      document.getElementById("dimShiftReq").innerText = "Req: 10 8th Dimensions";
      points = 10;
      costs = [10, 100, 10000, 1e6, 1e9, 1e13, 1e18, 1e24];
      dims = [0, 0, 0, 0, 0, 0, 0, 0];
      purDims = [0, 0, 0, 0, 0, 0, 0, 0];
      dimMult = [1, 1, 1, 1, 1, 1, 1, 1];
      tickspeed = 1;
      tickCost = 1000;
    }
  }
  if (dimShifts == 4) {
    if (dims[7] >= 10) {
      dimShifts++;
      boostDimMult[0] *= 2;
      boostDimMult[1] *= 2;
      boostDimMult[2] *= 2;
      boostDimMult[3] *= 2;
      boostDimMult[4] *= 2;
      dimBoostReq += 15;
      document.getElementById("dimShiftReq").innerText = "Req: " + dimBoostReq + " 8th Dimensions";
      points = 10;
      costs = [10, 100, 10000, 1e6, 1e9, 1e13, 1e18, 1e24];
      dims = [0, 0, 0, 0, 0, 0, 0, 0];
      purDims = [0, 0, 0, 0, 0, 0, 0, 0];
      dimMult = [1, 1, 1, 1, 1, 1, 1, 1];
      tickspeed = 1;
      tickCost = 1000;
    }
  }
  if (dimShifts == 5) {
    if (dims[7] >= dimBoostReq) {
      dimShifts++;
      boostDimMult[0] *= 2;
      boostDimMult[1] *= 2;
      boostDimMult[2] *= 2;
      boostDimMult[3] *= 2;
      boostDimMult[4] *= 2;
      boostDimMult[5] *= 2;
      dimBoostReq += 15;
      document.getElementById("dimShiftReq").innerText = "Req: " + dimBoostReq + " 8th Dimensions";
      points = 10;
      costs = [10, 100, 10000, 1e6, 1e9, 1e13, 1e18, 1e24];
      dims = [0, 0, 0, 0, 0, 0, 0, 0];
      purDims = [0, 0, 0, 0, 0, 0, 0, 0];
      dimMult = [1, 1, 1, 1, 1, 1, 1, 1];
      tickspeed = 1;
      tickCost = 1000;
    }
  }
  if (dimShifts == 6) {
    if (dims[7] >= dimBoostReq) {
      dimShifts++;
      boostDimMult[0] *= 2;
      boostDimMult[1] *= 2;
      boostDimMult[2] *= 2;
      boostDimMult[3] *= 2;
      boostDimMult[4] *= 2;
      boostDimMult[5] *= 2;
      boostDimMult[6] *= 2;
      dimBoostReq += 15;
      document.getElementById("dimShiftReq").innerText = "Req: " + dimBoostReq + " 8th Dimensions";
      points = 10;
      costs = [10, 100, 10000, 1e6, 1e9, 1e13, 1e18, 1e24];
      dims = [0, 0, 0, 0, 0, 0, 0, 0];
      purDims = [0, 0, 0, 0, 0, 0, 0, 0];
      dimMult = [1, 1, 1, 1, 1, 1, 1, 1];
      tickspeed = 1;
      tickCost = 1000;
    }
  }
  if (dimShifts >= 7) {
    if (dims[7] >= dimBoostReq) {
      dimShifts++;
      boostDimMult[0] *= 2;
      boostDimMult[1] *= 2;
      boostDimMult[2] *= 2;
      boostDimMult[3] *= 2;
      boostDimMult[4] *= 2;
      boostDimMult[5] *= 2;
      boostDimMult[6] *= 2;
      boostDimMult[7] *= 2;
      dimBoostReq += 15;
      document.getElementById("dimShiftReq").innerText = "Req: " + dimBoostReq + " 8th Dimensions";
      points = 10;
      costs = [10, 100, 10000, 1e6, 1e9, 1e13, 1e18, 1e24];
      dims = [0, 0, 0, 0, 0, 0, 0, 0];
      purDims = [0, 0, 0, 0, 0, 0, 0, 0];
      dimMult = [1, 1, 1, 1, 1, 1, 1, 1];
      tickspeed = 1;
      tickCost = 1000;
    }
  }

}


function galaxy() {
  if (dims[8] >= galaxyReq) {
    points = 10;
    costs = [10, 100, 10000, 1e6, 1e9, 1e13, 1e18, 1e24];
    dims = [0, 0, 0, 0, 0, 0, 0, 0];
    purDims = [0, 0, 0, 0, 0, 0, 0, 0];
    dimMult = [1, 1, 1, 1, 1, 1, 1, 1];
    boostDimMult = [1, 1, 1, 1, 1, 1, 1, 1];
    tickspeed = 1;
    tickCost = 1000;
    dimShifts = 0;
    dimBoostReq = 10;
    galaxyReq += 30;
  }
}

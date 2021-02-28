sites = localStorage.getItem("sites");
timeOfSites = localStorage.getItem("timeofSite");
sites = sites.split(",")

timeOfSites = timeOfSites.split(",")


//document.getElementById("test").innerHTML = sites;
//document.getElementById("test2").innerHTML = timeOfSites;
for (var i = 0; i < timeOfSites.length; i++) {
  timeOfSites[i] = parseFloat(timeOfSites[i]);
}
  console.log("time spent on each site: ", timeOfSites)
allTime = 0;
for(var i = 0; i < timeOfSites.length; i++){
 allTime = allTime + timeOfSites[i];
}
console.log(allTime);

precent=[];

for(var i = 0; i < timeOfSites.length; i++){
  var localPrecent = (timeOfSites[i]/allTime)*100;
  localPrecent = parseInt(localPrecent)
  precent.push(localPrecent);
  
}
console.log(precent.length)
dataPoints = "";

for (var i = 0; i < precent.length; i++) {
  if(i === precent.length-1){
      dataPoints = dataPoints+'{"y": ' + precent[i] + ', "label": "' + sites[i] + '"}';
  } else {
    dataPoints = dataPoints+'{"y": ' + precent[i] + ', "label": "' + sites[i] + '"},';
  }
  // dataPoints = "{y: " + precent[i] + ", label: '" + sites[i] + "'},\n" + dataPoints;
  // dataPoints[i] = JSON.parse(dataPoints[i]);
  console.log(typeof dataPoints[i]);
}

console.log(dataPoints);

presetData ='{"animationEnabled": true, "title": { "text": "Time spent on websites"}, "data": [{"type": "pie", "startAngle": 33, "indexLabel": "{label} {y}", "dataPoints": [ ' + dataPoints + ' ]}]}';

console.log("This is start of parsing JSON")
console.log(presetData)
presetData = JSON.parse(presetData);
console.log("This is end of parsing JSON")
console.log(typeof presetData);

window.onload = function() {

  var chart = new CanvasJS.Chart("chartContainer", presetData);
  chart.render();
  
}


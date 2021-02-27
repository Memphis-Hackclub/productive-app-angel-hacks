/*let website0 = document.getElementById('website'); 
localStorage.website0 = website0;
document.getElementById("test3").innerHTML = localStorage.website0;*/



chrome.tabs.query({active: true, lastFocusedWindow: true}, tabs => {
    let Adreess = tabs[0].url;
    
    var link = String(tabs[0].url);
    var homePage = '<h1>Add Website Monitors</h1><form>How goal crushing is this website?<input type="link" id="website"></input><select id="type" name="type"><option value="1">I will be fine</option><option value="2">Prabably an issue</option><option value="3">I will die looking at this website</option></select><br></form>';
    document.getElementById("test").innerHTML = link;
    if(link=="https://www.amazon.com/"){
        document.getElementById("content").innerHTML = '<h1>Add Website Monitors</h1><form>How goal crushing is this website?<input type="link" id="website"></input><select id="type" name="type"><option value="1">I will be fine</option><option value="2">Prabably an issue</option><option value="3">I will die looking at this website</option></select><br></form>';
    }
    if (link=="https://www.youtube.com/"){
        var date = new Date();
        var oldtime = date.getTime();
        var myVar = setInterval(myTimer, 1000);
        document.getElementById("content").innerHTML = myVar;
        var timespent = myVar - oldtime;
        document.getElementById("test").innerHTML = timespent;
    }

});


function myTimer() {
    var date = new Date();
    var newtime = date.getTime();
    newtime = newtime/1000;
    document.getElementById("test3").innerHTML = newtime;
    return newtime

    }
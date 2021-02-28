/*let website0 = document.getElementById('website'); 
localStorage.website0 = website0;
document.getElementById("test3").innerHTML = localStorage.website0;*/

excute = document.getElementById("excute");
excute.addEventListener('click', getData);

// chrome.tabs.query({active: true, lastFocusedWindow: true}, tabs => {
//     let Adreess = tabs[0].url;
    
//     var link = String(tabs[0].url);
//     var homePage = '<h1>Add Website Monitors</h1><form>How goal crushing is this website?<input type="link" id="website"></input><select id="type" name="type"><option value="1">I will be fine</option><option value="2">Prabably an issue</option><option value="3">I will die looking at this website</option></select><br></form>';
//     document.getElementById("test").innerHTML = link;
//     if(link=="https://www.amazon.com/"){
//         document.getElementById("content").innerHTML = '<h1>Add Website Monitors</h1><form>How goal crushing is this website?<input type="link" id="website"></input><select id="type" name="type"><option value="1">I will be fine</option><option value="2">Prabably an issue</option><option value="3">I will die looking at this website</option></select><br></form>';
//     }
//     if (link=="https://www.youtube.com/"){
//         var date = new Date();
//         oldtime = date.getTime();
//         oldtime = oldtime/1000;
//         var myVar = setInterval(myTimer, 1000);
//         document.getElementById("content").innerHTML = myVar;
//         var timespent = myVar - oldtime;
//         document.getElementById("test").innerHTML = timespent;
//     }

// });


// function myTimer() {
//     var date = new Date();
//     newtime = date.getTime();
//     newtime = newtime/1000;
//     realtime = newtime-oldtime;
//     document.getElementById("test2").innerHTML = "You have been here for " + realtime;
//     return newtime
    
//     }


    function getData() {
        //info for first website
        time1 = document.getElementById("time").value;
        website1 = document.getElementById("website").value;
        level1 = document.getElementById("type").value;
        alert(website1);
        localStorage.setItem("time1", time);
        localStorage.setItem("website1", website1);
        localStorage.setItem("level1", level1);
      
        //info for second website
        time2 = document.getElementById("time2").value;
        website2 = document.getElementById("website2").value;
        level2 = document.getElementById("type2").value;
        localStorage.setItem("time2", time2);
        localStorage.setItem("website2", website2);
        localStorage.setItem("level2", level2);
        
        //info for third website
        time3 = document.getElementById("time3").value;
        website3 = document.getElementById("website3").value;
        level3 = document.getElementById("type3").value;
        localStorage.setItem("time3", time3);
        localStorage.setItem("website3", website3);
        localStorage.setItem("level3", level3);
        
        var websiteDummy = localStorage.getItem("website1");
        document.getElementById("test").innerHTML = websiteDummy;
      
      }

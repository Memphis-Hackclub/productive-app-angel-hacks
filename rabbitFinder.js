

storage = window.localStorage;
sites = [];
fistrun = true;
timeOfSites = window.localStorage;
oldTimeHolder = window.localStorage;
siteStorgaeTime = window.localStorage;





oldTime()
function oldTime(){
   if(fistrun == true && oldTimeHolder.length != 0){
    oldtime = parseInt(oldTimeHolder.getItem("oldtime"))
    oldtime = oldtime/1000;
    var myVar = setTimeout(myTimer, 1000);
    timespent = myVar - oldtime;
    fistrun = false;
   }
   else{
    var date = new Date();
    oldtime2 = date.getTime();
    oldTimeHolder.setItem("oldtime",String(oldtime2));
    oldtime = parseInt(oldTimeHolder.getItem("oldtime"))
    oldtime = oldtime/1000;
    var myVar = setTimeout(myTimer, 1000);
    timespent = myVar - oldtime;
   }  
}
function myTimer() {
    var date = new Date();
    newtime = date.getTime();
    newtime = newtime/1000;
    realtime = Math.abs(newtime-oldtime);

    
    
    main();
    return newtime  
    }
function include(arr, obj) {
    for (var i = 0; i < arr.length; i++) {
      if (arr[i] == obj) return true;
    }
  }
  
function url_domain(data) {
    var    a      = document.createElement('a');
           a.href = data;
    return a.hostname;
  }

    
function main(){

chrome.tabs.query({active: true, lastFocusedWindow: true}, tabs => {

    let Adreess = String(url_domain(tabs[0].url));
   
  
    
    storage.setItem(String(storage.length),Adreess);
    for(var i = 0; i < storage.length; i++){
       
            var website = storage.getItem(String(i));
            if(!include(sites, website)){
                if(website != null){
                sites.push(website)
                

        }
    }
}
    
        if(timeOfSites.getItem(Adreess) != undefined && timeOfSites.getItem(Adreess) != "NaN"){
           
            noldtimer = parseInt(timeOfSites.getItem(String(Adreess)))
            timeOfSites.setItem(String(Adreess),String(noldtimer+realtime))   
        }
        else{
            timeOfSites.setItem(String(Adreess),"0");
        } 
        

    specialSites = ["www.youtube.com"]
    
    for(var i = 0; i <= specialSites.length; i++){
        
        amount = parseInt(timeOfSites.getItem(String(specialSites[i])))
        
        if(amount > 1 && include(specialSites, Adreess)){
            alert('hello')
        }
    }
    
    oldTime();
});


}

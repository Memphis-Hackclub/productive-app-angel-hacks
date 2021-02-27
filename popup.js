chrome.tabs.query({active: true, lastFocusedWindow: true}, tabs => {
    let Adreess = tabs[0].url;
    
    var link = String(tabs[0].url);
    document.getElementById("test").innerHTML = link;
    if (link=="https://www.youtube.com/"){
        document.getElementById("test2").innerHTML = link;
    }
    else{
        document.getElementById("test2").innerHTML = "nope";
    }
    
});

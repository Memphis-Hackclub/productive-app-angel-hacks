chrome.tabs.query({active: true, lastFocusedWindow: true}, tabs => {
    let Adreess = tabs[0].url;
    document.getElementById("submit").innerHTML = Adreess;
    
});

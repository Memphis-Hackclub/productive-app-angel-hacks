

excute = document.getElementById("excute");
excute.addEventListener('click', getData);




    function getData() {
        //info for first website
        time1 = document.getElementById("time").value;
        website1 = document.getElementById("website").value;
        level1 = document.getElementById("type").value;
        alert(website1);
        localStorage.setItem("time4", time1);
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
        
        var website1Dummy = localStorage.getItem("time4");
        document.getElementById("test").innerHTML = website1Dummy;
        var website2Dummy = localStorage.getItem("time2");
        document.getElementById("test2").innerHTML = website2Dummy;
        var website3Dummy = localStorage.getItem("time3");
        document.getElementById("test3").innerHTML = website3Dummy;


      
      }
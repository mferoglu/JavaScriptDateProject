    let foo = prompt('Type here');
    document.getElementById("myName").innerHTML = ""+foo;
    doDate();
    setInterval(doDate, 1000);
    function doDate()
    	{	
            var last_date = "";
            var days = new Array("Pazar", "Pazartesi", "Salı", "Çarşamba", "Perşembe", "Cuma", "Cumartesi");
            var time = new Date();
            let hour =  time.getHours();
            let minute =  time.getMinutes();
            let second =  time.getSeconds();

            if(hour<10)
              {
                  hour = "0"+time.getHours();
              }
            if(minute<10)
              {
                  minute = "0"+time.getMinutes();
              }
            if(second<10)
              {
                  second = "0"+time.getSeconds();
              }

            last_date += "" + hour +":" + minute + ":" + second + " "+ days[time.getDay()];
            document.getElementById("myClock").innerHTML = last_date;
	
		if(hour>=4 && hour <= 10)
              {
                  document.getElementById("partOfDay").innerHTML = "Sabah";
		  document.getElementById("part").src = "img/sabah.png";	  
              }
		else if(hour>=11 && hour <=20)
              {
                  document.getElementById("partOfDay").innerHTML = "Öğle";
		  document.getElementById("part").src = "img/ogle.png";
              }
		else if(hour>=21 || hour <4)
              {
                  document.getElementById("partOfDay").innerHTML = "Akşam";
		  document.getElementById("part").src = "img/gece.png";        
	      }
    	

	}


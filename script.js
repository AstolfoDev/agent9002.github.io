function tommyfunction(){
  $('#tommy').css('opacity', 0);
  setTimeout(function(){ document.getElementById("tommy").textContent = "@agent#7574";$('#tommy').css('opacity', 1);}, 450);
}

function casper(){
  $('#casper').css('opacity', 0);
  setTimeout(function(){ document.getElementById("casper").textContent = "@Stigma#1310";$('#casper').css('opacity', 1);}, 450);
}

function nate(){
  $('#nate').css('opacity', 0);
  setTimeout(function(){ document.getElementById("nate").textContent = "@natejb2003#5242";$('#nate').css('opacity', 1);}, 450);
}

function tommyimage() {

        if (document.getElementById("tommy1").src == "https://i.postimg.cc/SKjk56pS/ACCA2168-414-D-44-E5-899-C-4-A46073-AF89-D.jpg") 
        {
            document.getElementById("tommy1").src = "assets/img/original.gif";
            tommy1.height = 160;
            tommy1.width = 160;
        }
        else 
        {
            document.getElementById("tommy1").src = "https://i.postimg.cc/SKjk56pS/ACCA2168-414-D-44-E5-899-C-4-A46073-AF89-D.jpg";
        }
    }
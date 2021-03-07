var names=["Gurpreet Singh",
           "Harsimranjeet Kaur",
           "Harjinder Singh",
           "Gurjeet Kaur"];
var imgs=["Father.jpg",
          "mother..jpg",
          "Grandfather.jpg",
          "Grandmotherimg.jpg"];
          var i = 0;
function nextfc(){
      i++;
      var noofmem=5;
      if (i > noofmem) {
          i=0;
      } 
      var uplimg=imgs[i];
      var uplname=names[i];
        document.getElementById("name").innerHTML = uplname;
        document.getElementById("album").src = uplimg;
     }

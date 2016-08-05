var clickme = document.getElementById('clickme');

var first = document.getElementById('first-screen');
var second = document.getElementById('second-screen');
var third = document.getElementById('third-screen');
var forth = document.getElementById('forth-screen');

clickme.addEventListener('click', function() {
      first.style.display = "none";

      second.style.display = "block";


});


/*function toggleDisplay(elmt)
{
   if(typeof elmt == "string")
      elmt = document.getElementById(elmt);
   if(elmt.style.display == "none")
      elmt.style.display = "";
   else
      elmt.style.display = "none";
}*/

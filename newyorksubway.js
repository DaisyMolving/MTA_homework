
var lineL = ["8thL", "6thL", "Union Square", "3rdL", "1stL"]; 
var lineSix = ["Grand Central6", "33rd6", "28th6", "23rd6", "Union Square", "Astor Place6"];
var lineN = ["Times SquareN", "34th", "28thN", "23rdN", "Union Square", "8thN"];

{
  var originStation = prompt("Please type the station that you will catch the train from:");
  var destinationStation = prompt("Please type the station that you want to go to:");
}

//if (originStation === "8thL" && destinationStation === "6thL") {alert("1 stop")}

//   if (lineL.indexOf(originStation) - lineL.indexOf(destinationStation) === Math.abs(1)){
//     alert("1 stop");
// } else if (lineL.indexOf(originStation) - lineL.indexOf(destinationStation) === Math.abs(2)) {
//   alert("2 stops");
// } else if (lineL.indexOf(originStation) - lineL.indexOf(destinationStation) === Math.abs(3)) {
//   alert("3 stops");
// }

//console.log(lineL.length);
//console.log(lineSix.length);
//console.log(lineN.length);

var result = Math.abs(lineL.indexOf(originStation) - lineL.indexOf(destinationStation)); {
  alert(result);
}


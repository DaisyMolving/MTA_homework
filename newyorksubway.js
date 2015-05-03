
var lineL = ["8thL", "6thL", "Union Square", "3rdL", "1stL"]; 
var lineSix = ["Grand Central6", "33rd6", "28th6", "23rd6", "Union Square", "Astor Place6"];
var lineN = ["Times SquareN", "34thN", "28thN", "23rdN", "Union Square", "8thN"];

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

//on line L union square is at index position 2
var resultLineL = Math.abs(lineL.indexOf(originStation) - lineL.indexOf(destinationStation)); 

//on line 6 union square is at index position 4
var resultLineSix = Math.abs(lineSix.indexOf(originStation) - lineSix.indexOf(destinationStation)); 

//on line N union square is at index position 4
var resultLineN = Math.abs(lineN.indexOf(originStation) - lineN.indexOf(destinationStation)); {

alert(resultLineL + resultLineSix + resultLineN + " stops");
 
}

//if the journey does not pass through union square then 


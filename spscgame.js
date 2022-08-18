const You= prompt("Enter any one of this: stone,paper,scissor");
console.log("your chioce:"+ You);
console.log("Opponent choice:")
let Opponent=Math.floor(Math.random() * 3);
if (Opponent==0){
Opponent="stone";
}
else if (Opponent==1) {
Opponent="paper";
}
else {
Opponent="scissor";
}
console.log(Opponent);if (You==Opponent)
{
console.log("bothwins!");
}
else if(You=="stone"&&Opponent=="paper"){
console.log("Opponent wins!");
}
else if(You=="stone"&&Opponent=="scissor"){
console.log("You wins!");
}
else if(You=="paper"&&Opponent=="scissor"){
console.log("Opponent wins!");
}
else if(You=="paper"&&Opponent=="stone"){
console.log("You wins!");
}
else if(You=="scissor"&&Opponent=="paper"){
console.log("You wins!");
}
else if(You=="scissor"&&Opponent=="stone"){
console.log("Opponent wins!");
}
else{
console.log("please enter a valid input");
}
var frontCard = process.argv[2];
var backCard = process.argv[3];

function Flashcard (front, back) {
    this.front = front;
    this.back = back;
}


var firstCard = new Flashcard (frontCard, backCard); 

console.log(firstCard);
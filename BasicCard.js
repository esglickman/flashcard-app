var theArray = [];

var frontCard = process.argv[2];
var backCard = process.argv[3];

function Flashcard (front, back) {
    this.front = front;
    this.back = back;
    //function to push constructor to array
    this.addToArray = function(){
       
        theArray.push(frontCard, backCard);
    };

    this.addToArray();
}

//make sure the arguements are being taken
var firstCard = new Flashcard (frontCard, backCard); 

console.log(firstCard);


console.log(theArray);

//Run through the created Array
for (var i = 0; i < theArray.length; i++) {
    
    console.log(theArray[i]);
    
}

//need to us the FS to save the array
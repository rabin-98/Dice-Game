

    var randomNumber1 = Math.floor(Math.random()*6) + 1;

    var randomDiceImage= "dice"+ randomNumber1+ ".png";   // this will store a random dice image in between dice1- dice6;
    
    var randomImageSource = "images/" + randomDiceImage; // this will act as images/randomDiceImage as images/anyrandom dicepic. 
                                                            // we'll get images/dice1.png- images/dice6.png;
        
    var image1= document.querySelectorAll("img")[0];
    
    image1.setAttribute("src",randomImageSource);


    // for the 2nd dice.

    var randomNumber2= Math.floor(Math.random()*6) + 1;

    var randomDiceImage2 ="dice"+ randomNumber2+ ".png";
    
    var randomImageSource2= "images/"+ randomDiceImage2;

    //    we can omit the image1 variable and write the querySelectorAll in one line as :

    document.querySelectorAll("img")[1].setAttribute("src",randomImageSource2);

    // Player 1 wins  


    if(randomNumber1 > randomNumber2) {
        document.querySelector("h1").innerHTML= " 🚩 Player 1 Wins!";
    }
    
    else if(randomNumber2 > randomNumber1) {
        document.querySelector("h1").innerHTML= " 🚩 Player 2 Wins!";
    }

    else {
        document.querySelector("h1").innerHTML= " 😀 It's a  Draw ! "
    }







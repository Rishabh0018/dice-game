  function noGenerator(){
    return Math.floor((Math.random()*6)+1);
  }
  var randomNo1 =noGenerator();
  
    
switch(randomNo1) {
    case 1:
        document.querySelector(".img1").setAttribute("src","images/dice1.png");
      break;
    case 2:
      // code block
      document.querySelector(".img1").setAttribute("src","images/dice2.png");
      break;

    case 3:
      // code block
      document.querySelector(".img1").setAttribute("src","images/dice3.png");
      break;
    case 4:
        // code block
        document.querySelector(".img1").setAttribute("src","images/dice4.png");
        break;  

    case 5:
            // code block
            document.querySelector(".img1").setAttribute("src","images/dice5.png");
            break;
    case 6:
                // code block
                document.querySelector(".img1").setAttribute("src","images/dice6.png");
                break;
      

      // code block
  } 
  var randomNo2 =noGenerator();

  switch(randomNo2) {
    case 1:
        document.querySelector(".img2").setAttribute("src","images/dice1.png");
      break;
    case 2:
      // code block
      document.querySelector(".img2").setAttribute("src","images/dice2.png");
      break;

    case 3:
      // code block
      document.querySelector(".img2").setAttribute("src","images/dice3.png");
      break;
    case 4:
        // code block
        document.querySelector(".img2").setAttribute("src","images/dice4.png");
        break;  

    case 5:
            // code block
            document.querySelector(".img2").setAttribute("src","images/dice5.png");
            break;
    case 6:
                // code block
                document.querySelector(".img2").setAttribute("src","images/dice6.png");
                break;
      

      // code block
  } 
  if(randomNo1>randomNo2)
  document.querySelector("h1").innerHTML="<span>🚩</span>Player 1 Won";
  else if(randomNo1<randomNo2)
  document.querySelector("h1").innerHTML="Player 2 Won<span>🚩</span>";
  else
  document.querySelector("h1").innerHTML="Draw";

 
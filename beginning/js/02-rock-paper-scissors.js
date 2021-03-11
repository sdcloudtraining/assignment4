let userChoice = prompt ("Enter Users Choice Rock, Paper, or Scissors");

userChoice.toLowerCase;

if (userChoice = "rock") { userVal ==1; }
else if (userChoice = "paper") { userVal ==2; }
else if (userChoice = "scissors") { userVal ==3; }
else {alert("Enter the words Rock, Paper, or Scissors only, Try Again"); setTimeout(function(){window.location.reload();}, 5000);}



var computerChoice = Math.floor(Math.random() * 3);

if (computerChoice = 0) { computerVal ==1; }
else if (userChoice = 1) { computerVal ==2; }
else if (userChoice = 2) { computerVal ==3; }



if (userChoice > computerChoice){alert("You Win")}
else if (comptuerChoice > userChoice){alert("Computer Wins")}
else if (userChoice == computerChoice){alert("Tie, Try Again"); setTimeout(function(){window.location.reload();}, 5000);}

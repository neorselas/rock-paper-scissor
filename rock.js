var humanScore = 0;
var computerScore = 0;

function playRock() {play("Rock");}
function playPaper() {play("Paper");}
function playScissors() {play("Scissors");}


function getComputerPlay() {
  var plays = ['Rock', 'Paper', 'Scissors'];
  var play = plays[Math.floor(Math.random() * plays.length)];
  return play;
}

function play(humanPlay) {
  
  computerPlay = getComputerPlay();
  document.getElementById('status').innerHTML = "<p>You played <strong>" + humanPlay + "</strong>. The Computer played <strong>" + computerPlay + "</strong>.</p>";
    
  if(humanPlay == 'Rock') {
    if(computerPlay == 'Rock') {
      document.getElementById('status').innerHTML += "<p><strong>It's a Tie. </strong></p>";
    } else if (computerPlay == 'Paper') {
      document.getElementById('status').innerHTML += "<p><strong>You Lose.  </strong></p>";
      computerScore++;
    } else if (computerPlay == 'Scissors') {
      document.getElementById('status').innerHTML += "<p><strong>You Win!  </strong></p>";
      humanScore++;
    }
    
  } else if (humanPlay == 'Paper') {
    if(computerPlay == 'Rock') {
      document.getElementById('status').innerHTML += "<p><strong>You Win! </strong></p>";
      humanScore++;
    } else if (computerPlay == 'Paper') {
      document.getElementById('status').innerHTML += "<p><strong>It's a Tie. </strong></p>";
    } else if (computerPlay == 'Scissors') {
      document.getElementById('status').innerHTML += "<p><strong>You Lose. </strong></p>";
      computerScore++;
    }  
  } else if (humanPlay == 'Scissors') {
    if(computerPlay == 'Rock') {
      document.getElementById('status').innerHTML += "<p><strong>You Lose. </strong></p>";
      computerScore++;
    } else if (computerPlay == 'Paper') {
      document.getElementById('status').innerHTML += "<p><strong>You Win! </strong></p>";
      humanScore++;
    } else if (computerPlay == 'Scissors') {
      document.getElementById('status').innerHTML += "<p><strong>It's a Tie. </strong></p>";
    }  
  }
    
  document.getElementById('humanScore').innerHTML = humanScore;
  document.getElementById('computerScore').innerHTML = computerScore;
  gamehistory.innerHTML += `You: <b>${humanPlay}</b>  vs.  Computer: <b>${computerPlay}</b>` + '<br>'+ '<br>';

}




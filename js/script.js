var diceNumber;
function getComputerChoice() {
  var randomNumber = Math.floor(Math.random() * 6);
  switch (randomNumber) {
    case 0:
      diceNumber = "1";
      return '1';
      break;
    case 1:
      diceNumber = "2";
      return '2';
      break;
    case 2:
      diceNumber = "3";
      return '3';
      break;
    case 3:
      diceNumber = "4";
      return '4';
      break;
    case 4:
      diceNumber = "5";
      return '5';
      break;
    case 5:
      diceNumber = "6";
      return '6';
      break;
    default:
      console.log("Uh oh!");
  }
};

function displayUserScore() {
  getComputerChoice();
  document.getElementById("outputbox").innerHTML = diceNumber;
};

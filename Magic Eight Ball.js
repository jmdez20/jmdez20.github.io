let userName = ""; // Input your name
userName === "" // Put your name here too
  ? console.log(`Hello ${userName}!`)
  : console.log("Hello!");
let userQuestion = ""; // Input the question you want to ask
console.log(`${userName}, you asked: ${userQuestion}`);
let randomNumber = Math.floor(Math.random() * 8);
let eightBall = "";
switch (randomNumber) {
  case 0:
    eightBall = "It is most certain";
    break;
  case 1:
    eightBall = "It is decidedly so";
    break;
  case 2:
    eightBall = "Reply hazy try again";
    break;
  case 3:
    eightBall = "Cannot predict now";
    break;
  case 4:
    eightBall = "Do not count on it";
    break;
  case 5:
    eightBall = "My sources say no";
    break;
  case 6:
    eightBall = "The outlook is not so good";
    break;
  case 7:
    eightBall = "Signs point to yes!";
    break;
    defualt: eightBall = "Error occured, not enough magic";
}

console.log(`The magic Eight Ball says: ${eightBall}`);

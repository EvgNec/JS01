


function getDiscount(totalSpent) {
  const BASE_DISCOUNT = 0;
  const BRONZE_DISCOUNT = 0.02;
  const SILVER_DISCOUNT = 0.05;
  const GOLD_DISCOUNT = 0.1;
  let discount;
  // Change code below this line
if (totalSpent>=50000) {
  discount=GOLD_DISCOUNT;
} else if(totalSpent>=20000){
  discount=SILVER_DISCOUNT;
}
  else if(totalSpent>=5000){
  discount=BRONZE_DISCOUNT;
}
  else {
  discount=BASE_DISCOUNT;
}
  // Change code above this line
  return discount;
}
function checkPassword(password) {
  const ADMIN_PASSWORD = "jqueryismyjam";
  let message;
  // Change code below this line
message= password===ADMIN_PASSWORD ? "Access is allowed":"Access denied, wrong password!";
  // Change code above this line
  return message;
}

function checkPassword(password) {
  const ADMIN_PASSWORD = "jqueryismyjam";
  let message;
  // Change code below this line
switch (password){
  case null:
    message = "Canceled by user!";
    break;
  case ADMIN_PASSWORD:
        message = "Welcome!";
    break;
  default:
    message = "Access denied, wrong password!";
}
  // Change code above this line
  return message;
}
function getSubscriptionPrice(type) {
  let price;
  // Change code below this line

 switch (type) { // Change this line
    case "starter":// Change this line
      price = 0; // Change this line
      break;

    case "professional":// Change this line
      price = 20; // Change this line
      break;

    case "organization":// Change this line
      price = 50; // Change this line
      break;
  }

  // Change code above this line
  return price;
}
function checkPassword(password) {
  const ADMIN_PASSWORD = "jqueryismyjam";
  let message;
  // Change code below this line
switch (password){
  case null:
    message = "Canceled by user!";
    break;
  case ADMIN_PASSWORD:
        message = "Welcome!";
    break;
  default:
    message = "Access denied, wrong password!";
}
  // Change code above this line
  return message;
}

function getNameLength(name) {
  const message = `Name ${name} is ${(name.length)} characters long`; // Change this line

  return message;
}

const courseTopic = "JavaScript essentials";
// Change code below this line

const courseTopicLength = courseTopic.length;
const firstElement = courseTopic[0];
const lastElement = courseTopic[courseTopic.length - 1];

function getSubstring(string, length) {
  const substring = string.slice(0,length); // Change this line

  return substring;
}
function formatMessage(message, maxLength) {
  let result;
  // Change code below this line
if (message.length<=maxLength) {
  result=message;  
} else {
  result=message.slice(0,maxLength)+'...';
}
  /// Change code above this line
  return result;
}

function normalizeInput(input) {
  const normalizedInput = input.toLowerCase(); // Change this line
    const normalizedInputUp = input.toUpperCase();
  return normalizedInput;
}


function checkForName(fullName, name) {
 const result = fullName.includes(name); // Change this line
  return result;
}


function checkForSpam(message) {
  let result;
  // Change code below this line
  message=message.toUpperCase();
result = message.includes("SPAM") || message.includes("SALE");
  // Change code above this line
  return result;
}
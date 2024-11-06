let myBalance = 20000;
let myPin = 1234;

function startTransaction() {
  document.getElementById("insert-card").style.display = "none";
  document.getElementById("language-selection").style.display = "block";
}

function setLanguage() {
  const language = document.getElementById("language").value;
  alert(`You have selected: ${language}`);
  document.getElementById("language-selection").style.display = "none";
  document.getElementById("pin-entry").style.display = "block";
}

function verifyPin() {
  const pin = document.getElementById("pin").value;
  if (pin == myPin) {
    alert("Pin code is correct!");
    document.getElementById("pin-entry").style.display = "none";
    document.getElementById("account-type-selection").style.display = "block";
  } else {
    alert("Incorrect pin number");
  }
}

function selectAccountType() {
  const accountType = document.getElementById("account-type").value;
  alert(`You have selected: ${accountType} account`);
  document.getElementById("account-type-selection").style.display = "none";
  document.getElementById("transaction-options").style.display = "block";
}

function fastCash() {
  document.getElementById("transaction-options").style.display = "none";
  document.getElementById("fast-cash").style.display = "block";
}

function processFastCash() {
  const amount = parseInt(document.getElementById("amount").value);
  if (amount > myBalance) {
    alert("Insufficient balance");
  } else {
    myBalance -= amount;
    alert(`${amount} withdrawn successfully! Remaining balance: ${myBalance}`);
  }
  document.getElementById("fast-cash").style.display = "none";
  document.getElementById("transaction-options").style.display = "block";
}

function withdraw() {
  document.getElementById("transaction-options").style.display = "none";
  document.getElementById("withdraw-amount").style.display = "block";
}

function processWithdraw() {
  const amount = parseInt(document.getElementById("withdraw").value);
  if (amount > myBalance) {
    alert("Insufficient balance");
  } else {
    myBalance -= amount;
    alert(`${amount} withdrawn successfully! Remaining balance: ${myBalance}`);
  }
  document.getElementById("withdraw-amount").style.display = "none";
  document.getElementById("transaction-options").style.display = "block";
}

function checkBalance() {
  document.getElementById(
    "balance-text"
  ).innerText = `Your balance is: ${myBalance}`;
  document.getElementById("balance-display").style.display = "block";
}

function exitATM() {
  alert("Thank you for using the ATM. Goodbye!");
  location.reload(); // Reload to reset the interface
}

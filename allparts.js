console.log('bank-project');
// log In Js 
document.getElementById('btn-submit').addEventListener('click', function () {
  const emailField = document.getElementById('user-email');
  const email = emailField.value;
  const passwordField = document.getElementById('user-password');
  const password = passwordField.value;
  if (email === 'sohrabuddint@gmail.com' && password === 'secret') {
    window.location.href = 'bank.html';
  }
  else {
    alert('invalid password');
  }
})

// JS for Deposit, balance and Withdraw Section 

document.getElementById('btn-deposit').addEventListener('click', function () {
  const depositField = document.getElementById('deposit-field');
  const newDepositAmountString = depositField.value;
  const newDepositAmount = parseFloat(newDepositAmountString);
  depositField.value;

  const depositTotalElement = document.getElementById('deposit-total');
  const previousDepositTotalString = depositTotalElement.innerText;
  const previousDepositTotal = parseFloat(previousDepositTotalString);
  const newDepositTotal = previousDepositTotal + newDepositAmount;
  depositTotalElement.innerText = newDepositTotal;

  const balanceTotalElement = document.getElementById('balance-total');
  const previousBalanceTotalString = balanceTotalElement.innerText;
  const previousBalanceTotalAmount = parseFloat(previousBalanceTotalString);

  const newBalanceTotal = previousBalanceTotalAmount + newDepositAmount;
  balanceTotalElement.innerText = newBalanceTotal;
})

// withdraw Js 

document.getElementById('btn-withdraw').addEventListener('click', function () {
  const withdrawField = document.getElementById('withdraw-field');
  const newWithdrawAmountString = withdrawField.value;
  const newWithdrawAmount = parseFloat(newWithdrawAmountString);
  withdrawField.value = '';

  const withdrawTotalElement = document.getElementById('withdraw-total');
  const previousWithdrawTotalString = withdrawTotalElement.innerText;
  const previousWithdrawTotal = parseFloat(previousWithdrawTotalString);

  const newWithdrawTotal = previousWithdrawTotal + newWithdrawAmount;
  withdrawTotalElement.innerText = newWithdrawTotal;

  const balanceElement = document.getElementById('balance-total');
  const previousBalanceTotalString = balanceElement.innerText;
  const previousBalanceTotal = parseFloat(previousBalanceTotalString);

  const newBalanceTotal = previousBalanceTotal - newWithdrawAmount;
  balanceElement.innerText = newBalanceTotal;

})




// function for Deposit, balance and Withdraw Section

// function getInputFieldValueById(inputFieldId) {
//   const inputField = document.getElementById(inputFieldId);
//   const inputFieldValueString = inputField.value;
//   const inputFieldValue = parseFloat(inputFieldValueString);
//   inputField.value = "";
//   return inputFieldValue;
// }

// function getTextElementValueById(elementId) {
//   const textElement = document.getElementById(elementId);
//   const textElementValueString = textElement.innerText;
//   const textElementValue = parseFloat(textElementValueString);
//   return textElementValue;
// }

// function setTextElementValueById(elementId, newValue) {
//   const textElement = document.getElementById(elementId);
//   textElement.innerText = newValue;
// }

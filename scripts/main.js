//Take input(bill ammount) from user, make sure if it's a number
//Store the bill ammount in a variable
//Take feedback option from user
//Depending on the feedback option decide a percentage of tip ammount to be given
//Take input(no. of people) from user, make sure if it's a number
//Calculate the tip ammount
//Display the tip ammount


var button = document.querySelector('button');

var para1 = document.getElementById('para1');

var para2 = document.getElementById('para2');

var para3 = document.getElementById('para3');

document.getElementById('billAmount').focus();

function display(){
  var billAmount = document.getElementById('billAmount').value;
  var rating = document.getElementById('rating').value;
  if(billAmount == '' || rating == 0) {
    alert('Fields cannot be empty, try again!')
    return;
  }

  var noOfPeople = document.getElementById('noOfPeople').value;

  var tipAmount = (billAmount * rating);
  var totalBill = (1 * billAmount + tipAmount);

  para1.innerHTML = 'The tip amount is £' + tipAmount.toFixed(2);

  if(noOfPeople == 1 || noOfPeople == '') {
    para2.innerHTML = 'You can pay total £' + totalBill.toFixed(2);
  }
  else {
    var eachPay = (totalBill/noOfPeople);
    para2.innerHTML = 'Total bill amount = £' + totalBill.toFixed(2);
    para3.innerHTML = 'Each can pay £' + eachPay.toFixed(2);
  }
}

button.addEventListener('click', display);

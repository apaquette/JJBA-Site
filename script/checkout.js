/******************************************************************************
Final Assignment
Alexandre Paquette
Date: April 19, 2021
Class: CIS123
Program Description:
This script manages the checkout section of the Jojo's Bizzare Adventure wiki
homepage.
*******************************************************************************/
"use strict";

window.addEventListener("load", init);

function init(){
  calcOrder();
  var donateOptions = document.querySelectorAll('input[name="donate"]');
  //calculates the order when
  for(var x=0; x<donateOptions.length; x++){
    donateOptions[x].onclick = calcOrder;
  }
}

function calcOrder(){
  var donations = document.forms.donations;
  var donationCost = document.querySelector('input[name="donate"]:checked').value;
  donations.elements.subtotal.value = formatUSCurrency(parseFloat(donationCost,10),2);
  var transFee = donationCost*0.03;
  donations.elements.transactionFee.value = formatUSCurrency(transFee);
  var total = parseFloat(donationCost,10) + parseFloat(transFee,10);
  donations.elements.totalCost.value = formatUSCurrency(total);
}

function formatNumber(val, decimals) {
  return val.toLocaleString(undefined,{minimumFractionDigits: decimals, maximumFractionDigits: decimals});
}

function formatUSCurrency(val) {
	return val.toLocaleString('en-US', {style: "currency", currency: "USD"} );
}

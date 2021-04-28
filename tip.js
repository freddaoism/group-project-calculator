document.querySelector('#tip-form').onchange = function(){

    var bill = Number(document.getElementById('billTotal').value);
    var tip = document.getElementById('tipInput').value;
    document.getElementById('tipOutput').innerHTML = `${tip}%`;
    var diners = Number(document.getElementById('totalDiners').value);
    var tipValue = bill * (tip/100)
    var finalBill = bill + tipValue
    var totalPerDiner = finalBill / diners
  console.log(finalBill)
  var tipAmount = document.querySelector('#tipAmount')
  var totalBillWithTip = document.querySelector('#totalBillWithTip')
  
  
  console.log(totalPerDiner)
  tipAmount.value = tipValue.toFixed(3);
   totalBillWithTip.value =finalBill.toFixed(3);
    totalPerDiner.value =totalPerDiner.toFixed(3);
  
   //Show Results
   
    document.getElementById('results').style.display='block'
    
  }


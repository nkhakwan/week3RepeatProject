var mainFunction = function(yourNumber){
  var rangeVar = rangeGen(yourNumber);
  var result = stringInsertor(rangeVar);
return result; 
}



/// ============ rangeGen function =======================================


var rangeGen = function(aNumber){
  var rang = [];
  for (var i=0; i<(aNumber+1); i=i+1){
    rang.push(i);
    var rangg = rang.join();
  } 
  return rangg;
} 



/// ============== stringInsertor function ============================================
var stringInsertor = function(justNumbers){
  var storingArray =[];
  var splittedNumbers = justNumbers.split(',');
    for (var i = 0; i < splittedNumbers.length; i=i+1){
      var singleNumber = splittedNumbers[i];
      var singleSplitted = singleNumber.split('');
      var number3Found = false;
      var number2Found = false;
      var number1Found = false;
      var noNumberFound = false;
        for (var j=0; j<singleSplitted.length ; j= j+1){
          if (parseInt(singleSplitted[j]) === 3) {
            number3Found = true;
          } else if (parseInt(singleSplitted[j]) === 2) {
            number2Found = true;
            } else if (parseInt(singleSplitted[j]) === 1) {
              number1Found = true;
            } else {
                noNumberFound =true;
              }
        } 
      if (number3Found){
        storingArray[i] = "won't you be my neighbour!";
      } else if(number2Found){
          storingArray[i] = "Boop";
        } else if(number1Found){
            storingArray[i] = "Beep!";
          } else {
            storingArray[i] = splittedNumbers[i];
            } 
    }
    return storingArray;
}


//// =========== Jquery section ================================


$(document).ready(function() {
  $("form#inputAndOutput").submit(function(event){
     event.preventDefault();
     var yourNumber = parseInt($("#yourNumber").val());
     var finalResult = mainFunction(yourNumber);
     $("#output").text(finalResult);
     });
 });

/*var stringInsertor = function(justNumbers){
  var storingArray =[];
  var splittedNumbers = justNumbers.split(',');
  //alert (splittedNumbers);
    for (var i = 0; i < splittedNumbers.length; i=i+1){
      //alert(splittedNumbers.length);
      //var singleNumber = splittedNumbers[i].split(',');
      var singleNumber = splittedNumbers[i];
      var singleSplitted = singleNumber.split('');
     // alert(singleSplitted.length);
     // alert(singleSplitted);
      //alert(singleSplitted[0]);
      //alert(singleSplitted[1]);
      //alert(single)
        for (var j=0; j<singleSplitted.length ; j= j+1){
          //alert(j);
          //alert(singleSplitted[j]);
          if (parseInt(singleSplitted[j]) === 1) {
            storingArray[i] = "Beep!";
            //alert("first If" + singleSplitted[j]);
            break;
          } else if (parseInt(singleSplitted[j]) === 2) {
            //alert("second");
            storingArray[i] = "Boop!";
            break;
            } else if (parseInt(singleSplitted[j]) === 3) {
             // alert("third")
              storingArray[i] = "Won't you be my neighbour!";
              break
            } else {
              //alert("didn't entered");
                storingArray[i] = splittedNumbers[i];
              }
           //alert(storingArray);
        } //end of second for loop
          
    }// end of first for loop
    return storingArray;
}// end of function



//// ============== function lag insertor ===============================
var lagInsertor = function(justNumbers){
  var storingArray =[];
  var splittedNumbers = justNumbers.split(',');
    for (var i = 0; i < splittedNumbers.length; i=i+1){
      var singleNumber = splittedNumbers[i];
      var singleSplitted = singleNumber.split('');
     // alert(parseInt(singleSplitted[0]));
      //alert(parseInt(singleSplitted[1]));
      if ((parseInt(singleSplitted[0]) || parseInt(singleSplitted[1])) === 1 || parseInt((singleSplitted[0]) || parseInt(singleSplitted[1])) === 2 || parseInt((singleSplitted[0]) || parseInt(singleSplitted[1])) === 3){
        for (var j=0; j<singleSplitted.length ; j= j+1){
          var tempStorage;
          if (parseInt(singleSplitted[j]) === 1) {
            tempStorage = "Beep!";
          } else if (parseInt(singleSplitted[j]) === 2) {
            tempStorage = "Boop!";
            } else if (parseInt(singleSplitted[j]) === 3) {
              tempStorage = "won't you be my nieghbour!";
            } else {
              //alert("didn't entered");
                var field = field +1;
              }
              storingArray[i] = tempStorage;
        } //end of second for loop
        
    } else {
    storingArray[i] = splittedNumbers[i];
    }
    }// end of first for loop 
    return storingArray;
}// end of function*/






/*var stringInsertor = function(justNumbers){
  alert("i have entered");
  var storingArray =[];
  var splittedNumbers = justNumbers.split(',');
  //alert (splittedNumbers);
    for (var i = 0; i < splittedNumbers.length; i=i+1){
      //alert(splittedNumbers.length);
      //var singleNumber = splittedNumbers[i].split(',');
      var singleNumber = splittedNumbers[i];
      var singleSplitted = singleNumber.split('');
      //alert(singleSplitted);
      var number3Found = false;
      var number2Found = false;
      var number1Found = false;
      var noNumberFound = false;
      singleSplitted.forEach(function(eachNumber){
        if (eachNumber === 3){
          number3Found = true;
        } else if (eachNumber === 2){  
          number2Found = true;
          } else if (eachNumber === 1){
            number1Found = true;
            } else {
            noNumberFound = true;
              }
      });
      alert(number3Found);
      if (number3Found){
        storingArray[i] = "won't you be my neighbour!";
      } else if(number2Found){
          storingArray[i] = "Boop";
        } else if(number1Found){
            storingArray[i] = "Beep!";
          } else {
            storingArray[i] = splittedNumbers[i];
            } 
    }// end of first for loop
    return storingArray;
}// end of function*/









function displayBill(){
    var sel = document.getElementById('billamt').value; //getting the bill amount
    var numberPeople= document.getElementById('peopleamt').value; // getting the number of people
    var list = document.getElementById('serviceQual');
    var opt;
    len=list.options.length;
    for(var i=0; i<len ; i++ ){
        opt= list.options[i];
        if(opt.selected===true){
            break;
        }
    }
    var finalBill= parseFloat(sel) + parseFloat(sel*opt.value);
    var tip;
    if(numberPeople==1){
     tip= parseFloat(sel*opt.value);
    }else{
      tip= parseFloat((sel*opt.value)/numberPeople);
    }
    console.log("final bill is:   " + finalBill);
    console.log("final tip is:   " +tip);
    console.log("each tip is:     "+ tip);
    if(numberPeople>1){
        document.getElementById('each').innerHTML= "each";
        document.getElementById('tipID').innerHTML= tip;
    }else{
        document.getElementById('each').innerHTML= "";
        document.getElementById('tipID').innerHTML= tip;
    }
}





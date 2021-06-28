function getInputValue(){
    var inputVal = document.getElementById("myInput").value;
    if(inputVal%4!=0){
        alert("Its common year");
        debugger;
    }else if(inputVal%100!=0){
        alert("Its leap year");
    }
    else if(inputVal%400!=0){
        alert("its common year");
    }
    else{
        alert("its leap year");
    }
    

}
function myFunction() {
    var result = 0;
    var inputStudent = document.getElementById("inputStudent").value;
    var inputQuestion1 = document.getElementById("input1").value;
    var inputQuestion2 = document.getElementById("input2").value;
    var inputQuestion3 = document.getElementById("input3").value;
    var inputQuestion4 = document.getElementById("input4").value;
    var inputQuestion5 = document.getElementById("input5").value;

    if (inputQuestion1 == 49) {
        console.log("Question 1 is correct");
        result += 20;
    } else {
        console.log("Question1 is incorrect" + " " + "Answer was" + inputQuestion1)
    }
    if (inputQuestion2 == 476) {
        console.log("Question 1 is correct");
        result += 20;
    } else {
        console.log("Question1 is incorrect" + " " + "Answer was" + inputQuestion2)
    }
    if (inputQuestion3 == 264) {
        console.log("Question 1 is correct");
        result += 20;
    } else {
        console.log("Question1 is incorrect" + " " + "Answer was" + inputQuestion3)
    }
    if (inputQuestion4 == "Gaul") {
        console.log("Question 1 is correct");
        result += 20;
    } else {
        console.log("Question1 is incorrect" + " " + "Answer was" + inputQuestion4)
    }
    if (inputQuestion5 == "Jupiter") {
        console.log("Question 1 is correct");
        result += 20;
    } else {
        console.log("Question1 is incorrect" + " " + "Answer was" + inputQuestion5)
    }
    ExamGrade(inputStudent, result);
}


function ExamGrade(inputStudent, result) {
    if (result >= 50) {
        alert(inputStudent + " has completed the challenge with result of" + " " + result + "%");
    } else if (result < 49) {
        alert(inputStudent + " has failed the challenge with result of" + " " + result + "%");
    }
    document.getElementById("inputResult").value = result;
}
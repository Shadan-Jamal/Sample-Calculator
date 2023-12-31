var input= document.querySelector("input");
let inputArray=[];   //array that would contains the user inputs of operators or operands

for (var i = 0; i < document.querySelectorAll(".button").length; i++) {

    const btn = document.querySelectorAll("button")[i];

    btn.addEventListener("click", function (e) {

    let prevChar = inputArray.length > 0 ? inputArray[inputArray.length - 1] : "";   //to check for any succession of same operators like ++ or //

    // Check for consecutive operators
    if (["+","-","*","/","^","%"].includes(prevChar) && ["+","-","*","/","^","%"].includes(e.target.innerHTML)) {
        alert("Expression not in the correct order");
        return;
    }
    
    switch (e.target.innerText) {
        case "1":
        case "2":
        case "3":
        case "4":
        case "5":
        case "6":
        case "7":
        case "8":
        case "9":
        case "0":
        case ".":
            inputArray.push(e.target.innerText);   //pushes all the operands and decimal to the inputArray
            break;

        case "+":
        case "-":
        case "*":
        case "/":
        case "**":
        case "%":
            inputArray.push(e.target.innerText);  //pushes operators to the inputArray
            break;

        case "AC":
            inputArray = [];  //clears the entire inputArray/input field
            break;

        case "DEL":    //deletes the one number or operator from the end
            inputArray.pop();
            break;

        case "=":   //evaluates the expression and sees if any wrong expression is there or not
            try {
                input.value = eval(inputArray.join(""));
                inputArray = [input.value];
            } catch (error) {
                alert("Invalid expression");
            }
            break;
    }

    // Updates the input field
    input.value = inputArray.join("");
});
}
// get input 
function getInputValue (input) {
    const value = document.getElementById(input);
    const valueAmont = value.value;
    const valueNumber = parseInt(valueAmont);
    return valueNumber;
}
// get text 
function getInputText (textInput){
    const text = document.getElementById(textInput);
    return text; 
}

// calculate balance
document.getElementById("calculate-btn").addEventListener("click", function() {
    // get value
    const income = getInputValue("income");
    const foodCost = getInputValue("food-cost");
    const rentCost = getInputValue("rent-cost");
    const clothesCost = getInputValue("clothes-cost");
    // get expence 
    if (income>0 && foodCost>=0 && rentCost>=0 && clothesCost>=0){
        const totalExpence = foodCost+rentCost+clothesCost;
        // error handle 
        if(totalExpence>income){
            alert("Your expence is bigger then your income!")
            return income;
        }
        const expenceText = getInputText("expences");
        expenceText.innerText = totalExpence;
        const balance = getInputText("balance");
        balance.innerText = income-totalExpence;
    }
    else{
        alert("Please insert a positive valid number!");
    }
})

// saving and remaining 
document.getElementById("save-btn").addEventListener("click", function(){
    const income = getInputValue("income");
    const save = getInputValue("save");
    if(save>=0){
        const saving = income*(save/100);
        const savingAmount = getInputText("saving-amount");
        savingAmount.innerText = saving;
        const balance = getInputText("balance");
        const remainingAmount = getInputText("remaining-amount");
        if(balance.innerText<saving){
            alert("Your saving ammount is bigger then your rest amount!")
            return save;
        }
        remainingAmount.innerText = balance.innerText - saving;
    }
    else{
        alert("Please insert a positive valid number!");
    }
})
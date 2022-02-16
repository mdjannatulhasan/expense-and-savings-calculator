let income = 0;
let foodCost = 0;
let rent = 0;
let clothesCost = 0;
let balance = 0;
let savingPercentage = 0;
let percentOfIncome = 0;
let flag = 0;

/*
==================================================
    Get elements and intialize into variables
==================================================
*/
const calculateBtn = document.getElementById('calculate');
const saveBtn = document.getElementById('save');
const warningMsg = document.getElementById('warning');
const warningMsg2 = document.getElementById('warning2');
const balanceBtn = document.getElementById('balance');
const remainingBalanceBtn = document.getElementById('savingAmount');



/*
==================================================
                Input Initialize
==================================================
*/
calculateBtn.addEventListener('click', function () {
    flag = 0;
    income = getValue('income', warningMsg);
    foodCost = getValue('food', warningMsg);
    rent = getValue('rent', warningMsg);
    clothesCost = getValue('clothes', warningMsg);
    if (flag == 0) {
        warningMsg.classList.add('hidden');
        balanceBtn.classList.remove('text-rose-700');
    }
    let totalCost = addCosts();
    balance = income - totalCost;
    document.getElementById('expense').innerText = totalCost;
    if (balance < 0) {
        balanceBtn.innerText = "Your expenses is more than your income";
        balanceBtn.classList.add('text-rose-700');
    }
    else {
        balanceBtn.innerText = balance;
    }

});

saveBtn.addEventListener('click', function () {
    flag = 0;
    warningMsg2.classList.add('hidden');
    savingPercentage = getValue('savePercentage', warningMsg2);
    percentOfIncome = (savingPercentage * income) / 100;
    let remainingBalance = balance - percentOfIncome;
    document.getElementById('remainingBalance').innerText = remainingBalance.toFixed(2);

    if (remainingBalance < 0) {
        remainingBalanceBtn.innerText = "You can not save " + savingPercentage + "%. Please choose a smaller number.";
        remainingBalanceBtn.classList.add('text-rose-700');
        document.getElementById('remainingBalance').innerText = 00;
    }
    else {
        remainingBalanceBtn.classList.remove('text-rose-700');
        remainingBalanceBtn.innerText = percentOfIncome.toFixed(2);
    }
});


/*
==================================================
                    Functions
==================================================
*/

// Input value reading functions
function getValue(inputId, warningElement) {

    const inputVal = document.getElementById(inputId).value;
    const floatVal = parseFloat(inputVal);
    console.log(floatVal);

    if (errorHanlding(inputVal, inputId, floatVal, warningElement)) {
        return '0';
    }
    return floatVal;
}

/*
==================================================
                    Handle Error 
==================================================
*/
function errorHanlding(inputAsString, inputId, floatVal, warningElement) {
    var regExp = /[a-zA-Z!$%&*:;#~@]/g;
    if (regExp.test(inputAsString) || floatVal < 0 || isNaN(floatVal)) {
        const idOfLabel = inputId + 'Label';
        const labelText = document.getElementById(idOfLabel).textContent;
        if (flag == 0) {
            warningElement.classList.remove('hidden');
            warningElement.innerText = "ERROR: Please enter positive number on '" + labelText + "'";

            flag = 1;

        } return true;
    }
    return false;
}

function addCosts() {
    return foodCost + rent + clothesCost;
}
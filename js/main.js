let income = 0;
let foodCost = 0;
let rent = 0;
let clothesCost = 0;
let balance = 0;
let savingPercentage = 0;
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
        document.getElementById('balance').innerText = balance;
    }

});

saveBtn.addEventListener('click', function () {
    savingPercentage = getValue('savePercentage', warningMsg2);


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
            warningElement.innerText = "Please enter positive number on '" + labelText + "'";

            flag = 1;

        } return true;
    }
    return false;
}

function addCosts() {
    return foodCost + rent + clothesCost;
}
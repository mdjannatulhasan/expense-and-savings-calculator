let income = 0;
let foodCost = 0;
let rent = 0;
let clothesCost = 0;
let savingPercentage = 0;
let flag = 0;

/*================================================
    Get elements and intialize into variables
==================================================*/
const calculateBtn = document.getElementById('calculate');
const saveBtn = document.getElementById('save');
const warningBtn = document.getElementById('warning');



/*================================================
                Input Initialize
==================================================*/
calculateBtn.addEventListener('click', function () {
    flag = 0;
    income = getValue('income');
    foodCost = getValue('food');
    rent = getValue('rent');
    clothesCost = getValue('clothes');
    if (flag == 0) {
        warningBtn.classList.add('hidden');
    }

});




/*================================================
                    Functions
==================================================*/

// Input value reading functions
function getValue(inputId) {
    var regExp = /[a-zA-Z!$%&*:;#~@]/g;
    const inputVal = document.getElementById(inputId).value;
    const floatVal = parseFloat(inputVal);

    if (regExp.test(inputVal)) {
        console.log("dukhesi ki moja");
        const idOfLabel = inputId + 'Label';
        const labelText = document.getElementById(idOfLabel).textContent;
        if (flag == 0) {
            warningBtn.classList.remove('hidden');
            warningBtn.innerText = "Please enter positive number on '" + labelText + "'";

            flag = 1;

        } return '';
    }
    return floatVal;
}
function addCosts() {
    return foodCost + rent + clothesCost;
}
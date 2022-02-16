const calculateBtn = document.getElementById('calculate');

calculateBtn.addEventListener('click', function () {
    console.log(getValue('income'));
    console.log(getValue('food'));
    console.log(getValue('rent'));
    console.log(getValue('clothes'));
});

function getValue(inputId) {
    const inputVal = document.getElementById(inputId).value;
    return inputVal;
}

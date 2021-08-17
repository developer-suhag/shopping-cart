// increase quantity
function inputIncrease(inputId) {
    const inputField = document.getElementById(inputId);
    const inputQuantity = inputField.value;
    return inputField.value = parseInt(inputQuantity) + 1;

}
// case
document.getElementById('case-plus').addEventListener('click', function () {
    // const caseInput = document.getElementById('case-number');
    // const caseQuantity = caseInput.value;
    // caseInput.value = parseInt(caseQuantity) + 1;
    inputIncrease('case-number')
});

// Mobile 
document.getElementById('mobile-plus').addEventListener('click', function () {
    inputIncrease('mobile-number')
})
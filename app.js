// increase quantity
function updateQuantity(inputId, isPlus, total, isMobile) {
    const inputField = document.getElementById(inputId);
    let inputQuantity = inputField.value;
    if (isPlus == true) {
        inputQuantity = parseInt(inputQuantity) + 1;
    } else if (inputQuantity > 0) {
        inputQuantity = parseInt(inputQuantity) - 1;
    }
    inputField.value = inputQuantity;

    if (isMobile) {
        const totalPrice = document.getElementById(total)
        totalPrice.innerText = inputQuantity * 1219;
    } else {
        const totalPrice = document.getElementById(total)
        totalPrice.innerText = inputQuantity * 59;
    }

};

// decrease quantity
// function inputDecrease(inputId) {
//     const inputField = document.getElementById(inputId);
//     const inputQuantity = inputField.value;
//     if (inputQuantity > 0) {
//         return inputField.value = parseInt(inputQuantity) - 1;
//     }

// }

// Handle Mobile increase and decrease events 
// increase 
document.getElementById('mobile-plus').addEventListener('click', function () {
    updateQuantity('mobile-number', true, 'mobile-total', true);
});
// decrease 
document.getElementById('mobile-minus').addEventListener('click', function () {
    updateQuantity('mobile-number', false, 'mobile-total', true);
});

// handle case increase and decrease events
// increase
document.getElementById('case-plus').addEventListener('click', function () {
    // const caseInput = document.getElementById('case-number');
    // const caseQuantity = caseInput.value;
    // caseInput.value = parseInt(caseQuantity) + 1;
    updateQuantity('case-number', true, 'case-total', false)
});
// decrease 
document.getElementById('case-minus').addEventListener('click', function () {
    updateQuantity('case-number', false, 'case-total', false);
})
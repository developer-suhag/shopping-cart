// increase and decrease quantity and price
function updateQuantity(product, price, isPlus) {
    const productField = document.getElementById(product + '-number');
    let productQuantity = productField.value;
    if (isPlus == true) {
        productQuantity = parseInt(productQuantity) + 1;
    } else if (productQuantity > 0) {
        productQuantity = parseInt(productQuantity) - 1;
    }
    productField.value = productQuantity;
    const totalPrice = document.getElementById(product + '-total')
    totalPrice.innerText = productQuantity * price;
    // update total
    updateTotal();
};

// update total
function getInput(product) {
    const productField = document.getElementById(product + '-number').value;
    const productQuantity = parseInt(productField);
    return productQuantity;
}

function updateTotal() {
    const mobileTotal = getInput('mobile') * 1219;
    const caseTotal = getInput('case') * 59;
    const subTotal = mobileTotal + caseTotal;
    const tax = subTotal / 10;
    const totalPrice = subTotal + tax;
    // update total on the html
    document.getElementById('sub-total').innerText = subTotal;
    document.getElementById('tax').innerText = tax;
    document.getElementById('total-price').innerText = totalPrice;
}

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
    updateQuantity('mobile', 1219, true);
});
// decrease 
document.getElementById('mobile-minus').addEventListener('click', function () {
    updateQuantity('mobile', 1219, false);
});

// handle case increase and decrease events
// increase
document.getElementById('case-plus').addEventListener('click', function () {
    // const caseInput = document.getElementById('case-number');
    // const caseQuantity = caseInput.value;
    // caseInput.value = parseInt(caseQuantity) + 1;
    updateQuantity('case', 59, true)
});
// decrease 
document.getElementById('case-minus').addEventListener('click', function () {
    updateQuantity('case', 59, false);
})
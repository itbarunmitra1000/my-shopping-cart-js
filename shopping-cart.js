
function productIncreseDecrese(updatePhonePrice,updateName,isIncresing) {
    const productInput = document.getElementById('product-'+updateName +'-input');
    let productInputValue = productInput.value  ;
    // console.log(productInputValue);
    if(isIncresing == true){
        productInputValue = parseInt(productInputValue)  + 1 ;
    }
    else if(productInputValue > 0) {
        
        productInputValue = parseInt(productInputValue)  - 1 ;
    }
    productInput.value = productInputValue;
    const previousPhonePrice = document.getElementById('previous-'+ updateName +'-price');
    previousPhonePrice.innerText = productInputValue * updatePhonePrice;

    calculateTotal();
}

function getCalculation(updateName){
    const phoneInput = document.getElementById('product-'+updateName +'-input');
    const phoneInputValue = parseInt(phoneInput.value )  ;
    return phoneInputValue;
}

function calculateTotal(){

    const phoneTotal = getCalculation('phone') * 1219 ;
    const caseTotal =  getCalculation('case') * 79 ;
    const subTotal = phoneTotal + caseTotal ;
    const tax = subTotal / 10;
    const total = subTotal + tax;
    document.getElementById('subtotal-money').innerText = subTotal;
    document.getElementById('tax-money').innerText = tax;
    document.getElementById('total-money').innerText = total;



}

document.getElementById('phone-plus').addEventListener('click', function () {
    productIncreseDecrese(1219,'phone',true);
});

document.getElementById('phone-minus').addEventListener('click', function () {
    productIncreseDecrese(1219,'phone',false);
});
document.getElementById('case-plus').addEventListener('click', function () {
    productIncreseDecrese(59,'case',true);
});

document.getElementById('case-minus').addEventListener('click', function () {
    productIncreseDecrese(59,'case',false);
});
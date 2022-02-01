//change credits
const credit = document.querySelector('#credit');
credit.textContent = "Antonio Monteiro";

// We'll use these variables to track the counts of each cookie type
let gb = 0 // Gingerbread
let cc = 0 // Chocolate Chip
let sugar = 0 // Sugar Sprinkle

//create variables for number displays
const gbTotal = document.getElementById("qty-gb");
const ccTotal = document.getElementById("qty-cc");
const sugarTotal = document.getElementById("qty-sugar");
const total = document.getElementById("qty-total");

//function to update total
function updateTotal() {
    total.textContent = gb + cc + sugar;
}

//gingerbread functionality
//create both buttons
const gbMinusButton = document.getElementById("minus-gb");
const gbPlusButton = document.getElementById("add-gb");

//minus button pressing
gbMinusButton.addEventListener("click", function(){
    if (gb >= 0) {
        gbTotal.textContent = --gb;
        updateTotal();
    }
})

//plus button pressing
gbPlusButton.addEventListener("click", function(){
    gbTotal.textContent = ++gb;
    updateTotal();
})

//chocolate chip functionality
//buttons
const ccMinusButton = document.getElementById("minus-cc");
const ccPlusButton = document.getElementById("add-cc");

//minus button pressing
ccMinusButton.addEventListener("click", function(){
    if (cc >= 0) {
        ccTotal.textContent = --cc;
        updateTotal();
    }
})

//plus button pressing
ccPlusButton.addEventListener("click", function(){
    ccTotal.textContent = ++cc;
    updateTotal();
})

//sugar sprinkle chip functionality
//buttons
const sugarMinusButton = document.getElementById("minus-sugar");
const sugarPlusButton = document.getElementById("add-sugar");

//minus button pressing
sugarMinusButton.addEventListener("click", function(){
    if (sugar >= 0) {
        sugarTotal.textContent = --sugar;
        updateTotal();
    }
})

//plus button pressing
sugarPlusButton.addEventListener("click", function(){
    sugarTotal.textContent = ++sugar;
    updateTotal();
})
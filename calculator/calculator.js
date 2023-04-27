window.addEventListener('DOMContentLoaded', function() {
  const form = document.getElementById("calc-form");
  if (form) {
    setupIntialValues();
    form.addEventListener("submit", function(e) {
      e.preventDefault();
      update();
    });
  }
});

function getCurrentUIValues() {
  return {
    amount: +(document.getElementById("loan-amount").value),
    years: +(document.getElementById("loan-years").value),
    rate: +(document.getElementById("loan-rate").value),
  }
}

// Get the inputs from the DOM.
// Put some default values in the inputs
// Call a function to calculate the current monthly payment
function setupIntialValues() {
  getCurrentUIValues().amount = null;
  getCurrentUIValues().years = null;
  getCurrentUIValues().rate = null ;
}

// Get the current values from the UI
// Update the monthly payment
function update() {
  const values = getCurrentUIValues(); 
  updateMonthly(calculateMonthlyPayment(values));
}

// Given an object of values (a value has amount, years and rate ),
// calculate the monthly payment.  The output should be a string
// that always has 2 decimal places.
function calculateMonthlyPayment(values) {
    const a = values.amount;
    const n = values.years;
    const r = values.rate;

    const monthlyP = ((a * (r / 1200)) / (1 - ((1 + (r / 1200)) ** -(n * 12))));
    const monthlyP2 = monthlyP.toFixed(2);
    return String(monthlyP2);
}

// Given a string representing the monthly payment value,
// update the UI to show the value.
function updateMonthly(amount) {
  const monthlyPayment = document.getElementById("monthly-payment");
  monthlyPayment.innerText = amount;
}




it('should calculate the monthly rate correctly', function () {
  const values = {
    amount: 10000,
    years: 7,
    rate: 3,
  }
  expect(calculateMonthlyPayment(values)).toEqual('132.13');
});


it("should return a result with 2 decimal places", function() {
  // ..
  const values = {
    amount: 100000,
    years: 20.6,
    rate: 5.777,
  }
  expect(calculateMonthlyPayment(values)).toEqual('692.76');
  
});

// etc

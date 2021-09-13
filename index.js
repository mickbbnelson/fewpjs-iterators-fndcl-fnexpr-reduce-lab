const batteryBatches = [4, 5, 3, 4, 4, 6, 5];

// Code your solution here
// Create a call back function with battery batches?


const totalBatteries = batteryBatches.reduce((total,batt)=> total + batt, 0)

/* Think of it like 
batteryBatches.
function couponCounter(totalAmount, location) {
  return totalAmount + location.amount;
}
and a starting point of 0 added on to the end */

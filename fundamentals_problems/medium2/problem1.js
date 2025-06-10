function processOrder(price, quantity, discount, serviceCharge, tax) {
  quantity = quantity || 1;
  discount = discount || 0;
  serviceCharge = serviceCharge || 0.1;
  tax = tax || 0.15;

  return (price * quantity) * (1 - discount) * (1 + serviceCharge) * (1 + tax);
}

// The problem is that if any of the arguments given (aside from `price`) have a
// value of `0`, those values aren't used because of the truthiness of `0` in
// Javascript. The || operator checks for truthiness of its operands. If the
// first operand is truthy, it returns that value, otherwise it returns the
// second value. In the case that `quantity`, `discount`, `serviceCharge`, or
// `tax` are `0`, which is a legitimate possibility, the || operator evaluatues
// that as falsy and returns the default value instead.
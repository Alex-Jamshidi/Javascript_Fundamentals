function addToBatch(array_of_orders, orderID) {
  if (array_of_orders.length > 5) {
    return array_of_orders
  };
  return array_of_orders.concat(orderID);
};
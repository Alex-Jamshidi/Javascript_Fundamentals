const addToBatch = (array_of_orders, orderID) => {
  if (array_of_orders.length > 5) {
    return array_of_orders
  };
  return array_of_orders.concat(orderID);
};

const checkLength = (phone_number) => {
  if (phone_number.length <= 10) {
    return true;
  };
};

const filterLongNumbers = (array_of_numbers) => {
  return array_of_numbers.filter(checkLength);
};

const namesAndDiscounts = [
  { name: 'Anna', discount: 50 },
  { name: 'Laura', discount: 40 },
  { name: 'Josh', discount: 30 },
  { name: 'Min', discount: 50 },
  { name: 'Karla',discount:  6 }
];

const generateMessages = (namesAndDiscounts) => {
  return namesAndDiscounts.map(customer => {
return `Hi ${customer.name}! ${customer.discount}% off our best candies for you today!`;
  });
};


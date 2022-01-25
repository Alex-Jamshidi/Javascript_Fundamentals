module.exports = fizzbuzz;

function fizzbuzz(number) {
  let string = '';

  if (number % 3 === 0) {
    string += 'Fizz';
  };
  if (number % 5 === 0) {
    string += 'Buzz';
  };
  if (string === '') {
    return number;
  };
  return string;
}


// for (let index = 1; index <= 50; index++) {
//   console.log(`Fizzbuzz result for ${index} is ${fizzbuzz(index)}`);
// }
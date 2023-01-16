module.exports = function toReadable (number) {
  const upToTwenty = ['zero', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine', 'ten', 'eleven', 'twelve', 'thirteen', 'fourteen', 'fifteen', 'sixteen', 'seventeen', 'eighteen', 'nineteen', 'twenty'];

  const tens = ['', 'ten', 'twenty', 'thirty', 'forty', 'fifty', 'sixty', 'seventy', 'eighty', 'ninety'];

  const hundred = ' hundred';

  let result = '';

  if (number <= 20) {
      result = result + upToTwenty[number];
      return result;
  }
   else if (number > 20 && number < 100) {
    if (number % 10 === 0) {
      result = result + tens[Math.floor(number / 10)];
      return result;
    } else {
      result = result + tens[Math.floor(number / 10)];
      result = result + ' ' + upToTwenty[number % 10];
      return result;
    }
  }
  else if (number >= 100 && number < 1000) {
    result = result + upToTwenty[Math.floor(number / 100)] + hundred;
    if (number % 100 === 0) {
      return result;
    }
    else if((number % 100) > 20 && (number % 100) < 100){
      if ((number % 100) % 10 === 0) {
        result = result + ' ' + tens[Math.floor((number % 100) / 10)];
        return result;
      } else {
        result = result + ' ' + tens[Math.floor((number % 100) / 10)];
        result = result + ' ' + upToTwenty[(number % 100) % 10];
        return result;
      }
    } else if ((number % 100) <= 20) {
      result = result + ' ' + upToTwenty[number % 100];
      return result;
    }
    }
};


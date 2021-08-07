module.exports = function toReadable (number) {
  const num = ['', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine', 'ten',
   'eleven', 'twelve', 'thirteen', 'fourteen', 'fifteen', 'sixteen', 'seventeen', 'eighteen', 'nineteen'];

  const dozens = ['', '', 'twenty ', 'thirty ', 'forty ', 'fifty ', 'sixty ', 'seventy ', 'eighty ', 'ninety '];

  const dec = (number) => {
    let numString = number.toString().split('');
    let result = dozens[numString[0]] + num[numString[1]];
    return result.trim();
}

const hundred = (number) => {
    let numString = number.toString().split('');
    let result;
    if (numString[1] != 1) {
        result = num[numString[0]] + ' hundred ' + dozens[numString[1]] + num[numString[2]];
    } else {
        result = num[numString[0]] + ' hundred ' + num[+(numString[1] + numString[2])];
    };
    return result.trim();
};

  if (number == 0) return 'zero';
  if (number < 20) return num[number];
  if (number > 19 && number < 100) return dec(number);
  if (number > 99 && number < 1000) return hundred(number);
}

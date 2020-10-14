module.exports = function toReadable (number, human = '') {
  number = number.toString()
  let item = number[0];
  debugger
  if (number.length === 3) {
    switch (item) {
            case '1':
                human += 'one hundred ';
                break;
            case '2':
                human += 'two hundred ';
                break;
            case '3':
                human += 'three hundred ';
                break;
            case '4':
                human += 'four hundred ';
                break;
            case '5':
                human += 'five hundred ';
                break;
            case '6':
                human += 'six hundred ';
                break;
            case '7':
                human += 'seven hundred ';
                break;
            case '8':
                human += 'eight hundred ';
                break;
            case '9':
                human += 'nine hundred ';
                break;
            default:
                human += 'zero';    
      }
      number = number.substring(1);
      
    return  toReadable(number, human)
  }else if (number.length === 2) {
    if (number.length === 2 && number[0] === '1') {
      switch(number[1]) {
          case '1':
          human += 'eleven';
          break;
          case '2': 
          human += 'twelve';
          break;
          case '3': 
          human += 'thirteen'
          break;
          case '4': 
          human += 'fourteen'
          break;
          case '5': 
          human += 'fifteen'
          break;
          case '6': 
          human += 'sixteen'
          break;
          case '7': 
          human += 'seventeen'
          break;
          case '8': 
          human += 'eighteen'
          break;
          case '9': 
          human += 'nineteen'
          break;
          default :
          human += 'ten';
      }
     return human
    } else {
      switch(item) {
        case '2': 
          human += 'twenty ';
          break;
        case '3': 
          human += 'thirty '
          break;
        case '4': 
          human += 'forty '
          break;
        case '5': 
          human += 'fifty '
          break;
        case '6': 
          human += 'sixty '
          break;
        case '7': 
          human += 'seventy '
          break;
        case '8': 
          human += 'eighty '
          break;
        case '9': 
          human += 'ninety '
          break;
        default :
          human += '';
      }
    number = number.substring(1)
    
  }
  return toReadable(number, human)
  } else {
    switch (item) {
            case '1':
                human += 'one';
                break;
            case '2':
                human += 'two';
                break;
            case '3':
                human += 'three';
                break;
            case '4':
                human += 'four';
                break;
            case '5':
                human += 'five';
                break;
            case '6':
                human += 'six';
                break;
            case '7':
                human += 'seven';
                break;
            case '8':
                human += 'eight';
                break;
            case '9':
                human += 'nine';
                break;
            default:
                human += '';    
        }     
  }
  return human.trim()
}





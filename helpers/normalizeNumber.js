export default function (number) {
  if (number) {
    if (number.toString().indexOf('.') == -1) {
      return number;
    }
    else return number.toFixed(2);
  }

  return number;
}

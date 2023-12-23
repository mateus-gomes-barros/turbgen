export function hexToRgba(hex:string, alpha:number) {
  hex = hex.replace("#", "");

  if (hex.length === 3) {
    hex = hex
      .split("")
      .map(function (char) {
        return char + char;
      })
      .join("");
  }

  var decimalR = parseInt(hex.slice(0, 2), 16);
  var decimalG = parseInt(hex.slice(2, 4), 16);
  var decimalB = parseInt(hex.slice(4, 6), 16);

  var red = decimalR ;
  var green = decimalG ;
  var blue = decimalB ;

  return "rgba(" + red + "," + green + "," + blue + "," + alpha + ")";
}

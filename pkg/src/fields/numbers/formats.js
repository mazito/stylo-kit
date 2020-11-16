

export function numberToLocal(s, decimals) {
  if (s === undefined || s == null) return NaN;
  s = (typeof s !== "string") ? s.toString() : s;
  var x = s.replace(".", ",");
  return x;
};


export function localToNumber(s, decimals) {
  if (s === undefined || s == null) return NaN;
  s = (typeof s !== "string") ? s.toString() : s;
  var x = s.replace(",", ".");
  //
  var ndecs = decimals || 2;
  var n1 = parseFloat(x);
  var n2 = n1.toFixed(ndecs);
  //
  return parseFloat(x);
  // return parseFloat(n2);
};


export function formatNumber(x, mask) {
  /**
   *	Formats a number using the given mask.
   *	Ej: number=12345,78 mask= "$ ######,####" result= "$  12345,7800"
   *	Mask: 
   *			'#' indicates number
   *			',' indicates decimal position
   *			'$ ...' any other char is a literal
   */
  if (typeof x === "string") x = localToNumber(x);

  if (x === "" || x === undefined || x === null || isNaN(x))
    return "";

  if (!mask || mask === 'auto')
    // default is 2 decimals
    return x.toFixed(2).toString().replace(".", ","); // NO mask 

  mask = mask.replace('.', ',')
  if (mask.indexOf(',') >= 0) {
    var ndecs = mask.split(',')[1].length;
    if (ndecs >= 0) x = x.toFixed(ndecs); // truncate to N decimals 
  }

  var s = x.toString().replace(".", ",");
  if (s.length > mask.length)
    return s; // mask exceeded, return full number

  // replace mask starting at the end of the mask
  var sf = mask.split(''); // convert it to array
  var dl = mask.length - s.length;
  for (var j = s.length - 1; j >= 0; j--)
    sf[j + dl] = s[j];
  return sf.join('').replace(/#/g, ' ');
};

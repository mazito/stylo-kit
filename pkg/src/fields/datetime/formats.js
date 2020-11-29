

export function formatDate(x, mask) {
  /**
   *	Formats a number using the given mask.
   *	Ej: number=12345,78 mask= "$ ######,####" result= "$  12345,7800"
   *	Mask: 
   *			'#' indicates number
   *			',' indicates decimal position
   *			'$ ...' any other char is a literal
   */
  if (typeof x === "string") x = parseInt(x);

  if (x === "" || x === undefined || x === null || isNaN(x))
    return "";

  if (!mask || mask === 'auto')
    // default is 2 decimals
    return (x || '').toString()

  // replace mask starting at the end of the mask
  var sf = mask.split(''); // convert it to array
  var dl = mask.length - s.length;
  for (var j = s.length - 1; j >= 0; j--)
    sf[j + dl] = s[j];
  return sf.join('').replace(/#/g, ' ');
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

export function formatTime(x, mask) {
  /**
   *	Formats a number using the given mask.
   *	Ej: number=1230 mask= "##:##" result= "12:30"
   *	Mask: 
   *			'#' indicates number
   *			',' indicates decimal position
   *			'$ ...' any other char is a literal
   */
  x = (typeof x !== "string") ? x+'' : x;
  let num = parseFloat(x.replace(",", ".")).toFixed(2);
  let valuestr = num.toString().replace('.',':');
  return valuestr;

  // OLD ////

  if (valuestr.length > mask.length)
    return valuestr; // mask exceeded, return full number

  // replace mask starting at the end of the mask
  var masked = mask.split(''); // convert it to array

  let k = mask.length-1; // starts at end of mask
  let j = valuestr.length-1 ; // starts at end of valuestr

  // traverse the mask form end to start
  // copying from the valuestr to the mask
  while (k >= 0 && j >=0) { 
    
    if (masked[k] === '#') {
      masked[k] = valuestr[j]; // copy number to masked
      j--; // move to next valuestr char
    }
    
    k-- ; // move to next mask char
  }

  return masked.join('').replace(/#/g, ' ');
};

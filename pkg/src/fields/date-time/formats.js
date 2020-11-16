

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

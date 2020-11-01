import { onBreakpoint } from 'svelte-stylo';


export function randid() {
  /** 
   * Returns a randomized ID of the form 'idXXXX'
   * where X is a Hexa digit (0..F) 
   */
  function randint(min, max) {
    return parseInt(min + Math.floor((max - min) * Math.random()))
  }
  return 'id'+(randint(0, 65535).toString(16))
}


export function isLocalNaN(s) {
  /* 
   * Replaces the isNaN standard for decimal values with comas 
   * @return: true if Not a Number (NaN), false if it's a valid number
   */
  // no se admite el "." (punto), solo comas 
  if (s.indexOf(".") >= 0) return true;
  var parts = s.split(",");
  if (parts.length > 2)
    return true; // NOT A NUM
  if (parts.length > 1)
    return (isNaN(parts[0]) || isNaN(parts[1]));
  return isNaN(parts[0]);
};


export function autoLayout(value, maxch, type, layout) {
    
  if (type==='area') return 'stacked';

  let isPhone = onBreakpoint({'*': true, 'md': false})

  let val = (value || '').toString();
  
  return (isPhone && layout==='inline' && val.length > maxch) 
          ? 'stacked' : layout;
}

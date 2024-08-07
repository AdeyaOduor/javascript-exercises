/* Given: an array containing hashes of names, return a string formatted as a list of names separated by 
commas except for the last two names, which should be separated by an ampersand. */

function list(names) {
    let len = names.length;
    if(len==0) return '';
    return names.slice(0, len-1).map(p=>p.name).join(", ") + (len>1 ? ' & ' : '') + names[len-1].name;
  }

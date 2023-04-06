export const uppercaseString = (string) => {
  return string.toUpperCase();
}

export const lowercaseString = (string) => {
  return string.toLowerCase()
}

// There are two string-related functions in the editor. Export both of them using the method of your choice.

import { uppercaseString, lowercaseString  } from './string_functions.js';  

uppercaseString("hello");
lowercaseString("WORLD!");

/* import statement allowing the current file to use the uppercaseString and lowercaseString functions you exported.
These functions are in a file called string_functions.js, which is in the same directory as the current file.*/

import * as stringFunctions from "./string_functions.js";

stringFunctions.uppercaseString("hello");
stringFunctions.lowercaseString("WORLD!");

/* The code in this file requires the contents of the file: string_functions.js, that is in the same directory as the current file. 
Use the import * as syntax to import everything from the file into an object called stringFunctions.

import subtract from "./math_functions.js";  

subtract(7,4);
/* In the following code, import the default export from the math_functions.js file, 
found in the same directory as this file. Give the import the name subtract.
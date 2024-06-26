const replaceUrlSpaces = (str) => {
  const convertToArray = str.trim().split('');
  for(let i in convertToArray) {
    if(convertToArray[i] === " ") {
     convertToArray[i] = "%20"
    }
  }
  return convertToArray.join('');
}

 console.log(replaceUrlSpaces("Sai Charan P")); // Sai%20Charan%20P

/* let's break down the code step by step:

    const replaceUrlSpaces = (str) => { ... }:
        This is an arrow function named replaceUrlSpaces that takes a string parameter str.

    const convertToArray = str.trim().split('');:
        The trim() method is used to remove any leading or trailing whitespace from the input string str.
        The split('') method is then used to convert the trimmed string into an array of individual characters.

    for(let i in convertToArray) { ... }:
        This is a for...in loop that iterates over the indices of the convertToArray array.

    if(convertToArray[i] === " ") { convertToArray[i] = "%20" }:
        Inside the loop, the code checks if the current character in the array (convertToArray[i]) is a space ( ).
        If it is, the character is replaced with the URL-encoded space "%20".

    return convertToArray.join('');:
        After the loop has finished, the modified array is joined back into a string using the join('') method.
        The resulting string is then returned by the replaceUrlSpaces function.

Finally, the code console.log(replaceUrlSpaces("Sai Charan P")); calls the replaceUrlSpaces function with the string 
"Sai Charan P" as an argument, and logs the result to the console.*/

function testStrict(val) {
  if (val === 7) {
    return "Equal";
  }
  return "Not Equal";
}

testStrict(10); // Change this value to test
--------------------------------------------------------------------------

function testNotEqual(val) {
  if (val!= 99) { 
    return "Not Equal";
  }
  return "Equal";
}

testNotEqual(10);
--------------------------------------------------------------------------

function testStrictNotEqual(val) {
  if (val!== 17) { 
    return "Not Equal";
  }
  return "Equal";
}

testStrictNotEqual(10);
---------------------------------------------------------------------------

function testGreaterThan(val) {
  if (val > 100) {  
    return "Over 100";
  }
  
  if (val > 10) {  
    return "Over 10";
  }

  return "10 or Under";
}

console.log(testGreaterThan(10)); // Change this value to test
------------------------------------------------------------------------------


function testGreaterOrEqual(val) {
  if (val >= 20) {  
    return "20 or Over";
  }
  
  if (val >= 10) {  
    return "10 or Over";
  }

  return "Less than 10";
}

console.log(testGreaterOrEqual(10)); // Change this value to test
---------------------------------------------------------------------------------

function testLessThan(val) {
  if (val < 25) {  
    return "Under 25";
  }
  
  if (val < 55) {  
    return "Under 55";
  }

  return "55 or Over";
}

console.log(testLessThan(10)); // Change this value to test
------------------------------------------------------------------------------------

function testLessOrEqual(val) {
  if (val <= 12) {  
    return "Smaller Than or Equal to 12";
  }
  
  if (val <= 24) {  
    return "Smaller Than or Equal to 24";
  }

  return "More Than 24";
}

console.log(testLessOrEqual(10)); // Change this value to test
--------------------------------------------------------------------------------

function testLogicalAnd(val) {

  if (val <= 50 && val >= 25) {
    return "Yes";
  }

  return "No";
}

testLogicalAnd(10); // Change this value to test
-------------------------------------------------------------------------------------

function testLogicalOr(val) {

  if (val < 10 || val > 20 ) {
    return "Outside";
  }

  return "Inside";
}

testLogicalOr(15); // Change this value to test
---------------------------------------------------------------------------------

function testElse(val) {
  let result = "";

  if (val > 5) {
    result = "Bigger than 5";
  }else {
    result = "5 or Smaller";
  }

  return result;
}

testElse(4);
---------------------------------------------------------------------------------------
function testElseIf(val) {
  if (val > 10) {
    return "Greater than 10";
  } else if (val < 5) {
    return "Smaller than 5";
  } else {
    return "Between 5 and 10";
  }
}

testElseIf(7); // Change this value to test
----------------------------------------------------------------------------------------
function orderMyLogic(val) {
  if(val < 5) {
    return "Less than 5";
  } else if (val < 10) {
    return "Less than 10";
  } else {
    return "Greater than or equal to 10";
  }
}
orderMyLogic(7);
-----------------------------------------------------------------------------------------

//else if conditionals
function testSize(num) {

  if (num < 5) {
    return "Tiny";
  } else if (num < 10) {
    return "Small";
  } else if (num < 15) {
    return "Medium";
  } else if (num < 20) {
    return "Large";
  } else {
    return "Huge";
  }

}
testSize(19);
----------------------------------------------------------------------------------------------
// multiple else if conditionals
const names = ["Hole-in-one!", "Eagle", "Birdie", "Par", "Bogey", "Double Bogey", "Go Home!"];

function golfScore(par, strokes) {

  if (strokes == 1) {
    return names[0];
  } else if (strokes <= par - 2) {
    return names[1];
  } else if (strokes === par - 1) {
    return names[2];
  } else if (strokes === par) {
    return names[3];
  } else if (strokes === par + 1) {
    return names[4];
  } else if (strokes === par + 2) {
    return names[5];
  } else {
    return names[6];
  }

}

golfScore(5, 4); // Change these values to test
--------------------------------------------------------------------------------------------------

function caseInSwitch(val) {
  let answer = "";

   switch(val) {
    case 1:
      answer = "alpha";
      break;
    case 2:
      answer = "beta";
      break;
    case 3:
      answer = "gamma";
      break;
    case 4:
      answer = "delta";
      break;
  }
  return answer;  


  return answer;
}

caseInSwitch(3);
-----------------------------------------------------------------------------------------------------------
function switchOfStuff(val) {
  let answer = "";

  switch (val) {
    case "a":
      answer = "apple";
      break;
    case "b":
      answer = "bird";
      break;
    case "c":
      answer = "cat";
      break;
    default:
      answer = "stuff";
  }

  return answer;
}
-----------------------------------------------------------------------------------------------------------
// Multiple Identical Options in Switch Statements
function sequentialSizes(val) {
  var answer = "";
  switch (val) {
    case 1:
    case 2:
    case 3:
      answer = "Low";
      break;
    case 4:
    case 5:
    case 6:
      answer = "Mid";
      break;
    case 7:
    case 8:
    case 9:
      answer = "High";
  }
  return answer;

}
sequentialSizes(1);
--------------------------------------------------------------------------------------------------------
function chainToSwitch(val) {
  var answer = "";
// changing else if to switch
  
  switch(val) {
    case "bob":
      answer = "Marley";
      break;
    case 42:
      answer = "The Answer";
      break;
    case 1:
      answer = "There is no #1";
      break;
    case 99:
      answer = "Missed me by this much!";
      break;
    case 7:
      answer = "Ate Nine";
      break;
  }
  

  return answer;  
}

chainToSwitch(7); // Change this value to test
---------------------------------------------------------------------------------------------------

function isLess(a, b) {
// Returning Boolean Values from Functions
  return a < b;
}

console.log(isLess(20, 15)); // Change these values to test


// conditionals OR
function abTest(a, b) {
  if (a < 0 || b < 0) {
    return undefined;
  }

  return Math.round(Math.pow(Math.sqrt(a) + Math.sqrt(b), 2));
}

abTest(2, 2); // Change values below to test your code


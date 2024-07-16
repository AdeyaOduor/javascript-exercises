//program to extract out the values at the specified indexes from a specified array
const pull_at_Index = (arr, pullArr) => {
  let removed = [];
  let pulled = arr
    .map((v, i) => (pullArr.includes(i) ? removed.push(v) : v))
    .filter((v, i) => !pullArr.includes(i));
  arr.length = 0;
  pulled.forEach(v => arr.push(v));
  return removed;
};
let arra1 = ['a', 'b', 'c', 'd', 'e', 'f'];
console.log(pull_at_Index(arra1, [1, 3])); // [ 'b', 'd' ]
let arra2 =  [1, 2, 3, 4, 5, 6, 7];
console.log(pull_at_Index(arra2, [4])); // [ 5 ]

/*
Let's explore a few examples:

    Data Transformation and Preprocessing:
        In data manipulation and preprocessing tasks, you may need to remove specific elements from a dataset based on their indices. 
        The pull_at_Index function can be useful in these scenarios, allowing you to efficiently extract and retain the removed elements 
        for further processing or analysis. For example, imagine you have a dataset of customer information, and you need to remove certain 
        sensitive fields (e.g., social security numbers, credit card numbers) before sharing the data with other teams. The pull_at_Index 
        function can help you accomplish this task while preserving the removed data for potential future use.

        Imagine you work for an e-commerce company, and you need to process customer order data to generate a report. The order data is stored 
        in an array of objects, where each object represents a customer order with various details such as the order ID, product name, quantity, and price.
        Your task is to generate a report that summarizes the total revenue and the top-selling products, but you need to exclude certain sensitive 
        information like the customer's name and address from the final report.

    Customizable User Interfaces:
        In the context of user interfaces, the pull_at_Index function can be used to implement customizable or dynamic layouts. Users may want to rearrange or hide certain elements on a page, and the pull_at_Index function can facilitate this by allowing you to remove and retain specific elements based on user preferences.
        This could be useful in web applications, mobile apps, or any user-facing software where the layout needs to be adaptable to user needs or preferences.

    Undo/Redo Functionality:
        When implementing undo and redo functionality in an application, the pull_at_Index function can be useful for managing the state of the application. By removing and retaining elements from an array, you can effectively undo or redo specific actions performed by the user.
        This can be particularly helpful in scenarios like text editors, drawing applications, or other interactive tools where users need to be able to easily revert or restore their work.

    Cache Management and Optimization:
        In the context of caching or memoization, the pull_at_Index function can be used to selectively remove and retain cached data based on specific criteria or usage patterns.
        For example, in a web application that caches frequently accessed data, the pull_at_Index function could be used to remove and retain cached elements based on their access frequency or recency, helping to optimize the cache and improve the overall performance of the application.

    Data Manipulation in Game Development:
        In game development, the pull_at_Index function can be useful for managing game state and manipulating in-game data structures, such as inventories, skill trees, or level progression.
        By using the pull_at_Index function, developers can efficiently remove and retain specific game elements based on player actions or game events, enabling more dynamic and customizable gameplay experiences.
*/

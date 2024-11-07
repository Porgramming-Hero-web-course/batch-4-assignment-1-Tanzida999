//Write a TypeScript function sumArray that takes an array of numbers and returns the sum of all elements in the array.



const sumArray = (nums:number[]):number => {
    return nums.reduce((acc,current)=> acc + current ,0)

}

// const result = sumArray([1, 2, 3, 4, 5]);
// console.log(result); 

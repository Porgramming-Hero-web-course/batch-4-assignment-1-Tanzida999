// Create a TypeScript function removeDuplicates that accepts an array of numbers and returns a new array with duplicates removed. Preserve the original order of elements.
const nums = [1, 2, 2, 3, 4, 3, 5, 4, 6, 5];

const removeDuplicates = (nums:number[]) : number[] => {
    return [...new Set(nums)];
    

}
console.log( removeDuplicates(nums));
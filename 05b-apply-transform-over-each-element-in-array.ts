// https://leetcode.com/problems/apply-transform-over-each-element-in-array - TypeScript

function map(arr: number[], fn: (n: number, i: number) => number): number[] {
    let mappedArray = [];

    for (let i = 0; i < arr.length; i++) {
        mappedArray.push(fn(arr[i], i));
    }

    return mappedArray;
};

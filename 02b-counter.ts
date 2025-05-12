// https://leetcode.com/problems/counter - TypeScript

function createCounter(n: number): () => number {
    
    return function() {
        return n++;
    }
}

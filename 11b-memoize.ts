// https://leetcode.com/problems/memoize - TypeScript

type Fn = (...params: number[]) => number

function memoize(fn: Fn): Fn {
    const cache = {};

    return function(...args) {
        const key = JSON.stringify(args);

        if (key in cache) {
            return cache[key];
        }

        const result = fn.apply(this, args);
        cache[key] = result;

        return result;
    }
}

/* Debugging:
    const memoizedSum = memoize(function(a, b) {
        return a + b;
    });

    console.log(memoizedSum(2, 3));
    console.log(memoizedSum(2, 3));
*/

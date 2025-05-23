// https://leetcode.com/problems/allow-one-function-call - JavaScript

var once = function(fn) {
    let hasBeenCalled = false;
    let result;

    return function(...args){
        if (!hasBeenCalled) {
            hasBeenCalled = true;
            result = fn(...args);
            return result;
        } else {
            return undefined;
        }
    }
};

/**
 * let fn = (a,b,c) => (a + b + c)
 * let onceFn = once(fn)
 *
 * onceFn(1,2,3); // 6
 * onceFn(2,3,6); // returns undefined without calling fn
 */

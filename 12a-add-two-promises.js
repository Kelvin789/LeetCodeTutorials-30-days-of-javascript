// https://leetcode.com/problems/add-two-promises - JavaScript

var addTwoPromises = async function(promise1, promise2) {
    const [val1, val2] = await Promise.all([promise1, promise2])
    
    return val1 + val2
};

/** Debugging:
 * addTwoPromises(Promise.resolve(2), Promise.resolve(2))
 *   .then(console.log); // 4
 */

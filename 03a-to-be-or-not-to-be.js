// https://leetcode.com/problems/to-be-or-not-to-be - JavaScript

function expect(value) {
    return {
        toBe: function(secondValue) {
            if (value === secondValue)
                return true;
            else
                throw new Error("Not Equal");
        },
        notToBe: function(secondValue) {
            if (value !== secondValue) 
                return true;
            else
                throw new Error("Equal");
        }
    }
};

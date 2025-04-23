// https://leetcode.com/problems/counter - JavaScript

var createCounter = function(n) {
    return function() {    
        return n++;
    };
};

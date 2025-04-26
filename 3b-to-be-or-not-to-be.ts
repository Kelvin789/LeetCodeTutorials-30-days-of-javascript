// https://leetcode.com/problems/to-be-or-not-to-be - TypeScript

type ToBeOrNotToBe = {
    toBe: (value: any) => boolean;
    notToBe: (value: any) => boolean;
};

function expect(value: any): ToBeOrNotToBe {
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

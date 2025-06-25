// https://leetcode.com/problems/sleep/ - JavaScript

async function sleep(millis) {
        const promise = new Promise((resolve, reject)=>{
        setTimeout(()=>{
            resolve();
        },millis)
    })

    return promise
}

/** Debugging:
 * let t = Date.now()
 * sleep(100).then(() => console.log(Date.now() - t)) // 100
 */

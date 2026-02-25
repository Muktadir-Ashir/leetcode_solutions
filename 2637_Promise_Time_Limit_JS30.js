var timeLimit = function (fn, t) {
    return async function (...args) {
        // Create a promise that rejects after t milliseconds
        const timeoutPromise = new Promise((_, reject) => {
            setTimeout(() => {
                reject("Time Limit Exceeded");
            }, t);
        });

        // Run fn and the timeout at the same time
        const fnPromise = fn(...args);

        // Promise.race returns whichever finishes first
        return Promise.race([fnPromise, timeoutPromise]);
    };
};
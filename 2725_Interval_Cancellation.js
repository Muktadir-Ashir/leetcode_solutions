/**
 * @param {Function} fn
 * @param {Array} args
 * @param {number} t
 * @return {Function}
 */
var cancellable = function(fn, args, t) {
    // Run the function immediately (at time 0)
    fn(...args);

    // Set up repeating calls every t milliseconds
    const intervalId = setInterval(() => {
        fn(...args);
    }, t);

    // Return the cancel function that stops the interval
    const cancelFn = () => {
        clearInterval(intervalId);
    };

    return cancelFn;
};
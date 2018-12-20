/**
 * Created by zhengjin on 2016/11/2.
 *
 * Function fibonacci() to be test.
 *
 */
var fibonacci = function (n) {
    if (typeof n !== 'number') {
        throw new Error('n should be a Number');
    }
    if (n < 0) {
        throw new Error('n should >= 0');
    }
    if (n > 10) {
        throw new Error('n should <= 10');
    }
    if (n === 0) {
        return 0;
    }
    if (n === 1) {
        return 1;
    }

    return fibonacci(n - 1) + fibonacci(n - 2);
};

// export function
exports.fibonacci = fibonacci;

if (require.main === module) {
    // invoked by command "node main.js 10" --> "arg[0] arg[1] arg[2]"
    var n = Number(process.argv[2]);
    console.log('fibonacci(' + n + ') is', fibonacci(n));
}

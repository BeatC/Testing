// Define functions queue
var funcQueue = [];
var result = 0;
var w = 2;
var x = 3;
var y = 4;
var z = 5;

// Define functions
var A = function (w, x, y, z) {
    return y * z + x * w;
};

var B = function (x, y, z) {
    return y * z + x
};

var C = function (y, z) {
    return y * z;
};

funcQueue.push(A.bind(null, w, x, y, z));
funcQueue.push(B.bind(null, x, y, z));
funcQueue.push(C.bind(null, y, z));

// Traverse the list of all functions

for (var i in funcQueue) {
    result += funcQueue[i]();
}

console.log(result);
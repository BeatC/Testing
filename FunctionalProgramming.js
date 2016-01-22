var list = [];

// Fill the list
for (var i = 0; i < 10; i++) {
    list.push(i);
}

// Functional magic
list.filter(function (el) {

    if (el % 2 === 0) {
        return true;
    }

}).map(function (el) {

    return el * el;

}).reduce(function (el, acc) {

    return acc + el;

}, 0);
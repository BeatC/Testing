var list = [];

for(var i = 0; i < 10; i += 1) {
    setTimeout(function () {
        list.push(i);
    }, 10);
}


setTimeout(function () {
    console.log(list);
}, 20);

//

var list = [];

for(var i = 0; i < 10; i += 1) {
    (function () {
        var param = i;
        setTimeout(function () {
            list.push(param);
        }, 10);
    })();
}


setTimeout(function () {
    console.log(list);
}, 20);
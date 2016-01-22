
var extend = function (child, parent) {
    var F = function () {};
    F.prototype = new parent();
    child.prototype = new F();
    child.prototype.super = F.prototype;
    child.prototype.constructor = child;
};

var Cat = function () {
    this.legs = 4;
};

Cat.prototype.meow = function () {
  return "Meow! I have " + this.legs + " legs.";
};

var Octocat = function () {
    this.legs = 8;
};

extend(Octocat, Cat);

Octocat.prototype.sayHello = function () {
    console.log("Hello, I am octocat and I'm a symbol of GitHub.\n" + this.meow());
};


var octocat = new Octocat();
octocat.sayHello();
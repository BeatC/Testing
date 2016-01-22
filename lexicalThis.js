var Person = function (fn, ln, age) {
    this.firstName = fn;
    this.lastName = ln;
    this.age = age;
};

Person.prototype.sayHi = function () {
    var composeName = function () {
        return this.firstName + " " + this.lastName;
    };

    console.log(composeName());
};

var john = new Person("John", "Doe", 20);

john.sayHi();
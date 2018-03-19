(function() {
    'use strict'

    class Greeting {
        constructor() {
            this.msg = "Hello";
            this.target = " World";
        }

        say_hello() {
            console.log(this.msg + this.target);
        }
    }

    class Hello extends Greeting {
        say_hello() {
            super.say_hello();
            console.log("WA HA HA HA");
        }
    }

    var hello = new Hello();
    hello.say_hello();

})();

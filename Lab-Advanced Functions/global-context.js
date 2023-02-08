//Global contex
function random() {
    console.log(this);
    return Math(random);
}

random(); //global invocation

let math = {
    random: random,
}

math.random(this);  //method invocation

//Object context
let obj = {
    name: 'Peter',
    greed() {
        random()  //global invocation
        console.log(`Hello! My name is ${this.name}`);
    }
};

obj.greed();  //metod invocation
let greed = obj.greed  //copy function by reference
greed();  //global invocation


// element.addEventListener('click', function() {
//     console.log(this);
// });


//nested functions
function a() {
    function b() {
        function c() {
            function d() {
                console.log(this);
            }
            (d);
        }
        (c);
    }
    (b);
}
(a);

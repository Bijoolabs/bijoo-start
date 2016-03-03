import {sum, square, variable, MyClass} from './modules/common_module.js';

// 25
console.log(square(5));

var cred = {
    name: 'Ritesh Kumar',
    enrollmentNo: 11115078
}

var x = new MyClass(cred);

//Ritesh Kumar
console.log(x.getName());

// Load jQuery has module, and use it
var $ = require('jquery');

// $(document).on('ready', function(){

//     console.log('pouet');

// });
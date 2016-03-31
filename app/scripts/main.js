import {sum, square, variable, MyClass} from './modules/common_module.js';

// 25
console.log(square(5));

var cred = {
    name: 'Ritesh Kumaro',
    enrollmentNo: 11115078
}

var x = new MyClass(cred);

//Ritesh Kumar
console.log(x.getName()); 

// Load jQuery has module, and use it

// if you want dependancy was bundled with all other scripts, require it like that, and remove browserify-shim from package.json
// var $ = require('./vendor/jquery-2.2.0.min.js');
// 
// But if you want your depency stay external, require it like that and add browserify-shim
// var $ = require('jquery');
// or in ES6
import $ from 'jquery';

$(document).on('ready', function(){

console.log('pouet');

$('.button_1').on('click', function(){
    $('#turn').text('button 1 click');
});

});

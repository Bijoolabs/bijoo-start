import { sum, square, variable, MyClass } from './modules/common_module.js';

// 25
console.log( square(5) );

var cred = {
    name: 'Ritesh Kumar',
    enrollmentNo: 11115078
}

var x = new MyClass( cred );

//Ritesh Kumar
console.log( x.getName() ); 

// Load jQuery has module, and use it

// if you want dependancy was bundled with all other scripts, require it like that, and remove browserify-shim from package.json
// var $ = require( './vendor/jquery-2.2.0.min.js' );

// But if you want your depency stay external, require it like that and add browserify-shim
// var $ = require( 'jquery' );
// or in ES6
import $ from 'jquery';

$( document ).on( 'ready', function(){

    console.log( 'pouet' );

    $( '.button_1' ).on( 'click', function(){
        $( '#turn' ).text( 'button 1 click' );
    });

});


// import fetch polyfill
import 'whatwg-fetch';

// And then just use global variable.
// Basic pattern for fetch from : https://developers.google.com/web/updates/2015/03/introduction-to-fetch

fetch( 'http://www.omdbapi.com/?t=frozen&y=&plot=short&r=json' )
    .then(
        function( response ) {
            if ( response.status !== 200 ) {
                console.log( 'Looks like there was a problem. Status Code: ' + response.status );
                return;
            }

            // Examine the text in the response
            response.json().then( function( data ) {
                console.log( 'Your response Data', data);
            });
        }
    )
    .catch( function( err ) {
        console.log( 'Fetch Error :-S', err );
    });
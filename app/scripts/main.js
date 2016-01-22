// Load common vendor and app modules
require([
    // Vendor
    'jquery',

    // Plugins
    'commonPlugin',

    //modules
    'commonModule'

], function ( $, window, document, undefined) {
    'use strict';

    // Init project namespace
    var PROJECT_NAMESPACE = PROJECT_NAMESPACE || {};

    PROJECT_NAMESPACE.option = {
        option_1: 'string', // String
        option_2: 5, // Value
        option_3: null, // null
        option_4: function(){ // Function
            return this.option_1; // Previous defined var
        }
    }

    PROJECT_NAMESPACE.init = function(){}

    PROJECT_NAMESPACE.init();
});
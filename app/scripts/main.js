// add require to global namespace for eslint
/*global require*/
// Load common vendor and app modules
define([
    // Vendor
    'jquery',

    // Plugins
    'commonPlugin',

    //modules
    'commonModule'

], function () {
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
    };

    PROJECT_NAMESPACE.init = function(){};

    PROJECT_NAMESPACE.init();
});

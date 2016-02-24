// set our baseURL reference path
System.config({
    transpiler: 'babel',
    baseURL: '/app/scripts/'
});

// loads /app/main.js
System.import('main.js');

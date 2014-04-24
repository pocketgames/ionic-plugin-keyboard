
var argscheck = require('cordova/argscheck'),
    utils = require('cordova/utils'),
    exec = require('cordova/exec');
   
var Keyboard = function() {
};

Keyboard.hideKeyboardAccessoryBar = function(hide) {
    exec(null, null, "Keyboard", "hideKeyboardAccessoryBar", [hide]);
};

Keyboard.close = function() {
 exec(null, null, "Keyboard", "close", []);
};

Keyboard.disableScroll = function(disable) {
 exec(null, null, "Keyboard", "disableScroll", [disable]);
};

Keyboard.isVisible = false; 

module.exports = Keyboard;




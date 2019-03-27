'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.HTMLSanitizer = undefined;

var _aureliaLogging = require('aurelia-logging');



var SCRIPT_REGEX = /<script\b[^<]*(?:(?!<\/script>)<[^<]*)*<\/script>/gi;

var HTMLSanitizer = exports.HTMLSanitizer = function () {
  function HTMLSanitizer() {
    

    (0, _aureliaLogging.getLogger)('html-sanitizer').warn('CAUTION: The default HTMLSanitizer does NOT provide security against a wide variety of sophisticated XSS attacks,\n      and should not be relied on for sanitizing input from unknown sources.\n      Please see https://aurelia.io/docs/binding/basics#element-content for instructions on how to use a secure solution like DOMPurify or sanitize-html.');
  }

  HTMLSanitizer.prototype.sanitize = function sanitize(input) {
    return input.replace(SCRIPT_REGEX, '');
  };

  return HTMLSanitizer;
}();
var daterangepicker = require('./js/angular-daterangepicker.js');

if (typeof module !== "undefined" && module.exports) {
  module.exports.daterangepicker = daterangepicker;
} else if ((typeof define !== "undefined" && define !== null) && (define.amd !== null)) {
  define("daterangepicker", function() {
    return daterangepicker;
  })
};
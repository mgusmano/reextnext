/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
exports.id = "_ssr_app_reextgrid_BigDataStore_js";
exports.ids = ["_ssr_app_reextgrid_BigDataStore_js"];
exports.modules = {

/***/ "(ssr)/./app/reextgrid/BigDataStore.js":
/*!***************************************!*\
  !*** ./app/reextgrid/BigDataStore.js ***!
  \***************************************/
/***/ (() => {

eval("Ext.define(\"BigDataStore\", {\n    extend: \"Ext.data.BufferedStore\",\n    alias: \"store.virtualforum\",\n    fields: [\n        \"firstName\",\n        \"lastName\",\n        \"address\",\n        \"company\",\n        \"title\",\n        {\n            name: \"id\",\n            type: \"int\"\n        }\n    ],\n    proxy: {\n        type: \"ajax\",\n        url: \"https://llbzr8dkzl.execute-api.us-east-1.amazonaws.com/production/user\",\n        reader: {\n            rootProperty: \"users\",\n            totalProperty: \"totalCount\"\n        }\n    },\n    autoLoad: true\n});\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9yZWV4dG5leHQvLi9hcHAvcmVleHRncmlkL0JpZ0RhdGFTdG9yZS5qcz9iMDAwIl0sInNvdXJjZXNDb250ZW50IjpbIkV4dC5kZWZpbmUoJ0JpZ0RhdGFTdG9yZScsIHtcbiAgICBleHRlbmQ6ICdFeHQuZGF0YS5CdWZmZXJlZFN0b3JlJyxcbiAgICBhbGlhczogJ3N0b3JlLnZpcnR1YWxmb3J1bScsXG4gICAgZmllbGRzOiBbXG4gICAgICAgICdmaXJzdE5hbWUnLCAnbGFzdE5hbWUnLCAnYWRkcmVzcycsICdjb21wYW55JywgJ3RpdGxlJyxcbiAgICAgICAge1xuICAgICAgICAgICAgbmFtZTogJ2lkJyxcbiAgICAgICAgICAgIHR5cGU6ICdpbnQnXG4gICAgICAgIH1dLFxuICAgIHByb3h5OiB7XG4gICAgICAgIHR5cGU6ICdhamF4JyxcbiAgICAgICAgdXJsOiAnaHR0cHM6Ly9sbGJ6cjhka3psLmV4ZWN1dGUtYXBpLnVzLWVhc3QtMS5hbWF6b25hd3MuY29tL3Byb2R1Y3Rpb24vdXNlcicsXG4gICAgICAgIHJlYWRlcjoge1xuICAgICAgICAgICAgcm9vdFByb3BlcnR5OiAndXNlcnMnLFxuICAgICAgICAgICAgdG90YWxQcm9wZXJ0eTogJ3RvdGFsQ291bnQnXG4gICAgICAgIH1cbiAgICB9LFxuICAgIGF1dG9Mb2FkOiB0cnVlXG59KTtcbiJdLCJuYW1lcyI6WyJFeHQiLCJkZWZpbmUiLCJleHRlbmQiLCJhbGlhcyIsImZpZWxkcyIsIm5hbWUiLCJ0eXBlIiwicHJveHkiLCJ1cmwiLCJyZWFkZXIiLCJyb290UHJvcGVydHkiLCJ0b3RhbFByb3BlcnR5IiwiYXV0b0xvYWQiXSwibWFwcGluZ3MiOiJBQUFBQSxJQUFJQyxNQUFNLENBQUMsZ0JBQWdCO0lBQ3ZCQyxRQUFRO0lBQ1JDLE9BQU87SUFDUEMsUUFBUTtRQUNKO1FBQWE7UUFBWTtRQUFXO1FBQVc7UUFDL0M7WUFDSUMsTUFBTTtZQUNOQyxNQUFNO1FBQ1Y7S0FBRTtJQUNOQyxPQUFPO1FBQ0hELE1BQU07UUFDTkUsS0FBSztRQUNMQyxRQUFRO1lBQ0pDLGNBQWM7WUFDZEMsZUFBZTtRQUNuQjtJQUNKO0lBQ0FDLFVBQVU7QUFDZCIsImZpbGUiOiIoc3NyKS8uL2FwcC9yZWV4dGdyaWQvQmlnRGF0YVN0b3JlLmpzIiwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(ssr)/./app/reextgrid/BigDataStore.js\n");

/***/ })

};
;
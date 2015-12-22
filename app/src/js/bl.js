(function(f){if(typeof exports==="object"&&typeof module!=="undefined"){module.exports=f()}else if(typeof define==="function"&&define.amd){define([],f)}else{var g;if(typeof window!=="undefined"){g=window}else if(typeof global!=="undefined"){g=global}else if(typeof self!=="undefined"){g=self}else{g=this}g.bl = f()}})(function(){var define,module,exports;return (function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
exports = module.exports

var patient = [{"patID":0,"name":"Tomás Silva","policy_number":1000,"policy_type":0},{"patID":1,"name":"Tomás Santos","policy_number":1001,"policy_type":2},{"patID":2,"name":"Francisco Santos","policy_number":1002,"policy_type":1},{"patID":3,"name":"Mariana Pereira","policy_number":1003,"policy_type":2},{"patID":4,"name":"Leonor Oliveira","policy_number":1004,"policy_type":0},{"patID":5,"name":"Santiago Ferreira","policy_number":1005,"policy_type":1},{"patID":6,"name":"Rodrigo Silva","policy_number":1006,"policy_type":1},{"patID":7,"name":"João Martins","policy_number":1007,"policy_type":2},{"patID":8,"name":"Carolina Ferreira","policy_number":1008,"policy_type":0},{"patID":9,"name":"Beatriz Santos","policy_number":1009,"policy_type":2},{"patID":10,"name":"Leonor Costa","policy_number":1010,"policy_type":2},{"patID":11,"name":"Maria Ferreira","policy_number":1011,"policy_type":0},{"patID":12,"name":"Leonor Pereira","policy_number":1012,"policy_type":0},{"patID":13,"name":"Leonor Costa","policy_number":1013,"policy_type":0},{"patID":14,"name":"Tomás Ferreira","policy_number":1014,"policy_type":1},{"patID":15,"name":"João Martins","policy_number":1015,"policy_type":2},{"patID":16,"name":"Rodrigo Costa","policy_number":1016,"policy_type":3},{"patID":17,"name":"Matilde Silva","policy_number":1017,"policy_type":0},{"patID":18,"name":"Beatriz Pereira","policy_number":1018,"policy_type":0},{"patID":19,"name":"Guilherme Oliveira","policy_number":1019,"policy_type":2}]


exports.sayHello = function (name) {
  return 'Hello ' + (name || 'World')
}

exports.getPatient = function (id) {
return patient[id]
}

exports.getAllPatients = function() {
return patient
}

},{}]},{},[1])(1)
});
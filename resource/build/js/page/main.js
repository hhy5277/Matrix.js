!function r(e,n,o){function t(u,f){if(!n[u]){if(!e[u]){var c="function"==typeof require&&require;if(!f&&c)return c(u,!0);if(i)return i(u,!0);throw new Error("Cannot find module '"+u+"'")}var l=n[u]={exports:{}};e[u][0].call(l.exports,function(r){var n=e[u][1][r];return t(n?n:r)},l,l.exports,r,e,n,o)}return n[u].exports}for(var i="function"==typeof require&&require,u=0;u<o.length;u++)t(o[u]);return t}({1:[function(r,e,n){var o=r("./module");o.init()},{"./module":2}],2:[function(r,e,n){function o(){console.log("here's browserify."),console.log(typeof $)}e.exports={init:o}},{}]},{},[1]);
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _Picture = require("./Picture");

Object.keys(_Picture).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function get() {
      return _Picture[key];
    }
  });
});
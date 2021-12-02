(function (global, factory) {
  typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('react')) :
  typeof define === 'function' && define.amd ? define(['exports', 'react'], factory) :
  (global = typeof globalThis !== 'undefined' ? globalThis : global || self, factory(global.Example = {}, global.React));
})(this, (function (exports, React) { 'use strict';

  function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e : { 'default': e }; }

  var React__default = /*#__PURE__*/_interopDefaultLegacy(React);

  var AnExample$1 = function AnExample() {
    return /*#__PURE__*/React__default["default"].createElement("div", null, "Hello world");
  };

  var AnExample = function AnExample() {
    return /*#__PURE__*/React__default["default"].createElement("div", null, "Hello world");
  };

  exports.AnExample = AnExample$1;
  exports.AnotherExample = AnExample;

  Object.defineProperty(exports, '__esModule', { value: true });

}));

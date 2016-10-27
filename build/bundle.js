/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;
/******/
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var _draw = __webpack_require__(1);
	
	var _draw2 = _interopRequireDefault(_draw);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	new _draw2.default().render();

/***/ },
/* 1 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _check = __webpack_require__(2);
	
	var _check2 = _interopRequireDefault(_check);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	var Draw = function () {
	    function Draw() {
	        _classCallCheck(this, Draw);
	    }
	
	    _createClass(Draw, [{
	        key: 'render',
	        value: function render() {
	            var container = document.getElementById('container');
	            var fragment = document.createDocumentFragment();
	            var m = 15;
	            var n = 15;
	            var flag = false;
	            var whiteMatrix = [];
	            var blackMatrix = [];
	            var whiteWin = false;
	            var blackWin = false;
	            var wincheck = new _check2.default(m, n);
	
	            var _loop = function _loop(i) {
	                var row = document.createElement('ul');
	                var whiteRow = [];
	                var blackRow = [];
	                row.className = 'row';
	
	                var _loop2 = function _loop2(j) {
	                    var cell = document.createElement('li');
	                    cell.className = 'cell';
	                    cell.id = 'cell_' + i + '_' + j;
	                    cell.style.width = parseInt(100 / Math.max(m, n), 10) + 'vw';
	                    cell.style.height = parseInt(100 / Math.max(m, n), 10) + 'vw';
	                    cell.addEventListener('touchstart', function (e) {
	                        var target = e.target;
	                        if (/white|black/.test(target.className)) return false;
	                        if (flag) {
	                            flag = false;
	                            target.className += ' white';
	                            whiteMatrix[i][j] = 1;
	                            whiteWin = wincheck.check(whiteMatrix, i, j);
	                        } else {
	                            flag = true;
	                            target.className += ' black';
	                            blackMatrix[i][j] = 1;
	                            blackWin = wincheck.check(blackMatrix, i, j);
	                        }
	                        setTimeout(function () {
	                            if (whiteWin) {
	                                alert('白方胜利');
	                            } else if (blackWin) {
	                                alert('黑方胜利');
	                            }
	                        }, 0);
	                    });
	                    row.appendChild(cell);
	                    whiteRow.push(0);
	                    blackRow.push(0);
	                };
	
	                for (var j = 0; j < n; j++) {
	                    _loop2(j);
	                }
	                fragment.appendChild(row);
	                whiteMatrix.push(whiteRow);
	                blackMatrix.push(blackRow);
	            };
	
	            for (var i = 0; i < m; i++) {
	                _loop(i);
	            }
	            container.appendChild(fragment);
	        }
	    }]);
	
	    return Draw;
	}();
	
	exports.default = Draw;
	;

/***/ },
/* 2 */
/***/ function(module, exports) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	var WinCheck = function () {
	    function WinCheck(row, col) {
	        _classCallCheck(this, WinCheck);
	
	        this.row = row - 1;
	        this.col = col - 1;
	    }
	
	    _createClass(WinCheck, [{
	        key: "check",
	        value: function check(matrix, i, j) {
	            return this.checkHorizontal(matrix, i, j) || this.checkVertical(matrix, i, j) || this.checkSlant(matrix, i, j) || this.checkBackSlant(matrix, i, j);
	        }
	
	        // 水平检查
	
	    }, {
	        key: "checkHorizontal",
	        value: function checkHorizontal(matrix, m, n) {
	            var count = 0;
	            for (var i = Math.max(0, n - 4); i <= Math.min(this.col, n + 4); i++) {
	                if (matrix[m][i]) {
	                    count++;
	                } else if (count < 5) {
	                    count = 0;
	                }
	            }
	            return count >= 5;
	        }
	
	        // 垂直检查
	
	    }, {
	        key: "checkVertical",
	        value: function checkVertical(matrix, m, n) {
	            var count = 0;
	            for (var i = Math.max(0, m - 4); i <= Math.min(this.row, m + 4); i++) {
	                if (matrix[i][n]) {
	                    count++;
	                } else if (count < 5) {
	                    count = 0;
	                }
	            }
	            return count >= 5;
	        }
	
	        // 斜线检查
	
	    }, {
	        key: "checkSlant",
	        value: function checkSlant(matrix, m, n) {
	            var count = 0;
	            for (var i = Math.min(this.row, m + 4), j = Math.max(0, n - 4); i >= Math.max(0, m - 4) && j <= Math.min(this.col, n + 4); i--, j++) {
	                if (matrix[i][j]) {
	                    count++;
	                } else if (count < 5) {
	                    count = 0;
	                }
	            }
	            return count >= 5;
	        }
	
	        // 反斜线检查
	
	    }, {
	        key: "checkBackSlant",
	        value: function checkBackSlant(matrix, m, n) {
	            var count = 0;
	            for (var i = Math.max(0, m - 4), j = Math.max(0, n - 4); i <= Math.min(this.row, m + 4) && j <= Math.min(this.col, n + 4); i++, j++) {
	                if (matrix[i][j]) {
	                    count++;
	                } else if (count < 5) {
	                    count = 0;
	                }
	            }
	            return count >= 5;
	        }
	    }]);
	
	    return WinCheck;
	}();
	
	exports.default = WinCheck;

/***/ }
/******/ ]);
//# sourceMappingURL=bundle.js.map
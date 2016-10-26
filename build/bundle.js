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
	                            whiteWin = (0, _check2.default)(whiteMatrix, i, j);
	                        } else {
	                            flag = true;
	                            target.className += ' black';
	                            blackMatrix[i][j] = 1;
	                            blackWin = (0, _check2.default)(blackMatrix, i, j);
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
	exports.default = check;
	// 水平检查
	function checkHorizontal(matrix, m, n) {
	    var count = 0;
	    for (var i = n - 4; i <= n + 4; i++) {
	        if (matrix[m][i]) {
	            count++;
	        } else if (count < 5) {
	            count = 0;
	        }
	    }
	    return count >= 5;
	}
	
	// 垂直检查
	function checkVertical(matrix, m, n) {
	    var count = 0;
	    for (var i = m - 4; i <= m + 4; i++) {
	        if (matrix[i] && matrix[i][n]) {
	            count++;
	        } else if (count < 5) {
	            count = 0;
	        }
	    }
	    return count >= 5;
	}
	
	// 斜线检查
	function checkSlant(matrix, m, n) {
	    var count = 0;
	    for (var i = m + 4, j = n - 4; i >= m - 4; i--, j++) {
	        if (matrix[i] && matrix[i][j]) {
	            count++;
	        } else if (count < 5) {
	            count = 0;
	        }
	    }
	    return count >= 5;
	}
	
	// 反斜线检查
	function checkBackSlant(matrix, m, n) {
	    var count = 0;
	    for (var i = m - 4, j = n - 4; i <= m + 4; i++, j++) {
	        if (matrix[i] && matrix[i][j]) {
	            count++;
	        } else if (count < 5) {
	            count = 0;
	        }
	    }
	    return count >= 5;
	}
	
	function check(matrix, i, j) {
	    return checkHorizontal(matrix, i, j) || checkVertical(matrix, i, j) || checkSlant(matrix, i, j) || checkBackSlant(matrix, i, j);
	}

/***/ }
/******/ ]);
//# sourceMappingURL=bundle.js.map
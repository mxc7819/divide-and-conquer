var Utils = (function () {
	'use strict';

	Utils = {
		/**
		 * A shim to make requestAnimationFrame work in more browsers.
		 * Credit to Paul Irish.
		 * @param {Function} func - The function to run on the next animation frame.
		 */
		raf: (window.requestAnimationFrame ||
			window.webkitRequestAnimationFrame ||
			window.mozRequestAnimationFrame ||
			window.msRequestAnimationFrame ||
			window.oRequestAnimationFrame ||
			function (func) { setTimeout(func, 1 / 60); }).bind(window)
	};
	
	return Utils;
})();

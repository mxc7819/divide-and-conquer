var CircularObstacle = (function () {
	'use strict'
	
	/**
	 * Get the distance between two points.
	 * @param 
	 */
	function dist(x1, y1, x2, y2) {
		var xDist = x1 - x2,
			yDist = y1 - y2;
		return Math.sqrt(xDist * xDist + yDist * yDist);
	}
	
	/**
	 * Initialize a new CircularObstacle.
	 * @param {Number} x - The Obstacle's starting x-coordinate
	 * @param {Number} y - The Obstacle's starting y-coordinate
	 * @param {Number} radius - The CircularObstacle's radius
	 */
	function CircularObstacle(x, y, radius) {
		// Call the super constructor.
		Obstacle.call(this, x, y);
		
		// Private variables
		this._radius = radius;
	}
	
	// Inherit from Obstacle.
	CircularObstacle.prototype = Object.create(Obstacle.prototype);
	
	/**
	 * Calculate the heading an entity would take away from the obstacle.
	 * @param {Number} x - The x-coordinate of the other entity
	 * @param {Number} y - The y-coordinate of the other entity
	 * @returns {Number} - The heading opposite the obstacle
	 */
	CircularObstacle.prototype.getOppositeHeading = function (x, y) {
		return Math.atan2(-(this._y - y), this._x - x) + Math.PI;
		// Negate the y-coordinates because the y-axis is flipped in computer graphics.
	};
	
	/**
	 * Calculate the minimum amount a circle would have to move to not overlap with the obstacle.
	 * @param {Number} x - The x-coordinate of the circle
	 * @param {Number} y - The y-coordinate of the circle
	 * @param {Number} radius - The radius of the circle
	 * @returns {Number} - The overlap distance
	 */
	CircularObstacle.prototype.getOverlap = function (x, y, radius) {
		return radius + this._radius - dist(x, y, this._x, this._y);
	};
	
	/**
	 * Test whether the circular obstacle is colliding with a circle.
	 * @param {Number} x - The x-coordinate of the circle
	 * @param {Number} y - The y-coordinate of the circle
	 * @param {Number} radius - The radius of the circle
	 * @returns {Boolean} - Whether the circle collided with the obstacle
	 */
	CircularObstacle.prototype.isColliding = function (x, y, radius) {
		return dist(x, y, this._x, this._y) < (this._radius + radius);
	};
	
	/**
	 * Draw the obstacle to the canvas.
	 * @param {CanvasRenderingContext2D} cxt - The drawing context for the game canvas
	 */
	CircularObstacle.prototype.draw = function (cxt) {
		Obstacle.prototype.draw.call(this, cxt);
		
		cxt.beginPath();
		cxt.arc(this._x, this._y, this._radius, 0, 2 * Math.PI);
		cxt.closePath();
		cxt.fill();
		cxt.stroke();
	};
	
	return CircularObstacle;
})();

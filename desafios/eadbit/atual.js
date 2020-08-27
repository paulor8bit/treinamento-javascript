// Triangle and Parallelogram Area Finder
// Write a function that accepts base (decimal), height (decimal) and shape ("triangle", "parallelogram") as input and calculates the area of that shape.

// Examples
// areaShape(2, 3, "triangle") ➞ 3

// areaShape(8, 6, "parallelogram") ➞ 48

// areaShape(2.9, 1.3, "parallelogram") ➞ 3.77
// Notes
// Area of a triangle is 0.5 * b * h
// Area of a parallelogram is b * h
// Assume triangle and parallelogram are the only inputs for shape.

function areaShape(base, height, shape) {
	let tt = 0.5*base*height
	let tp = base*height
	return shape == "triangle" ? tt : tp
	
}

console.log(areaShape(2, 3, "triangle") )
console.log(areaShape(8, 6, "parallelogram"))
console.log(areaShape(2.9, 1.3, "parallelogram"))
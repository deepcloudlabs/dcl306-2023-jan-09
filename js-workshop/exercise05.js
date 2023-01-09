const circle = {
    x: 0,
    y: 0,
    radius: 1,
    paint: {
        color: "Red",
        thickness: 4
    }
};
const anotherCircle = circle;
anotherCircle.x++;
circle.x++;
console.log(circle);
console.log(anotherCircle);
const yetAnotherCircle = {...circle};
yetAnotherCircle.paint = {...circle.paint};
yetAnotherCircle.x++;
console.log(circle);
console.log(yetAnotherCircle);
let {x, y, ...rest} = circle;
console.log(`x: ${x},y: ${y}`)
console.log(rest)
// let x = circle.x;
// let y = circle.y;
yetAnotherCircle.paint.thickness++;
circle.paint.thickness++;
anotherCircle.paint.thickness++;
console.log(yetAnotherCircle.paint)
console.log(circle.paint)
console.log(anotherCircle.paint)
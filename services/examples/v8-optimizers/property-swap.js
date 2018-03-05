function Point(x, y) {
  this.x = x;
  this.y = y;
}

console.time("measure");
for (let index = 0; index < 3000; index++) {
  var p1 = new Point(1, 2);
  p1.a = 5;
  p1.b = 6;
  var p2 = new Point(3, 4);
  p2.a = 7;
  p2.b = 8;
}
console.timeEnd("measure");

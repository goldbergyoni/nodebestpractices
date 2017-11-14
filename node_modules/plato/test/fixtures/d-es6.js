
const a = 1;

class D
{
  static classMethodA(arg) {
    return arg;
  }

  static classMethodB(arg) {
    return arg;
  }
}

function moduleMethod(arg) {
  return arg;
}

const b = moduleMethod(0) + D.classMethodB(1) + D.classMethodA(2);

let c = b + moduleMethod(0) + D.classMethodA(a) * D.classMethodB(1);
    c = null;

export default D;

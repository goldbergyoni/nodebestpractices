
const a = 1;

class C
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

const b = moduleMethod(0) + C.classMethodB(1) + C.classMethodA(2);

export default C;

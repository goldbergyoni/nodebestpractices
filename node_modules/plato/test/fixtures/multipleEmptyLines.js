
var a = 1;


function fnA(arg) {
    return arg;
}


function fnB(arg) {
    return arg;
}


var b = fnB(1) + fnA(2);


var c = b + fnA(a) * fnB(1);
c = null;

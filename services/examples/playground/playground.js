class doo{
  boo(a , b){
    console.log(this.arguments)
  }
}

new doo().boo(1,2);
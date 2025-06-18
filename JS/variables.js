console.log("hello world..");
var x=10;
function test(){
    var y= 20;
    console.log(y);
}
test();
// console.log(y); //didn't get value for y first need to call function & y print y inside function bcz it's locally declared
console.log(x)

// redeclartion
var browser = "chrome" ;
    browser = "edge";
    console.log(browser); // edge -- inJS you can redclare variable n times it will give latest value. & previois valie lost

    // let : blocked scope {}
    let number =4;
  //  let number =5; can't redeclare but reinitaize where in Var you can do Redeclartion & reinitalization
    number =5;

   // const variable work as final keyword in java you can't change the value
   const name = "govind";
   // name = "bhombe"; getting error 
   const no =10;
  //  no =11; // TypeError: Assignment to constant variable.
    console.log(100*no); // 10000
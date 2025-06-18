// for loop
for (let i=0; i <=10; i++){
    console.log(i);
}
console.log("--------------------------------------------------");
// for...of  provide extra feature in JS

const array = [1,2,3,4,5,6];
for(let e of array){
    console.log(e);
}
console.log("--------------------------------------------------");
// do while  it will execute atleast once
let p=1;
do{
    console.log(p);
    p++;
}
while(p<=10);
console.log("--------------------------------------------------");
// while with break condition
const browser =["chrome", "edge","IE"];
for(const f of browser){
    console.log(f);
    if(f == "IE"){
        console.log("launch browser");
        break;
    }
}
console.log("--------------------------------------------------");

// for...in loop

const user ={
    Name : "Govind",
    Age : "30",
    City : "Pune",
}
    for(const key in user){ 
        console.log(key +":"+ user[key]);
    }
// diffrence betn For...of & for...in is you need to provide varable
//  not ref variable it will print index value in for...in loop
console.log("--------------------------------------------------");
const browsers =["chrome", "edge","IE"];
for(const h in browsers){
    console.log(browsers[h]); // chrome, edge, IE
    console.log(h)// this will print index 0,1,2,3
}
for(const h in browsers){
    console.log(h+":"+ browsers[h]); // chrome, edge, IE
   
}
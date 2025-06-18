// break stament used in JS with for/while loops & Switch-cases, can't used with if-else

function checkDays(dayNumber){
/*switch (key) {  // key i a dayNumber 
    case value:
        
        break;

    default:
        break;
}*/
let day;
switch(dayNumber){
    case 0:
        day= "MON";
        break;
    case 1:
        day ="TUE";
        break;
    case 2:
        day ="WED";
        break;
    case 3:
        day ="THU";
        break;
    case 4:
        day ="FRI";
        break;
    case 5:
        day ="SAT";
        break;
    case 6:
        day ="SUN";
        break;
default:
    console.log("Invalid Day");
    day="no day available";
    break;
}
return day;

}
console.log(checkDays(0));
console.log(checkDays(2));
console.log(checkDays(8));
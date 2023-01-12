const withdraw = amount => {
let first = [];
let second = [];
let third = [];
if(amount >= 100 && amount <=1000){
    first = (amount / 100);  // 2
    aaa = (amount%100);      //70
    //console.log(first);
}
else if(aaa < 100 && aaa >= 50){
    second = (aaa / 50);      //1
    bbb = (aaa%50);           //20
    console.log(second);
 }else if(bbb < 50 && bbb <= 40){
    third = (bbb / 20);      // 1
    ccc = (bbb%20);         // 0
    console.log(third);
}
    //console.log(first, second, third);
    return first, second, third;
    
;}


console.log(withdraw(270))
// falsy
let myvar=40;

// if(!myvar){
//     console.log('it falsy')
// }
// else{
//     console.log('it truthy')
// }

const food=''

// if(!food){
//     console.log('its falsy')
// }
// else{console.log('its truthy')}

let taka=900;

// ternary operator

const foods=taka>100?'byriani':'cha biscuit';
// console.log(foods)
let cash=60;
const drink=(taka>100 && myvar>50||cash>50)?'halim':'smocha';
// console.log(drink)

const num=55;

const numStr=num+''
// console.log(numStr)

const inputStr='555554';
const number=+inputStr
let arr=['33','55']
for(a of arr){
    let num=+a
    // console.log(num)
}
// console.log(number)

let isActive=true;

const showUser=()=>console.log('show user to this');
const hideUser=()=>console.log('hide from user this');

//  isActive?showUser():hideUser();
// isActive&&showUser()
// isActive||hideUser()

//toggle boolean
 isActive=!isActive;

console.log(isActive)
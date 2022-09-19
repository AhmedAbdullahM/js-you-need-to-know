// 1. Variable declaration 
var num=1;

let student='six';
const isMale=true;
// 2. condition : 6 basic condition <,>,=<,>=,==,!=, !==
// multiple condtion :&&,||
if(student==='six'&&isMale||num ===1){
    // console.log('tumi parso')
}
else{
    // console.log('ita kita khorlay')
}

//  3array : index,lenght,push,pop ,shift unshift

const numbers=[44,44,55,343,98]
numbers[6]=66
numbers.push(77)
numbers.shift()
// 4. for loop and while loop
for(let i=0; i<numbers.length; i++){
    number=numbers[i]
    // console.log(number)
}

// 5 function

function multiply(num1,num2){
    total=num1*num2;
    return total

}

let calculate=multiply(4,66)
// console.log(calculate)

// 6 object: 3 ways to access property name

const car={brand:'Toyota', version:2016, name:'Prado' }

// 3 ways to accsess

const carBrand=car.brand
// console.log(car['name'])
// console.log(car.version)
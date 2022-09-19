// 1 Templeate string

const numbers=[44,44,55,343,98]
const car={brand:'Toyota', 
    version:2016, 
    name:'Prado', 
    Country:'Japan',
    price:85000,
    color:['red', 'silver', 'black']}

const about=`This ${car.color[1]} color ${numbers[2]} in right side ${car.name} is mine`
// console.log(about)

// arrow function 

const getFiftyFive=()=>55;

const sixtyFive=num=>num+65

const isEven=x=> x % 2 === 0;

const addThree=(o,t,tr)=>o+t+tr

const doMath=(n,m,v)=>{
    total=n*m+v
    return total;
}

// spread operator: create a new array from an array
const numbersNew=[...numbers]
// create a new array and add new element
const numbersNewNew=[111,...numbers,08,099,124.4]
console.log(numbersNewNew)
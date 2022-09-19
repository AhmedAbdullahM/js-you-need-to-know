// Array destructuring destruturing serial wise 
const numbers=[33,55,44]
// const [x,y,z]=numbers;

 const [x,y,z]=[33,55,44]

 function getValues(num1,num2){
    const nArray=[num1,num2];
    return nArray;

 }

const [first,second]=getValues(33,34)

// object destructuring but serial doesn't matter

const car={brand:'Toyota', 
    version:2016, 
    name:'Prado', 
    Country:'Japan',
    price:85000,
    color:['red', 'silver', 'black']}

    const [one,two,three]=car.color


 const {name,age}={name:'Mahbub', salary:5000, age:24,} 
 
 
 const mahbub={designation:'developer', age:25, machine:'macbook',
    language:['HTML','CSS','Javascript'],
specification:{village:'Monsur',upazila:'kulaura', height:'5.8feet',
glass:{price:1000,brand:'puma'}
    }
}

const [num1,num2]=mahbub.language
const {village,height}=mahbub.specification
const {brand}=mahbub?.specification?.glass
console.log(brand)
const products=[
{name:'Laptop', price:32000, brand:'Dell', color:'black'},
{name:'Phone', price:12000, brand:'xaomi', color:'cyan'},
{name:'watch', price:22000, brand:'rolex', color:'white'},
{name:'Tablet', price:15000, brand:'samsung', color:'silver'},
{name:'Glass', price:2000, brand:'puma', color:'blue'},
{name:'tasbih', price:3000, brand:'Sufi', color:'coral'}
]

const producting=products.map(product=>product.brand)
price=products.map(product=>product.price)
console.log(price)
products.forEach(product=>console.log(product.name))
const cheap=products.filter(product=>product.price<15000)
// const n=products.filter(product=>product.name.includes('s'))
console.log(cheap)
const findSomthing=products.find(product=>product.color.includes('black'))
console.log(findSomthing)

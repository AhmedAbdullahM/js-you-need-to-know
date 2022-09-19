// Json

const car={brand:'Toyota', 
    version:2016, 
    name:'Prado', 
    Country:'Japan',
    price:85000,
    color:['red', 'silver', 'black']}

    const carStrigified=JSON.stringify(car)
    // console.log(car)
    // console.log(carStrigified)
    const carParse=JSON.parse(carStrigified)
    // console.log(carParse)

    //fetch
    // fetch(url)
    // .then(response=>response.json())
    // .then(data=>console.log(data));
    // //  keys,Values
    const key=Object.keys(car)
    const value=Object.values(car)
    // console.log(key)

    // add new product 
    const products=[
        {name:'Laptop', price:32000, brand:'Dell', color:'black'},
        {name:'Phone', price:12000, brand:'xaomi', color:'cyan'},
        {name:'watch', price:22000, brand:'rolex', color:'white'},
        {name:'Tablet', price:15000, brand:'samsung', color:'silver'},
        {name:'Glass', price:2000, brand:'puma', color:'blue'},
        {name:'tasbih', price:3000, brand:'Sufi', color:'coral'}
        ]

    const router={name:'Wifi-router',price:1500, brand:'ZTE', color:'green'}

        const newProducts=[...products,router]

        const remaining=products.filter(product=>product.name.toLocaleLowerCase() !=='phone'.toLocaleLowerCase())
        console.log(remaining)
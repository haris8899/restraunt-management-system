import bcrypt from 'bcrypt'
const data=
{
    users:[
        {
            name:"Haris",
            email:"haris@gmail.com",
            password: bcrypt.hashSync('1234', 8),
            isAdmin: true,
        },
        {
            name: 'John',
            email: 'user@example.com',
            password: bcrypt.hashSync('1234', 8),
            isAdmin: false,
        },
    ],
    fooditems:[
        {
            name:"Boneless Handi",
            category:"Traditional",
            image:"/images/fi1.jpg",
            price:540,
            description:"A very nice dish"
        },
        {
            name:"Biryani",
            category:"Traditional",
            image:"/images/fi2.jpg",
            price:320,
            description:"A very nice dish"
        },
        {
            name:"Karahi",
            category:"Traditional",
            image:"/images/fi3.jpg",
            price:450,
            description:"A very nice dish"
        },
        {
            name:"Rogni Nan",
            category:"Traditional",
            image:"/images/fi4.jpg",
            price:25,
            description:"A very nice dish"
        },
    ]
}

export default data;
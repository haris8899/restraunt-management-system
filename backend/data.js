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
            price:500,
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
        {
            name:"Chicken Pulao",
            category:"Traditional",
            image:"/images/fi7.jpg",
            price:25,
            description:"A very nice dish made from Rice vegetables and Chicken"
        },
        {
            name:"Chicken Almond With Rice",
            category:"International",
            image:"/images/fi6.jpg",
            price:25,
            description:"A very nice dish made from Rice,Almonds,vegetables and Chickent"
        },
        {
            name:"Chicken Speghetti",
            category:"International",
            image:"/images/fi5.jpg",
            price:25,
            description:"A very nice dish made from Noodles vegetables and Chicken"
        },
    ]
}

export default data;
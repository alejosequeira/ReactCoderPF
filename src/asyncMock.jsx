const products= [
    {
        id:'1',
        title:'Spraying Drone',
        marca:"DJI",
        modelo:"Mavic Mini",
        color:"Gris",
        resolucion:"2.7K",
        velocidad:"46.8 km/h",
        price: 100,
        pictureUrl:'https://http2.mlstatic.com/D_NQ_NP_661154-MLA52073987708_102022-O.webp',
        stock: 10,
        description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos.',
        category:"agricola"
    },
    {
        id:'2',
        title:'Seeding DRONE',
        marca:"DJI",
        modelo:"Mavic Pro",
        color:"Negro",
        resolucion:"4.5K",
        velocidad:"36.8 km/h",
        price: 200,
        pictureUrl:'https://http2.mlstatic.com/D_NQ_NP_933680-MLA48481280751_122021-O.webp',
        stock: 10,
        description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos.',
        category:"agricola"
    },
    {
        id:'3',
        title:'Crop Monitoring Drone',
        marca:"",
        modelo:"",
        color:"",
        resolucion:"",
        velocidad:"",
        price: 300,
        pictureUrl:'https://http2.mlstatic.com/D_NQ_NP_933680-MLA48481280751_122021-O.webp',
        stock: 10,
        description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos.',
        category:"agricola"
    },
    {
        id:'4',
        title:'Mapping DRONE',
        marca:"",
        modelo:"",
        color:"",
        resolucion:"",
        velocidad:"",
        price: 200,
        pictureUrl:'https://http2.mlstatic.com/D_NQ_NP_933680-MLA48481280751_122021-O.webp',
        stock: 10,
        description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos.',
        category:"mapping"
    },
    {
        id:'5',
        title:'Seeding DRONE',
        marca:"",
        modelo:"",
        color:"",
        resolucion:"",
        velocidad:"",
        price: 200,
        pictureUrl:'https://http2.mlstatic.com/D_NQ_NP_933680-MLA48481280751_122021-O.webp',
        stock: 10,
        description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos.',
        category:"cargo"
    }
]
export const getProducts = () => {
    return new Promise((resolve)=>{
        setTimeout(() => {
            resolve(products)
        }, 1000)
    })
}
export const getProductById = (productId) => {
    return new Promise((resolve)=>{
        setTimeout(() => {
            resolve(products.find(product => product.id === productId))
        }, 1000)
    })
}
export const getProductByCategory = (categoryId) => {
    return new Promise((resolve)=>{
        setTimeout(() => {
            resolve(products.filter(product => product.category === categoryId))
        }, 1000)
    })
}

// Path: src/components/item/Item.jsx
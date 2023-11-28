const products = [
    {
        id: '1',
        title: 'Spraying Drone',
        marca: "DJI",
        modelo: "Mavic Mini",
        color: "Gris",
        resolucion: "2.7K",
        velocidad: "46.8 km/h",
        price: 100,
        pictureUrl: 'https://http2.mlstatic.com/D_NQ_NP_661154-MLA52073987708_102022-O.webp',
        stock: 10,
        description: 'Los drones DJI se caracterizan por la mejor tecnología al servicio de cada tipo de usuario y escenario de disparo. Si estás buscando un dron para principiantes, un dron profesional o solamente querés estar actualizado con las últimas innovaciones, es hora de elegir a esta marca. Diseñado para vivir una experiencia única. Su velocidad máxima es de 16 m/s, lo que te brindará la posibilidad de ahorrar tiempo en los desplazamientos. A través de su cámara 4K obtendrás imágenes de gran resolución y calidad, y podrás registrar todo su recorrido. Gracias a su sistema GPS conseguirás alcanzar largas distancias y conquistar espacios con independencia. Incluye 1 batería, que abastecerán al drone de la energía suficiente para funcionar. Al finalizar el trayecto, podrás recargarla de manera fácil y cómoda. Al infinito y más allá, este drone aéreo te permitirá ver absolutamente todo desde las alturas. Asegurate de encontrar una plataforma de vuelo que te permita trabajar con comodidad y preparate para volar.',
        category: "agricola",
    },
    {
        id: '2',
        title: 'Seeding DRONE',
        marca: "DJI",
        modelo: "Mavic Pro",
        color: "Negro",
        resolucion: "4.5K",
        velocidad: "36.8 km/h",
        price: 200,
        pictureUrl: 'https://http2.mlstatic.com/D_NQ_NP_933680-MLA48481280751_122021-O.webp',
        stock: 10,
        description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos.',
        category: "agricola"
    },
    {
        id: '3',
        title: 'MONITORING Drone',
        marca: "",
        modelo: "",
        color: "",
        resolucion: "",
        velocidad: "",
        price: 300,
        pictureUrl: 'https://http2.mlstatic.com/D_NQ_NP_933680-MLA48481280751_122021-O.webp',
        stock: 10,
        description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos.',
        category: "agricola"
    },
    {
        id: '4',
        title: 'MAPPING DRONE',
        marca: "",
        modelo: "",
        color: "",
        resolucion: "",
        velocidad: "",
        price: 200,
        pictureUrl: 'https://http2.mlstatic.com/D_NQ_NP_933680-MLA48481280751_122021-O.webp',
        stock: 10,
        description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos.',
        category: "mapping"
    },
    {
        id: '5',
        title: 'CARGO DRONE',
        marca: "",
        modelo: "",
        color: "",
        resolucion: "",
        velocidad: "",
        price: 200,
        pictureUrl: 'https://http2.mlstatic.com/D_NQ_NP_933680-MLA48481280751_122021-O.webp',
        stock: 10,
        description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos.',
        category: "cargo"
    }
]
export const getProducts = () => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(products)
        }, 1000)
    })
}
export const getProductById = (productId) => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(products.find(product => product.id === productId))
        }, 1000)
    })
}
export const getProductByCategory = (categoryId) => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(products.filter(product => product.category === categoryId))
        }, 1000)
    })
}

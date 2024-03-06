export interface TypeDesatacado{
    img: string, 
    text: string
}


const dataDesatacado: TypeDesatacado[] = [
    {
        img: "/drawable/destacado/1.jpg",
        text: "Cultivando Valores"
    },
    {
        img: "/drawable/destacado/2.jpg",
        text: "Hábitos Lectores"
    },
    {
        img: "/drawable/destacado/3.jpg",
        text: "Simulacros de Prevención"
    },
    {
        img: "/drawable/destacado/4.jpg",
        text: "Campeones del Fútbol"
    },
    {
        img: "/drawable/destacado/5.jpg",
        text: "Marchas Patrioticas"
    },
    {
        img: "/drawable/destacado/6.jpg",
        text: "Día del Logro"
    },
    {
        img: "/drawable/destacado/7.jpg",
        text: "Proyectos de FENCIT"
    },
    {
        img: "/drawable/destacado/8.jpg",
        text: "Platos tipicos y nutrivios"
    },
]

function getAllDestacado(){
    return dataDesatacado
}

export {getAllDestacado};
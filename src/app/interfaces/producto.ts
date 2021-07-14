export interface Producto {
    nombre:string;
    imagen:string;
    paginas:number;
    autor:string;
}

export const ListaLibro:Array<Producto>=[
    {
        nombre: "el ultimo deseo",
        imagen:"img/libro1.jpg",
        paginas:264,
        autor: "Andrzej Sapkowski",
    },
    {
        nombre: "la espada del destino",
        imagen:"img/libro2.jpg",
        paginas:288,
        autor: "Andrzej Sapkowski",
    },
    {
        nombre: "la sangre de los elfos",
        imagen:"img/libro3.jpg",
        paginas:264,
        autor: "Andrzej Sapkowski",
    },
    {
        nombre: "tiempo de odio",
        imagen:"img/libro4.jpg",
        paginas:272,
        autor: "Andrzej Sapkowski",
    },
    {
        nombre: "bautismo de fuego",
        imagen:"img/libro5.jpg",
        paginas:264,
        autor: "Andrzej Sapkowski",
    },
    {
        nombre: "la torre de la golondrina",
        imagen:"img/libro6.jpg",
        paginas:336,
        autor: "Andrzej Sapkowski",
    },
    {
        nombre: "la dama del lago",
        imagen:"img/libro7.jpg",
        paginas:464,
        autor: "Andrzej Sapkowski",
    },
    {
        nombre: "camino sin retorno",
        imagen:"img/libro8.jpg",
        paginas:240,
        autor: "Andrzej Sapkowski",
    },
    {
        nombre: "estacion de tormentas",
        imagen:"img/libro9.jpg",
        paginas:312,
        autor: "Andrzej Sapkowski",
    },
    {
        nombre: "musica, solo musica",
        imagen:"img/libro10.jpg",
        paginas:336,
        autor: "Haruki Murakami",
    },
];
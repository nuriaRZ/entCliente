class Pelicula{

    constructor(id, titulo, director, anioEstreno, pais, genero, calificacion){
        this.id = id;
        this.titulo = titulo;
        this.director = director;
        this.anioEstreno = anioEstreno;
        this.pais = pais;
        this.genero = genero;
        this.calificacion = calificacion;

        validarId(id);
        validartitulo(titulo);
        validarAnio(anioEstreno);
        validarGenero(genero);
    }
   

}

function validarId(id){
    try{
        if(!/^[A-z]{2}\d{7}$/.test(id))
            throw new Error("ID incorrecto<br>");
    }catch(error){
        console.log(error);
    }
}

function validartitulo(titulo){
    try{
        if(!/^.{1,100}$/.test(titulo))
            throw new Error("Titulo incorrecto<br>");
    }catch(error){
        console.log(error);
    }    
}

function validarAnio(anioEstreno){
    try{
        if(!/^[\d]{4}$/.test(anioEstreno))
            throw new Error("Año incorrecto<br>");
    }catch(error){
        console.log(error);
    }
}

function validarGenero(genero){
    generos = ["Action", "Adult", "Adventure", "Animation", "Biography", "Comedy", "Crime", "Documentary",
    "Drama", "Family", "Fantasy", "Film noir", "Game-Show", "History", "Horror", "Musical", "Music", "Mystery",
    "News", "Reality-TV", "Romance", "Sci-fi", "Short", "Sport", "Talk-Show", "Thriller", "War", "Western"];

    try{
        if(!generos.includes(genero))
            throw new Error("Genero incorrecto<br>");
    }catch(error){
        console.log(error);
    }
}

const peli1 = new Pelicula (
    'AB1234567', 
    'Star Wars',
    'Lukas Film',
    '1999',
    'EEUU',
    'Sci-fi',
    10
)

const peli2 = new Pelicula (
    'AB2345678', 
    'El Señor de Los Anillos',
    'J.R.R Tolkien',
    '2001',
    'EEUU',
    'Fantasy',
    8.5
)

const peli3 = new Pelicula (
    'AB3456789', 
    'Harry Potter',
    'J.K.Rowling',
    '2001',
    'EEUU',
    'Fantasy',
    9
)


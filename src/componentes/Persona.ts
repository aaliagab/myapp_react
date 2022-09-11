class Persona{
    nombre:string;
    pais:string;
    imagen:string;
    empresa:string;
    cargo:string;
    testimonio:string;
    constructor(nombre:string,pais:string,imagen:string,empresa:string,cargo:string,testimonio:string){
        this.cargo = cargo;
        this.empresa = empresa;
        this.imagen = imagen;
        this.nombre = nombre;
        this.pais = pais;
        this.testimonio = testimonio;
    }
}

export let personas:Persona[] = [];
personas[0] = new Persona(
    "Adriel Aliaga",
    "Cuba",
    "adriel",
    "BeeEngineer and AgileSolutions",
    "FullStack Software Developer",
    "An enthusiastic programmer who has "
    +"dedicated his entire professional life to "
    +"software development and teaching "
    +"programming, as well as artificial "
    +"intelligence techniques in various Cuban "
    +"and Angolan universities."
);

personas[1] = new Persona(
    "Alejandro Benavides",
    "Cuba",
    "alejandro",
    "BeeEngineer and AgileSolutions",
    "FullStack Software Developer",
    "With works on "
    +"github for more than 28 different projects, "
    +"7 of them with access in public view."
);

        
        
        
        
        



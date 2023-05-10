export class Categoria {
    private nombre: string;
    private descripcion?: string;
    private imagen: string;

    public getNombre(): string {
        return this.nombre;
    }

    public setNombre(nombre: string): void {
        this.nombre = nombre;
    }

    public getDescripcion?(): string | undefined {
        return this.descripcion;
    }

    public setDescripcion?(descripcion: string): void {
        this.descripcion = descripcion;
    }

    public getImagen(): string {
        return this.imagen;
    }

    public setImagen(imagen: string): void {
        this.imagen = imagen;
    }


    constructor(
        nombre: string, 
        imagen: string,
        descripcion?: string
    ) {
        this.nombre = nombre
        this.descripcion = descripcion
        this.imagen = imagen
    }    



}
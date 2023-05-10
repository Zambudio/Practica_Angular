export class Articulo {
    private id: number;
    private nombre: string;
    private precio: number;
    private descripcion?: string;
    private imagen?: string;

    public getId(): number {
        return this.id;
    }

    public setId(id: number): void {
        this.id = id;
    }

    public getNombre(): string {
        return this.nombre;
    }

    public setNombre(nombre: string): void {
        this.nombre = nombre;
    }

    public getPrecio(): number {
        return this.precio;
    }

    public setPrecio(precio: number): void {
        this.precio = precio;
    }

    public getDescripcion(): string | undefined {
        return this.descripcion;
    }

    public setDescripcion(descripcion: string): void {
        this.descripcion = descripcion;
    }

    public getImagen(): string | undefined  {
        return this.imagen;
    }

    public setImagen(imagen: string): void {
        this.imagen = imagen;
    }

    
    constructor(
        id: number,
        nombre: string,
        precio: number,
        descripcion?: string,
        imagen?: string
    ) {
        this.id = id
        this.nombre = nombre
        this.precio = precio
        this.descripcion = descripcion
        this.imagen = imagen
    } 

}
export class Projeto {

    private titulo: string;

    constructor(titulo: string) {
        this.titulo = titulo;
    }

    public getTitulo(): string {
        return this.titulo;
    }

    public setTitulo(titulo: string): void {
        this.titulo = titulo;
    }
}
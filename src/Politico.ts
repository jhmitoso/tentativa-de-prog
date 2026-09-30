import { Projeto } from "./Projeto";

export abstract class Politico {

    private nome: string;
    private partido: string;
    private esfera: string;
    private poder: string;
    private localTrabalho: string;
    private enderecoTrabalho: string;
    private remuneracao: number;
    private projetos: Projeto[];

    constructor(
        nome: string,
        partido: string,
        esfera: string,
        poder: string,
        localTrabalho: string,
        enderecoTrabalho: string,
        remuneracao: number
    ) {
        this.nome = nome;
        this.partido = partido;
        this.esfera = esfera;
        this.poder = poder;
        this.localTrabalho = localTrabalho;
        this.enderecoTrabalho = enderecoTrabalho;
        this.remuneracao = remuneracao;
        this.projetos = [];
    }

    public getNome(): string {
        return this.nome;
    }

    public setNome(nome: string): void {
        this.nome = nome;
    }

    public getPartido(): string {
        return this.partido;
    }

    public setPartido(partido: string): void {
        this.partido = partido;
    }

    public getEsfera(): string {
        return this.esfera;
    }

    public setEsfera(esfera: string): void {
        this.esfera = esfera;
    }

    public getPoder(): string {
        return this.poder;
    }

    public setPoder(poder: string): void {
        this.poder = poder;
    }

    public getLocalTrabalho(): string {
        return this.localTrabalho;
    }

    public setLocalTrabalho(localTrabalho: string): void {
        this.localTrabalho = localTrabalho;
    }

    public getEnderecoTrabalho(): string {
        return this.enderecoTrabalho;
    }

    public setEnderecoTrabalho(enderecoTrabalho: string): void {
        this.enderecoTrabalho = enderecoTrabalho;
    }

    public getRemuneracao(): number {
        return this.remuneracao;
    }

    public setRemuneracao(remuneracao: number): void {
        this.remuneracao = remuneracao;
    }

    public getProjetos(): Projeto[] {
        return this.projetos;
    }

    public adicionarProjeto(projeto: Projeto): void {
        this.projetos.push(projeto);
    }

    public abstract exercerMandato(): string;
}
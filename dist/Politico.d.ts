import { Projeto } from "./Projeto";
export declare abstract class Politico {
    private nome;
    private partido;
    private esfera;
    private poder;
    private localTrabalho;
    private enderecoTrabalho;
    private remuneracao;
    private projetos;
    constructor(nome: string, partido: string, esfera: string, poder: string, localTrabalho: string, enderecoTrabalho: string, remuneracao: number);
    getNome(): string;
    setNome(nome: string): void;
    getPartido(): string;
    setPartido(partido: string): void;
    getEsfera(): string;
    setEsfera(esfera: string): void;
    getPoder(): string;
    setPoder(poder: string): void;
    getLocalTrabalho(): string;
    setLocalTrabalho(localTrabalho: string): void;
    getEnderecoTrabalho(): string;
    setEnderecoTrabalho(enderecoTrabalho: string): void;
    getRemuneracao(): number;
    setRemuneracao(remuneracao: number): void;
    getProjetos(): Projeto[];
    adicionarProjeto(projeto: Projeto): void;
    abstract exercerMandato(): string;
}
//# sourceMappingURL=Politico.d.ts.map
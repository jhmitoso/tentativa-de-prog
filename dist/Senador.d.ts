import { Politico } from "./Politico";
export declare class Senador extends Politico {
    private estado;
    private anoEleicao;
    constructor(nome: string, partido: string, localTrabalho: string, enderecoTrabalho: string, remuneracao: number, estado: string, anoEleicao: number);
    getEstado(): string;
    setEstado(estado: string): void;
    getAnoEleicao(): number;
    setAnoEleicao(anoEleicao: number): void;
    exercerMandato(): string;
    aprovarAutoridade(): string;
    julgarCrimeResponsabilidade(): string;
    representarEstado(): string;
}
//# sourceMappingURL=Senador.d.ts.map
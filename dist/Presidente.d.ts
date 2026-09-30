import { Politico } from "./Politico";
export declare class Presidente extends Politico {
    private quantidadeMinistros;
    constructor(nome: string, partido: string, localTrabalho: string, enderecoTrabalho: string, remuneracao: number, quantidadeMinistros: number);
    getQuantidadeMinistros(): number;
    setQuantidadeMinistros(quantidadeMinistros: number): void;
    exercerMandato(): string;
    nomearMinistro(): string;
    exonerarMinistro(): string;
    comandarForcasArmadas(): string;
    representarPais(): string;
    elaborarPPA(): string;
    elaborarLDO(): string;
    elaborarLOA(): string;
}
//# sourceMappingURL=Presidente.d.ts.map
import { Politico } from "./Politico";
export declare class Governador extends Politico {
    private quantidadeSecretarios;
    private estado;
    constructor(nome: string, partido: string, localTrabalho: string, enderecoTrabalho: string, remuneracao: number, quantidadeSecretarios: number, estado: string);
    getQuantidadeSecretarios(): number;
    setQuantidadeSecretarios(quantidadeSecretarios: number): void;
    getEstado(): string;
    setEstado(estado: string): void;
    exercerMandato(): string;
    gerirPoliciaMilitar(): string;
    administrarRodovias(): string;
    coordenarEducacao(): string;
    coordenarSaude(): string;
    elaborarPPA(): string;
    elaborarLDO(): string;
    elaborarLOA(): string;
}
//# sourceMappingURL=Governador.d.ts.map
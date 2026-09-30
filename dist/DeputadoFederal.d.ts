import { Deputado } from "./Deputado";
export declare class DeputadoFederal extends Deputado {
    private bancada;
    constructor(nome: string, partido: string, localTrabalho: string, enderecoTrabalho: string, remuneracao: number, bancada: string);
    getBancada(): string;
    setBancada(bancada: string): void;
    exercerMandato(): string;
    votarPEC(): string;
    criarCPINacional(): string;
    votarPPA(): string;
    votarLDO(): string;
    votarLOA(): string;
    proporLeiComplementar(): string;
}
//# sourceMappingURL=DeputadoFederal.d.ts.map
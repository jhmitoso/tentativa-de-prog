import { Deputado } from "./Deputado";
import { Comissao } from "./Comissao";
export declare class DeputadoEstadual extends Deputado {
    private estado;
    private comissoes;
    constructor(nome: string, partido: string, localTrabalho: string, enderecoTrabalho: string, remuneracao: number, estado: string);
    getEstado(): string;
    setEstado(estado: string): void;
    getComissoes(): Comissao[];
    adicionarComissao(comissao: Comissao): void;
    exercerMandato(): string;
    votarPPA(): string;
    votarLOA(): string;
    votarLDO(): string;
    proporEmenda(): string;
    criarCPI(): string;
}
//# sourceMappingURL=DeputadoEstadual.d.ts.map
import { Deputado } from "./Deputado.js";
import { Comissao } from "./Comissao.js";

export class DeputadoEstadual extends Deputado {
    private estado: string;
    private comissoes: Comissao[];

    constructor(
        nome: string,
        partido: string,
        localTrabalho: string,
        enderecoTrabalho: string,
        remuneracao: number,
        estado: string
    ) {
        super(
            nome,
            partido,
            "Estadual",
            localTrabalho,
            enderecoTrabalho,
            remuneracao
        );

        this.estado = estado;
        this.comissoes = [];
    }

    public getEstado(): string {
        return this.estado;
    }

    public setEstado(estado: string): void {
        this.estado = estado;
    }

    public getComissoes(): Comissao[] {
        return this.comissoes;
    }

    public adicionarComissao(comissao: Comissao): void {
        this.comissoes.push(comissao);
    }

    public exercerMandato(): string {
        return "O deputado estadual legisla sobre assuntos do estado e fiscaliza o governador.";
    }

    public votarPPA(): string {
        return "O deputado estadual vota o PPA estadual.";
    }

    public votarLOA(): string {
        return "O deputado estadual vota a LOA estadual.";
    }

    public votarLDO(): string {
        return "O deputado estadual vota a LDO estadual.";
    }

    public proporEmenda(): string {
        return "O deputado estadual pode propor emendas à Constituição estadual.";
    }

    public criarCPI(): string {
        return "O deputado estadual pode participar da criação de uma CPI estadual.";
    }
}
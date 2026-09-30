import { Deputado } from "./Deputado";

export class DeputadoFederal extends Deputado {

    private bancada: string;

    constructor(
        nome: string,
        partido: string,
        localTrabalho: string,
        enderecoTrabalho: string,
        remuneracao: number,
        bancada: string
    ) {
        super(
            nome,
            partido,
            "Federal",
            localTrabalho,
            enderecoTrabalho,
            remuneracao
        );

        this.bancada = bancada;
    }

    public getBancada(): string {
        return this.bancada;
    }

    public setBancada(bancada: string): void {
        this.bancada = bancada;
    }

    public exercerMandato(): string {
        return "O deputado federal legisla sobre assuntos da União e fiscaliza o presidente.";
    }

    public votarPEC(): string {
        return "O deputado federal vota propostas de emenda à Constituição.";
    }

    public criarCPINacional(): string {
        return "O deputado federal pode participar da criação de uma CPI nacional.";
    }

    public votarPPA(): string {
        return "O deputado federal vota o PPA federal.";
    }

    public votarLDO(): string {
        return "O deputado federal vota a LDO federal.";
    }

    public votarLOA(): string {
        return "O deputado federal vota a LOA federal.";
    }

    public proporLeiComplementar(): string {
        return "O deputado federal pode propor leis complementares.";
    }
}
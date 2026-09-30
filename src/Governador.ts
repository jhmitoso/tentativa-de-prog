import { Politico } from "./Politico";

export class Governador extends Politico {

    private quantidadeSecretarios: number;
    private estado: string;

    constructor(
        nome: string,
        partido: string,
        localTrabalho: string,
        enderecoTrabalho: string,
        remuneracao: number,
        quantidadeSecretarios: number,
        estado: string
    ) {
        super(
            nome,
            partido,
            "Estadual",
            "Executivo",
            localTrabalho,
            enderecoTrabalho,
            remuneracao
        );

        this.quantidadeSecretarios = quantidadeSecretarios;
        this.estado = estado;
    }

    public getQuantidadeSecretarios(): number {
        return this.quantidadeSecretarios;
    }

    public setQuantidadeSecretarios(quantidadeSecretarios: number): void {
        this.quantidadeSecretarios = quantidadeSecretarios;
    }

    public getEstado(): string {
        return this.estado;
    }

    public setEstado(estado: string): void {
        this.estado = estado;
    }

    public exercerMandato(): string {
        return "O governador administra o estado e pode sancionar ou vetar leis estaduais.";
    }

    public gerirPoliciaMilitar(): string {
        return "O governador administra a Polícia Militar do estado.";
    }

    public administrarRodovias(): string {
        return "O governador administra as rodovias estaduais.";
    }

    public coordenarEducacao(): string {
        return "O governador coordena a educação estadual.";
    }

    public coordenarSaude(): string {
        return "O governador coordena a saúde estadual.";
    }

    public elaborarPPA(): string {
        return "O governador prepara e envia o PPA estadual.";
    }

    public elaborarLDO(): string {
        return "O governador prepara e envia a LDO estadual.";
    }

    public elaborarLOA(): string {
        return "O governador prepara e envia a LOA estadual.";
    }
}
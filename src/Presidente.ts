import { Politico } from "./Politico";

export class Presidente extends Politico {

    private quantidadeMinistros: number;

    constructor(
        nome: string,
        partido: string,
        localTrabalho: string,
        enderecoTrabalho: string,
        remuneracao: number,
        quantidadeMinistros: number
    ) {
        super(
            nome,
            partido,
            "Federal",
            "Executivo",
            localTrabalho,
            enderecoTrabalho,
            remuneracao
        );

        this.quantidadeMinistros = quantidadeMinistros;
    }

    public getQuantidadeMinistros(): number {
        return this.quantidadeMinistros;
    }

    public setQuantidadeMinistros(quantidadeMinistros: number): void {
        this.quantidadeMinistros = quantidadeMinistros;
    }

    public exercerMandato(): string {
        return "O presidente pode propor, sancionar e vetar leis e editar medidas provisórias.";
    }

    public nomearMinistro(): string {
        return "O presidente pode nomear ministros.";
    }

    public exonerarMinistro(): string {
        return "O presidente pode exonerar ministros.";
    }

    public comandarForcasArmadas(): string {
        return "O presidente exerce a autoridade suprema sobre as Forças Armadas.";
    }

    public representarPais(): string {
        return "O presidente representa o país internacionalmente.";
    }

    public elaborarPPA(): string {
        return "O presidente prepara e envia o PPA nacional.";
    }

    public elaborarLDO(): string {
        return "O presidente prepara e envia a LDO nacional.";
    }

    public elaborarLOA(): string {
        return "O presidente prepara e envia a LOA nacional.";
    }
}
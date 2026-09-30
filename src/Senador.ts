import { Politico } from "./Politico";

export class Senador extends Politico {

    private estado: string;
    private anoEleicao: number;

    constructor(
        nome: string,
        partido: string,
        localTrabalho: string,
        enderecoTrabalho: string,
        remuneracao: number,
        estado: string,
        anoEleicao: number
    ) {
        super(
            nome,
            partido,
            "Federal",
            "Legislativo",
            localTrabalho,
            enderecoTrabalho,
            remuneracao
        );

        this.estado = estado;
        this.anoEleicao = anoEleicao;
    }

    public getEstado(): string {
        return this.estado;
    }

    public setEstado(estado: string): void {
        this.estado = estado;
    }

    public getAnoEleicao(): number {
        return this.anoEleicao;
    }

    public setAnoEleicao(anoEleicao: number): void {
        this.anoEleicao = anoEleicao;
    }

    public exercerMandato(): string {
        return "O senador legisla sobre assuntos federais e fiscaliza o poder público.";
    }

    public aprovarAutoridade(): string {
        return "O senador participa da aprovação de autoridades previstas na Constituição.";
    }

    public julgarCrimeResponsabilidade(): string {
        return "O Senado pode processar e julgar autoridades nos casos previstos na Constituição.";
    }

    public representarEstado(): string {
        return "O senador representa seu estado no Senado Federal.";
    }
}
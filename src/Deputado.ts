import { Politico } from "./Politico.js";

export abstract class Deputado extends Politico {
    constructor(
        nome: string,
        partido: string,
        esfera: string,
        localTrabalho: string,
        enderecoTrabalho: string,
        remuneracao: number
    ) {
        super(
            nome,
            partido,
            esfera,
            "Legislativo",
            localTrabalho,
            enderecoTrabalho,
            remuneracao
        );
    }

    public abstract exercerMandato(): string;
}
import { Politico } from "./Politico";
export declare abstract class Deputado extends Politico {
    constructor(nome: string, partido: string, esfera: string, localTrabalho: string, enderecoTrabalho: string, remuneracao: number);
    abstract exercerMandato(): string;
}
//# sourceMappingURL=Deputado.d.ts.map
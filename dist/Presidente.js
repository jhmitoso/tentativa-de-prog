"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Presidente = void 0;
const Politico_1 = require("./Politico");
class Presidente extends Politico_1.Politico {
    quantidadeMinistros;
    constructor(nome, partido, localTrabalho, enderecoTrabalho, remuneracao, quantidadeMinistros) {
        super(nome, partido, "Federal", "Executivo", localTrabalho, enderecoTrabalho, remuneracao);
        this.quantidadeMinistros = quantidadeMinistros;
    }
    getQuantidadeMinistros() {
        return this.quantidadeMinistros;
    }
    setQuantidadeMinistros(quantidadeMinistros) {
        this.quantidadeMinistros = quantidadeMinistros;
    }
    exercerMandato() {
        return "O presidente pode propor, sancionar e vetar leis e editar medidas provisórias.";
    }
    nomearMinistro() {
        return "O presidente pode nomear ministros.";
    }
    exonerarMinistro() {
        return "O presidente pode exonerar ministros.";
    }
    comandarForcasArmadas() {
        return "O presidente exerce a autoridade suprema sobre as Forças Armadas.";
    }
    representarPais() {
        return "O presidente representa o país internacionalmente.";
    }
    elaborarPPA() {
        return "O presidente prepara e envia o PPA nacional.";
    }
    elaborarLDO() {
        return "O presidente prepara e envia a LDO nacional.";
    }
    elaborarLOA() {
        return "O presidente prepara e envia a LOA nacional.";
    }
}
exports.Presidente = Presidente;
//# sourceMappingURL=Presidente.js.map
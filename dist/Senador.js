"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Senador = void 0;
const Politico_1 = require("./Politico");
class Senador extends Politico_1.Politico {
    estado;
    anoEleicao;
    constructor(nome, partido, localTrabalho, enderecoTrabalho, remuneracao, estado, anoEleicao) {
        super(nome, partido, "Federal", "Legislativo", localTrabalho, enderecoTrabalho, remuneracao);
        this.estado = estado;
        this.anoEleicao = anoEleicao;
    }
    getEstado() {
        return this.estado;
    }
    setEstado(estado) {
        this.estado = estado;
    }
    getAnoEleicao() {
        return this.anoEleicao;
    }
    setAnoEleicao(anoEleicao) {
        this.anoEleicao = anoEleicao;
    }
    exercerMandato() {
        return "O senador legisla sobre assuntos federais e fiscaliza o poder público.";
    }
    aprovarAutoridade() {
        return "O senador participa da aprovação de autoridades previstas na Constituição.";
    }
    julgarCrimeResponsabilidade() {
        return "O Senado pode processar e julgar autoridades nos casos previstos na Constituição.";
    }
    representarEstado() {
        return "O senador representa seu estado no Senado Federal.";
    }
}
exports.Senador = Senador;
//# sourceMappingURL=Senador.js.map
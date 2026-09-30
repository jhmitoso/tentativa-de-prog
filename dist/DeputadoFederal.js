"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DeputadoFederal = void 0;
const Deputado_1 = require("./Deputado");
class DeputadoFederal extends Deputado_1.Deputado {
    bancada;
    constructor(nome, partido, localTrabalho, enderecoTrabalho, remuneracao, bancada) {
        super(nome, partido, "Federal", localTrabalho, enderecoTrabalho, remuneracao);
        this.bancada = bancada;
    }
    getBancada() {
        return this.bancada;
    }
    setBancada(bancada) {
        this.bancada = bancada;
    }
    exercerMandato() {
        return "O deputado federal legisla sobre assuntos da União e fiscaliza o presidente.";
    }
    votarPEC() {
        return "O deputado federal vota propostas de emenda à Constituição.";
    }
    criarCPINacional() {
        return "O deputado federal pode participar da criação de uma CPI nacional.";
    }
    votarPPA() {
        return "O deputado federal vota o PPA federal.";
    }
    votarLDO() {
        return "O deputado federal vota a LDO federal.";
    }
    votarLOA() {
        return "O deputado federal vota a LOA federal.";
    }
    proporLeiComplementar() {
        return "O deputado federal pode propor leis complementares.";
    }
}
exports.DeputadoFederal = DeputadoFederal;
//# sourceMappingURL=DeputadoFederal.js.map
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Governador = void 0;
const Politico_1 = require("./Politico");
class Governador extends Politico_1.Politico {
    quantidadeSecretarios;
    estado;
    constructor(nome, partido, localTrabalho, enderecoTrabalho, remuneracao, quantidadeSecretarios, estado) {
        super(nome, partido, "Estadual", "Executivo", localTrabalho, enderecoTrabalho, remuneracao);
        this.quantidadeSecretarios = quantidadeSecretarios;
        this.estado = estado;
    }
    getQuantidadeSecretarios() {
        return this.quantidadeSecretarios;
    }
    setQuantidadeSecretarios(quantidadeSecretarios) {
        this.quantidadeSecretarios = quantidadeSecretarios;
    }
    getEstado() {
        return this.estado;
    }
    setEstado(estado) {
        this.estado = estado;
    }
    exercerMandato() {
        return "O governador administra o estado e pode sancionar ou vetar leis estaduais.";
    }
    gerirPoliciaMilitar() {
        return "O governador administra a Polícia Militar do estado.";
    }
    administrarRodovias() {
        return "O governador administra as rodovias estaduais.";
    }
    coordenarEducacao() {
        return "O governador coordena a educação estadual.";
    }
    coordenarSaude() {
        return "O governador coordena a saúde estadual.";
    }
    elaborarPPA() {
        return "O governador prepara e envia o PPA estadual.";
    }
    elaborarLDO() {
        return "O governador prepara e envia a LDO estadual.";
    }
    elaborarLOA() {
        return "O governador prepara e envia a LOA estadual.";
    }
}
exports.Governador = Governador;
//# sourceMappingURL=Governador.js.map
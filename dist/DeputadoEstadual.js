"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DeputadoEstadual = void 0;
const Deputado_1 = require("./Deputado");
const Comissao_1 = require("./Comissao");
class DeputadoEstadual extends Deputado_1.Deputado {
    estado;
    comissoes;
    constructor(nome, partido, localTrabalho, enderecoTrabalho, remuneracao, estado) {
        super(nome, partido, "Estadual", localTrabalho, enderecoTrabalho, remuneracao);
        this.estado = estado;
        this.comissoes = [];
    }
    getEstado() {
        return this.estado;
    }
    setEstado(estado) {
        this.estado = estado;
    }
    getComissoes() {
        return this.comissoes;
    }
    adicionarComissao(comissao) {
        this.comissoes.push(comissao);
    }
    exercerMandato() {
        return "O deputado estadual legisla sobre assuntos do estado e fiscaliza o governador.";
    }
    votarPPA() {
        return "O deputado estadual vota o PPA estadual.";
    }
    votarLOA() {
        return "O deputado estadual vota a LOA estadual.";
    }
    votarLDO() {
        return "O deputado estadual vota a LDO estadual.";
    }
    proporEmenda() {
        return "O deputado estadual pode propor emendas à Constituição estadual.";
    }
    criarCPI() {
        return "O deputado estadual pode participar da criação de uma CPI estadual.";
    }
}
exports.DeputadoEstadual = DeputadoEstadual;
//# sourceMappingURL=DeputadoEstadual.js.map
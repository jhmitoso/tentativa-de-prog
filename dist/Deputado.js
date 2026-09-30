"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Deputado = void 0;
const Politico_1 = require("./Politico");
class Deputado extends Politico_1.Politico {
    constructor(nome, partido, esfera, localTrabalho, enderecoTrabalho, remuneracao) {
        super(nome, partido, esfera, "Legislativo", localTrabalho, enderecoTrabalho, remuneracao);
    }
}
exports.Deputado = Deputado;
//# sourceMappingURL=Deputado.js.map
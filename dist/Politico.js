"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Politico = void 0;
const Projeto_1 = require("./Projeto");
class Politico {
    nome;
    partido;
    esfera;
    poder;
    localTrabalho;
    enderecoTrabalho;
    remuneracao;
    projetos;
    constructor(nome, partido, esfera, poder, localTrabalho, enderecoTrabalho, remuneracao) {
        this.nome = nome;
        this.partido = partido;
        this.esfera = esfera;
        this.poder = poder;
        this.localTrabalho = localTrabalho;
        this.enderecoTrabalho = enderecoTrabalho;
        this.remuneracao = remuneracao;
        this.projetos = [];
    }
    getNome() {
        return this.nome;
    }
    setNome(nome) {
        this.nome = nome;
    }
    getPartido() {
        return this.partido;
    }
    setPartido(partido) {
        this.partido = partido;
    }
    getEsfera() {
        return this.esfera;
    }
    setEsfera(esfera) {
        this.esfera = esfera;
    }
    getPoder() {
        return this.poder;
    }
    setPoder(poder) {
        this.poder = poder;
    }
    getLocalTrabalho() {
        return this.localTrabalho;
    }
    setLocalTrabalho(localTrabalho) {
        this.localTrabalho = localTrabalho;
    }
    getEnderecoTrabalho() {
        return this.enderecoTrabalho;
    }
    setEnderecoTrabalho(enderecoTrabalho) {
        this.enderecoTrabalho = enderecoTrabalho;
    }
    getRemuneracao() {
        return this.remuneracao;
    }
    setRemuneracao(remuneracao) {
        this.remuneracao = remuneracao;
    }
    getProjetos() {
        return this.projetos;
    }
    adicionarProjeto(projeto) {
        this.projetos.push(projeto);
    }
}
exports.Politico = Politico;
//# sourceMappingURL=Politico.js.map
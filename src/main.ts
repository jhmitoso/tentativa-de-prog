import { Presidente } from "./Presidente.js";
import { Governador } from "./Governador.js";
import { Senador } from "./Senador.js";
import { DeputadoEstadual } from "./DeputadoEstadual.js";
import { DeputadoFederal } from "./DeputadoFederal.js";
import { Projeto } from "./Projeto.js";
import { Comissao } from "./Comissao.js";

const presidente = new Presidente(
    "Luiz Inácio Lula da Silva",
    "PT",
    "Palácio do Planalto",
    "Praça dos Três Poderes, Brasília - DF",
    46366.19,
    16
);

const governadorPE = new Governador(
    "Raquel Lyra",
    "PSD",
    "Palácio do Campo das Princesas",
    "Praça da República, Recife - PE",
    42145,
    27,
    "Pernambuco"
);

const governadorBA = new Governador(
    "Rui Costa",
    "PT",
    "Poder Executivo da Bahia",
    "Metrô de Salvador, Salvador - BA",
    23516,
    23,
    "Bahia"
);

const deputadoFederalPE1 = new DeputadoFederal(
    "Eduardo da Fonte",
    "PP",
    "Câmara dos Deputados",
    "Praça dos Três Poderes, Brasília - DF",
    46366.19,
    "Bancada de Pernambuco"
);

const deputadoFederalPE2 = new DeputadoFederal(
    "Eriberto Medeiros",
    "PSB",
    "Câmara dos Deputados",
    "Praça dos Três Poderes, Brasília - DF",
    46366.19,
    "Bancada de Pernambuco"
);

const deputadoFederalPE3 = new DeputadoFederal(
    "Felipe Carreras",
    "PSB",
    "Câmara dos Deputados",
    "Praça dos Três Poderes, Brasília - DF",
    46366.19,
    "Bancada de Pernambuco"
);

const deputadoFederalBA1 = new DeputadoFederal(
    "Elmar Nascimento",
    "UNIÃO",
    "Câmara dos Deputados",
    "Praça dos Três Poderes, Brasília - DF",
    46366.19,
    "Bancada da Bahia"
);

const deputadoFederalBA2 = new DeputadoFederal(
    "Daniel Almeida",
    "PCdoB",
    "Câmara dos Deputados",
    "Praça dos Três Poderes, Brasília - DF",
    46366.19,
    "Bancada da Bahia"
);

const deputadoEstadualPE1 = new DeputadoEstadual(
    "Álvaro Porto",
    "PSDB",
    "Assembleia Legislativa de Pernambuco",
    "Rua da União, Recife - PE",
    34774.64,
    "Pernambuco"
);

const deputadoEstadualPE2 = new DeputadoEstadual(
    "João Paulo",
    "PT",
    "Assembleia Legislativa de Pernambuco",
    "Rua da União, Recife - PE",
    34774.64,
    "Pernambuco"
);

const deputadoEstadualPE3 = new DeputadoEstadual(
    "Dani Portela",
    "PSOL",
    "Assembleia Legislativa de Pernambuco",
    "Rua da União, Recife - PE",
    34774.64,
    "Pernambuco"
);

const deputadoEstadualBA1 = new DeputadoEstadual(
    "Adolfo Menezes",
    "PSD",
    "Assembleia Legislativa da Bahia",
    "Centro Administrativo da Bahia, Salvador - BA",
    34774.64,
    "Bahia"
);

const deputadoEstadualBA2 = new DeputadoEstadual(
    "Ivana Bastos",
    "PSD",
    "Assembleia Legislativa da Bahia",
    "Centro Administrativo da Bahia, Salvador - BA",
    34774.64,
    "Bahia"
);

const senadorPE1 = new Senador(
    "Humberto Costa",
    "PT",
    "Senado Federal",
    "Praça dos Três Poderes, Brasília - DF",
    46366.19,
    "Pernambuco",
    2018
);

const senadorPE2 = new Senador(
    "Teresa Leitão",
    "PT",
    "Senado Federal",
    "Praça dos Três Poderes, Brasília - DF",
    46366.19,
    "Pernambuco",
    2022
);

const senadorBA = new Senador(
    "Angelo Coronel",
    "Republicanos",
    "Senado Federal",
    "Praça dos Três Poderes, Brasília - DF",
    46366.19,
    "Bahia",
    2018
);

const projeto1 = new Projeto("Projeto de Educação");

const projeto2 = new Projeto("Projeto de Saúde");

const projeto3 = new Projeto("Projeto de Infraestrutura");

const projeto4 = new Projeto("Projeto de Segurança");

const comissao1 = new Comissao("Comissão de Constituição e Justiça");

const comissao2 = new Comissao("Comissão de Educação");

const comissao3 = new Comissao("Comissão de Saúde");

const comissao4 = new Comissao("Comissão de Infraestrutura");

presidente.adicionarProjeto(projeto1);

governadorPE.adicionarProjeto(projeto2);
governadorBA.adicionarProjeto(projeto3);

deputadoFederalPE1.adicionarProjeto(projeto1);
deputadoFederalBA1.adicionarProjeto(projeto4);

deputadoEstadualPE1.adicionarComissao(comissao1);
deputadoEstadualPE2.adicionarComissao(comissao2);
deputadoEstadualPE3.adicionarComissao(comissao3);

deputadoEstadualBA1.adicionarComissao(comissao1);
deputadoEstadualBA2.adicionarComissao(comissao4);

console.log("Presidente");

console.log(presidente.getNome());
console.log(presidente.getPartido());
console.log(presidente.getEsfera());
console.log(presidente.getPoder());
console.log(presidente.exercerMandato());

console.log(presidente.nomearMinistro());
console.log(presidente.exonerarMinistro());
console.log(presidente.comandarForcasArmadas());
console.log(presidente.representarPais());
console.log(presidente.elaborarPPA());
console.log(presidente.elaborarLDO());
console.log(presidente.elaborarLOA());

console.log("Governadores");

console.log(governadorPE.getNome());
console.log(governadorPE.getEstado());
console.log(governadorPE.getPartido());
console.log(governadorPE.exercerMandato());

console.log(governadorPE.gerirPoliciaMilitar());
console.log(governadorPE.administrarRodovias());
console.log(governadorPE.coordenarEducacao());
console.log(governadorPE.coordenarSaude());
console.log(governadorPE.elaborarPPA());
console.log(governadorPE.elaborarLDO());
console.log(governadorPE.elaborarLOA());

console.log(governadorBA.getNome());
console.log(governadorBA.getEstado());
console.log(governadorBA.getPartido());
console.log(governadorBA.exercerMandato());

console.log("Deputados Federais");

console.log(deputadoFederalPE1.getNome());
console.log(deputadoFederalPE1.getBancada());
console.log(deputadoFederalPE1.exercerMandato());
console.log(deputadoFederalPE1.votarPEC());
console.log(deputadoFederalPE1.criarCPINacional());
console.log(deputadoFederalPE1.votarPPA());
console.log(deputadoFederalPE1.votarLDO());
console.log(deputadoFederalPE1.votarLOA());
console.log(deputadoFederalPE1.proporLeiComplementar());

console.log(deputadoFederalPE2.getNome());
console.log(deputadoFederalPE3.getNome());

console.log(deputadoFederalBA1.getNome());
console.log(deputadoFederalBA1.getBancada());

console.log(deputadoFederalBA2.getNome());
console.log(deputadoFederalBA2.getBancada());

console.log("Deputados Estaduais");

console.log(deputadoEstadualPE1.getNome());
console.log(deputadoEstadualPE1.getEstado());
console.log(deputadoEstadualPE1.exercerMandato());
console.log(deputadoEstadualPE1.votarPPA());
console.log(deputadoEstadualPE1.votarLOA());
console.log(deputadoEstadualPE1.votarLDO());
console.log(deputadoEstadualPE1.proporEmenda());
console.log(deputadoEstadualPE1.criarCPI());

console.log(deputadoEstadualPE2.getNome());
console.log(deputadoEstadualPE3.getNome());

console.log(deputadoEstadualBA1.getNome());
console.log(deputadoEstadualBA1.getEstado());

console.log(deputadoEstadualBA2.getNome());
console.log(deputadoEstadualBA2.getEstado());

console.log("Senadores");

console.log(senadorPE1.getNome());
console.log(senadorPE1.getEstado());
console.log(senadorPE1.getAnoEleicao());
console.log(senadorPE1.exercerMandato());
console.log(senadorPE1.aprovarAutoridade());
console.log(senadorPE1.julgarCrimeResponsabilidade());
console.log(senadorPE1.representarEstado());

console.log(senadorPE2.getNome());
console.log(senadorPE2.getEstado());
console.log(senadorPE2.getAnoEleicao());

console.log(senadorBA.getNome());
console.log(senadorBA.getEstado());
console.log(senadorBA.getAnoEleicao());

console.log("Projetos");

console.log(projeto1.getTitulo());
console.log(projeto2.getTitulo());
console.log(projeto3.getTitulo());
console.log(projeto4.getTitulo());

console.log("Comissões");

console.log(comissao1.getNome());
console.log(comissao2.getNome());
console.log(comissao3.getNome());
console.log(comissao4.getNome());



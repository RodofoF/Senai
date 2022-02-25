let listaDeParticipantes = [];
let quantidadeDeParticipantes = listaDeParticipantes.length + 1;
let listaDePalestrantes = [];
let dataDoEvento = [];

now = new Date;
let dia = now.getDate();
let mes = now.getMonth() + 1;
let ano = now.getFullYear();

let diaInscricao = 18;
let mesInscricao = 12;
let anoInscricao = 2021;

let idadeParticipante = 20;
let idadePermitida = 18;

let descricao = "Participante";
let descricao1 = "Participante";
let descricao2 = "Palestrante";

let nomeParticipante = "Maria";
let nomePalestrante = "Robson";

if(diaInscricao < dia && mesInscricao <= mes && anoInscricao <= ano){
    if(idadeParticipante >= idadePermitida) {
        if( descricao == descricao1){
            if( quantidadeDeParticipantes < 100){
                listaDeParticipantes.push = nomeParticipante;
            }else if (descricao == descricao2){
                listaDePalestrantes.push = nomePalestrante;
            }else { console.log("Cadastro não permitido por ter excedido o limite! ")}
        }
    }else (console.log("Cadastro não permitido pela idade"))
} else {console.log("Dia Inválido")}

console.log(listaDeParticipantes);
console.log(listaDePalestrantes);
console.log(quantidadeDeParticipantes);
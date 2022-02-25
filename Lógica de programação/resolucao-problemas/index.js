let listaDeEstudantes = ["Helena", "Chico", "Mario"];
let quantidadeDeEstudantes = listaDeEstudantes.length;

if (quantidadeDeEstudantes < 5 ) {
    listaDeEstudantes.push("José");
    console.log(listaDeEstudantes)
} else {
    console.log("Não é possivel inserir mais alunos nessa turma.")
}

for (let i = 0; i < quantidadeDeEstudantes; i++) {
    const alunoCorrente = listaDeEstudantes[i];
    console.log(alunoCorrente);
}
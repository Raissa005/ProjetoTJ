function menuP() {
    console.log("1- Prefeitura de Tijucas");
    console.log("2- Diretorias e gabinetes");
    console.log("3- Secretarias");
    console.log("4- IPVA");
    console.log("5- Ouvidoria");
    console.log("6- Licitações");
    console.log("7- IPTU");
    console.log("8- Voltar");
    console.log("");

}

function perguntarOpcaoMenuP(prompt) {
    let objetoConsulta = 'opção';
    console.log(`Qual ${objetoConsulta} você deseja?`);
    let reposta = prompt('>>');
    return parseInt(reposta);    
}
module.exports = {
    menuP,
    perguntarOpcaoMenuP
}

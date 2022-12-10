function menuS() {
    console.log("1- Farmácias e Hospitais");
    console.log("2- Em situações de emergência");
    console.log("3- Medicamentos");
    console.log("4- Farmácias de plantão");
    console.log("5- Voltar");
    console.log("");
}
function perguntarOpcaoMenuS(prompt ) {
    let objetoConsulta = 'opção';
    console.log(`Qual ${objetoConsulta} você deseja?`);
    let reposta = prompt('>>');
    return parseInt(reposta);    
}
module.exports = {
    menuS,
    perguntarOpcaoMenuS
}


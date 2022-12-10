function opcao4() {
    console.log ("Farmácias de plantão");
    console.log("1- Agosto");
    console.log("2- Setembro");
    console.log("3- Outubro");
    console.log("4- Novembro");
    console.log("5- Dezembro");
    console.log("6- Voltar");
    console.log("");
}
function perguntarPlantao(prompt ) {
    let objetoConsulta = 'opção';
    console.log(`Qual ${objetoConsulta} você deseja?`);
    let reposta = prompt('>>');
    return parseInt(reposta);    
}
module.exports = { 
    opcao4,
    perguntarPlantao
}
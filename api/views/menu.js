function menu() {
    console.log("1- Saúde");
    console.log("2- Prefeitura");
    console.log("3- Sair");

}
function perguntarOpcaoMenu(prompt) {
    let objetoConsulta = 'opção';
    console.log(`Qual ${objetoConsulta} você deseja?`);
    let reposta = prompt('>>');
    return reposta;    
}
module.exports = {
    menu,
    perguntarOpcaoMenu
}


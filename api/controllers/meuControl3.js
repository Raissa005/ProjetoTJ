const visao = require('../views/menu.js');
const saude = require('../views/saudes/saude.js');
const emergencia = require('../models/emergencia.js');
const farmHosp = require('../models/farmHosp.js');
const medicamentos = require('../models/medicamentos.js');
const plantao = require('../views/saudes/plantao.js');
const planAgosto =  require('../models/planAgosto.js');
const planSetembro =  require('../models/planSetembro.js');
const planOutubro =  require('../models/planOutubro.js');
const planNovembro =  require('../models/planNovembro.js');
const planDezembro =  require('../models/planDezembro.js');
const prefeitura = require('../views/prefeitur/prefMenu.js');
const prefeituraTJ = require('../views/prefeitur/prefeituraTJ.js');
const ipva = require('../views/prefeitur/ipva.js');
const iptu = require('../views/prefeitur/iptu.js');
const ouvidoria = require('../views/prefeitur/ouvidoria.js');
const licitacoes = require('../views/prefeitur/licitacoes.js');
const secretarias = require('../models/secretarias.js');
const diretGab = require('../models/diretGab.js');
const prompt = require('prompt-sync')();

function inicia() {
    var opcaoEscolhida = 0;
    do {
        visao.menu();
        opcaoEscolhida = saude.perguntarOpcaoMenuS(prompt);
            if (opcaoEscolhida == 3 ) {
                console.log("Sair");
            } if (opcaoEscolhida == 1 ){ 
                let opcao;
                do{ 
                    saude.menuS();
                    opcao = saude.perguntarOpcaoMenuS(prompt);
                    switch (opcao) {
                        case 1: farmHosp.leitorArq();
                            break;
                        case 2: emergencia.leitorArq();
                            break;
                        case 3: medicamentos.leitorArq(); 
                            break;
                        case 4:
                            let opcaoEsc;
                            do{
                                plantao.opcao4();
                                opcaoEsc = plantao.perguntarPlantao(prompt);
                                    switch(opcaoEsc) {
                                        case 1: planAgosto.leitorArq();
                                            break;
                                        case 2:planSetembro.leitorArq();
                                            break;
                                        case 3: planOutubro.leitorArq();
                                            break;
                                        case 4: planNovembro.leitorArq();
                                            break;
                                        case 5: planDezembro.leitorArq();
                                            break;
                                    }
                            } while(opcaoEsc != 6);
                            break;
                    }
                } while(opcao != 5);
            } if (opcaoEscolhida ==2 ) {
                let opcao;
                do { 
                    prefeitura.menuP();
                    opcao = prefeitura.perguntarOpcaoMenuP(prompt);
                    switch (opcao) {
                        case 1: prefeituraTJ.opcaoP1();
                            break;
                        case 2: diretGab.leitorArq();
                            break;
                        case 3: secretarias.leitorArq(); 
                            break;
                        case 4: ipva.opcaoP5();
                            break;
                        case 5: ouvidoria.opcaoP7();
                            break;
                        case 6: licitacoes.opcaoP4();
                            return opcao == 8;  
                        case 7: iptu.opcaoP6();
                            return opcao == 8;

                    }
                } while(opcao != 8);                
            } if (opcaoEscolhida > 3) {
                console.log("Escolha opcao 1, 2 ou 3");        
            }       
    } while(opcaoEscolhida!=3)
} 
module.exports = {
    inicia
}
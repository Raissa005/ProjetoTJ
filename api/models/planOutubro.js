const fs = require('fs')
const nomeArq = '/plantaoOut.txt';
const path = __dirname + `${nomeArq}`;

function leitorArq() {
    let arq = fs.readFileSync(path, {encoding:'utf8', flag:'r'});
    console.log(arq);
}      
module.exports = {
    leitorArq
}
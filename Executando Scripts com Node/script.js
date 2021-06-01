//"Requiere"faz uma requisição (Importação) para "calc" e "calc" retorna o que tiver dentro "module.exports ="
let calc = require("./calc");

//"Requiere"faz uma requisição (Importação) para "Soma" e "Soma"o retorna que tiver dentro
// let soma = require("./calc");
// let mult = require("./calc");

//Faz um corte dos 2 primeiros elementos e retorno dos 2 elementos para frente
const args = process.argv.slice(2);

//console.log(args)

let a = Number(args[1]); //"Number" tranforma para qualquer tipo de número
let b = Number(args[2]);
let c = " ";

if(args[0] == "s"){
    c = calc.soma(a, b);

}else if( args[0] == "m"){
    c = calc.mult(a, b);

}else{
    c = "Opção Inválida";
}

console.log(c);




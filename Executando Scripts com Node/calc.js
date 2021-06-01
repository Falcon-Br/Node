
let calc = {
    mult: (x, y) => {
        return x * y;
    },

    soma: (x, y) => {
        return x + y;
    }
}

//Exporta (Retorna) o módulo "Soma" para o "Script". Só retorna o que estiver com o "Module.Exports"
module.exports = calc;

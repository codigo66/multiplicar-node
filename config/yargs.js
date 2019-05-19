const opts = {
    base: {
        demand: true,
        alias: 'b'
    },
    limite: {
        alias: 'l',
        default: 10
    }
}

const argv = require('yargs')
    .command('crear', 'Crea un archivo con la tabla de multiplicar indicada', opts)
    .command('listar', 'Imprime en pantalla la tabla de multiplicar indicada', opts)
    .help()
    .argv;

module.exports = {
    argv
}
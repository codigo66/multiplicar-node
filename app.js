const colors = require('colors');
const argv = require('./config/yargs').argv;
const { crearTabla, listarTabla } = require('./multiplicar/multiplicar');

let comando = argv._[0];
//onsole.log(argv.base);

switch (comando) {
    case 'listar':
        listarTabla(argv.base, argv.limite)
            .catch(e => console.log(e));
        break;
    case 'crear':
        crearTabla(argv.base, argv.limite)
            .then(archivo => console.log(`El archivo ${archivo} ha sido creado`.bgBlue))
            .catch((e) => console.log(e));
        break;
    default:
        console.log('Comando no reconocido'.bgRed);
}
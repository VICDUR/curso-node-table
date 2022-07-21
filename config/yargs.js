const argv = require('yargs')

    .option(
        'b',{
            alias: 'base',
            type: 'number',
            demandOption: true,
            describe: 'es la base de la tabla de multiplicar'
    })
    .option(
        'l',{
            alias: 'listar',
            type:  'boolean',
            default: false,
            describe: 'muestra la tabla en la consola'
     })
     .options(
        'h',{
            alias: 'hasta',
            type: 'number',
            default: 10,
            describe: 'numero hasta el cual se desea que se multiplique'
    })
     .check((argv, options) => {
        if( isNaN( argv.b )){
            throw 'La base tiene que ser un numero'
        }
        return true;
    })
    .argv;

module.exports = argv;
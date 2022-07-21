
const {crearArchivo} = require('./helpers/multiplicar.js');
const argv = require('./config/yargs.js')


console.clear()

// console.log(argv)
// const { b, h, l } = argv


crearArchivo(argv.b, argv.l, argv.h)
    .then(msg => {
        console.log(`Salio todo OK`);
        console.log(msg)})
    .catch(err => {
        console.log(`error!!!!!`)
        console.log(err)})
    




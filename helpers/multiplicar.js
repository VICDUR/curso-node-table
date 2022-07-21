const fs = require('fs');

const colors = require('colors');
 

const crearArchivo = async(numTable=5, listar=false, hasta=10)=>{

    
    try {
        let text = `====================================
          Tabla del ${numTable}        
====================================`;
        
        let salida = '';
        for (let i = 1; i <= hasta; i++) {
            salida += `${numTable} * ${i} = ${i * numTable}\n`
        }
        let textFinal = `${text}\n\n${salida}`;
        
        fs.writeFileSync(`./salida/tabla-${numTable}.txt`, textFinal);
    
        if (listar) console.log(textFinal)
        
        return `tabla-${numTable}.txt creado`.rainbow

        
    } catch (error) {
        throw(error)
        
    }


    
    
}

module.exports =  {
    crearArchivo
}
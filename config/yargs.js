const { alias } = require('yargs');



const descripcion={
    demand:true,
    alias:'d',
    desc:'Descrpicion de tara por hacer'
};

const completado = {
    default:true,
    alias:'c',
    desc:'Marca como completado o pendiente'
};

const argv = require('yargs')
    .command('crear','Crear elemento',{
        descripcion
    })
    .command('actualizar','Actualiza la tarea',{
        descripcion,
        completado
    })
    .command('Borrar','Borra tarea',{
        descripcion
    })
    .help()
    .argv;

module.exports={
    argv
} 
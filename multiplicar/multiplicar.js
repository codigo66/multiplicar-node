// requires
const fs = require('fs'); // Paquetes nativos de node
// const fs = require('express'); // Paquetes de otros desarrolladores
// const fs = require('./asd'); // Paquetes desarrollados por nosotros mismos
const colors = require('colors');

let crearTabla = (base, limite) => {
    return new Promise((resolve, reject) => {
        if (!Number(base)) { reject('La base no es un número'); return }
        if (!Number(limite)) { reject('El límite no es un número'); return }
        let data = '';
        for (let i = 1; i <= limite; i++) {
            data += `${base} x ${i} = ${base * i}`;
            if (i < limite) data += '\n';
        }
        fs.writeFile(`./tablas/tabla-${base}.txt`, data, (err) => {
            if (err) reject(err);
            else resolve(`tabla-${base}.txt`);
        });
    });
};

let listarTabla = (base, limite) => {
    return new Promise((resolve, reject) => {
        if (!Number(base)) { reject('La base no es un número'); return }
        if (!Number(limite)) { reject('El límite no es un número'); return }
        console.log('-----------------------'.green);
        console.log(`----- Tabla del ${base} -----`.green);
        console.log('-----------------------'.green);
        for (let i = 1; i <= limite; i++) {
            console.log(`${base} x ${i} = ${base * i}`);
        }
    });
};

module.exports = {
    crearTabla,
    listarTabla
}
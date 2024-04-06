const { registrar, leer } = require("./operaciones");

const arg = process.argv.slice(2);
const operacion = arg[0];

if (operacion === "registrar") {
    registrar(
        arg[1],
        arg[2],
        arg[3],
        arg[4],
        arg[5]
    );
}

if (operacion === "leer") {
    leer();
}

const os = require('os');

var cpu = os.cpus().map(c => `Modelo: ${c.model} velocidade atual: ${c.speed} MHz`);
return cpu;
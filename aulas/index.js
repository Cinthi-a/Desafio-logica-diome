const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question('Digite o nome do herói: ', (nomeHeroi) => {
    rl.question('Digite a quantidade de experiência (XP): ', (experienciaStr) => {
        const experiencia = parseInt(experienciaStr, 10);
        let nivelHeroi;

        if (experiencia < 1000) {
            nivelHeroi = "Ferro";
        } else if (experiencia >= 1001 && experiencia <= 2000) {
            nivelHeroi = "Bronze";
        } else if (experiencia >= 2001 && experiencia <= 5000) {
            nivelHeroi = "Prata";
        } else if (experiencia >= 5001 && experiencia <= 6000) {
            nivelHeroi = "Ouro";
        } else if (experiencia >= 6001 && experiencia <= 7000) {
            nivelHeroi = "Platina";
        } else if (experiencia >= 7001 && experiencia <= 8000) {
            nivelHeroi = "Diamante";
        } else if (experiencia >= 8001 && experiencia <= 9000) {
            nivelHeroi = "Ascendente";
        } else if (experiencia >= 9001 && experiencia <= 10000) {
            nivelHeroi = "Imortal";
        } else if (experiencia >= 10001) {
            nivelHeroi = "Radiante";
        }

        console.log(`O herói de nome ${nomeHeroi} está no nível de ${nivelHeroi}.`);
        rl.close();
    });
});

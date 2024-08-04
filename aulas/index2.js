function determinarNivel(vitorias, derrotas) {
    // Calcula o saldo de vitórias
    let saldoVitorias = vitorias - derrotas;
    let nivel;

    // Determina o nível com base na quantidade de vitórias
    if (vitorias < 10) {
        nivel = "Ferro";
    } else if (vitorias >= 11 && vitorias <= 20) {
        nivel = "Bronze";
    } else if (vitorias >= 21 && vitorias <= 50) {
        nivel = "Prata";
    } else if (vitorias >= 51 && vitorias <= 80) {
        nivel = "Ouro";
    } else if (vitorias >= 81 && vitorias <= 90) {
        nivel = "Diamante";
    } else if (vitorias >= 91 && vitorias <= 100) {
        nivel = "Lendário";
    } else if (vitorias >= 101) {
        nivel = "Imortal";
    } else {
        nivel = "Desconhecido";
    }

    return {
        saldoVitorias: saldoVitorias,
        nivel: nivel
    };
}

const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question('Digite a quantidade de vitórias: ', (vitoriasStr) => {
    rl.question('Digite a quantidade de derrotas: ', (derrotasStr) => {
        const vitorias = parseInt(vitoriasStr, 10);
        const derrotas = parseInt(derrotasStr, 10);

        if (isNaN(vitorias) || isNaN(derrotas)) {
            console.log("Por favor, insira números válidos para vitórias e derrotas.");
        } else {
            const resultado = determinarNivel(vitorias, derrotas);

            console.log(`O Herói tem de saldo de ${resultado.saldoVitorias} está no nível de ${resultado.nivel}.`);
        }

        rl.close();
    });
});

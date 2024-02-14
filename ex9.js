function verificar() {
    let n1 = Number(document.getElementById('n1').value);
    
    switch (n1) {
        case 1:
            console.log("Aposte todas suas economias no jogo do bicho! Hoje você está com sorte :)");
            break;
        case 2:
            console.log("Não saia de casa! Sua fama está pior que a de Kanye West...");
            break;
        case 3:
            console.log("3? Sério? Número básico pra sorte, dia básico. Nada demais.");
            break;
        case 4:
            console.log("Vá se dar um dia de princesa, não olhe pro seu saldo bancário... Saia comprando tudo mesmo! Você merece :)");
            break;
        case 5:
            console.log("Seus cupons do app do Mc Donalds hoje estão valendo a pena. Coma porcaria sim :)");
            break;
        case 6:
            console.log("Hoje a Consórcio Fenix vai mudar a rota do seu ônibus. Vai chegar atrasado no trampo.");
            break;
        case 7:
            console.log("Eu concordo 100% com o que o João Bidu falou hoje sobre seu signo...");
            break;
        case 8:
            console.log("Faça tratamento pra cálvice... Dá pra ver as entradas daqui. Me agradeça depois");
            break;
        case 9:
            console.log("Não ande com o patinete elétrico hoje");
            break;
        case 10:
            console.log("Siga os ensinamentos de Chico Science: Uma cerveja antes do almoço é muito bom pra ficar pensando melhor.");
            break;
        default:
            console.log("Tente novamente");
            break;
    }
}

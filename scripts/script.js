function calcularIMC(peso, altura){
    return peso / (altura * altura);
}

function classificarIMC(imc){
    if (imc < 18.5){
        return "Abaixo do peso";
    } else if (imc >=18.5 && imc < 24.9) {
        return "Peso adequado";
    } else if (imc >= 25 && imc < 29.9) {
        return "Sobrepeso";
    } else {
        return "Obesidade";
    }
}

function sugerirAcao(classificao){
    if (classificao === "Abaixo do peso") {
        return "Considere consultar um nutricionista para ajudar a desenvolver um plano alimentar que ajude a alcançar um peso saudável.";
    } else if (classificao === "Peso adequado") {
        return "Seu peso está dentro da faixa ideal. Continue com uma alimentação equilibrada e hábitos saudáveis para manter seu bem-estar.";
    } else if (classificao === "Sobrepeso") {
        return "Considere falar com um especialista em nutrição para ajustar sua dieta e incorporar exercícios físicos para alcançar um peso saudável.";
    } else if (classificao === "Obesidade") {
        return "Procurar ajuda médica é importante para gerenciar a obesidade de forma eficaz e garantir um plano de tratamento adequado às suas necessidades.";
    } else {
        return "Classificação desconhecida.";
    }
}
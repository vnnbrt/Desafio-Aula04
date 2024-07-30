function calcularIMC(peso, altura){
    return peso / (altura * altura);
}

function classificarIMC(imc){
    if (imc < 18.5){
        return "um peso abaixo do ideal. Recomenda-se consultar um nutricionista para desenvolver um plano alimentar que ajude a alcançar um peso saudável.";
    } else if (imc >=18.5 && imc < 24.9) {
        return "que está dentro da faixa ideal. É importante continuar com uma alimentação equilibrada e hábitos saudáveis para manter o bem-estar.";
    } else if (imc >= 25 && imc < 29.9) {
        return "sobrepeso. Considera-se falar com um especialista em nutrição para ajustar a dieta e incorporar exercícios físicos para alcançar um peso saudável.";
    } else {
        return "obesidade. Procurar ajuda médica é importante para gerenciar a obesidade de forma eficaz e garantir um plano de tratamento adequado às necessidades.";
    }
}

function processarIMC(event) {
    event.preventDefault();

    const peso = parseFloat(document.getElementById("peso").value);
    const altura = parseFloat(document.getElementById("altura").value);

    if (isNaN(peso) || isNaN(altura) || peso <=0 || altura <=0){
        document.getElementById("resultado").innerText = "Por favor, insira valores válidos para peso e altura."
        console.log("Erro: Valores inválidos.")
        return;
    }
    
    const imc = calcularIMC(peso , altura);
    const classificar = classificarIMC(imc);

    const resultadoTexto = `O IMC calculado é ${imc.toFixed(2)} e indica ${classificar}`;
    document.getElementById("resultado").innerText = resultadoTexto;
    console.log(resultadoTexto);
}

const pesoPlastico = document.getElementById('plasticWeight');
const botonCalcular = document.getElementById("calcular");
const resultado = document.getElementById('resultado');

botonCalcular.addEventListener("click", ()=>{
    if (pesoPlastico.value == "" || pesoPlastico.value <= 0){
        resultado.innerHTML = "Error";
    }else{
        let ladrillosProducidos = pesoPlastico.value * 8;
        resultado.innerHTML = `Ladrillos Producibles: ${ladrillosProducidos}`;
    }
});

const boton= document.getElementById("calcular")
const error = document.getElementById("error")


boton.addEventListener("click", () => {
    const input= document.getElementById("peso")
    const peso = input.value; 
    if (peso == 0) {
        error.style.display = "none";
        console.log("algoritmo")
    }
    error.style.display = "block";
    alert ("El programa está funcionando")

    function calcFlujo(peso){
        let resto = peso;
        let flujo = 0;
        if (resto>20){
            let aux = resto-20;
            flujo += aux*1;
            resto -= aux;
        } 
        if (resto>10){
            let aux = resto-10;
            flujo += aux*2;
            resto -= aux;
        }
        flujo += resto*4;
        return flujo;
        console.log (flujo, "cc")
    }
    
  
}

)

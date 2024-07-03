document.addEventListener("DOMContentLoaded", () =>{
    const valor = document.getElementById("valor");
    const soma = document.getElementById("soma");
    const subtrai = document.getElementById("subtrai");
    const resetar = document.getElementById("resetar");

    let count = 0; 
    const contador = {
        name:"andrade",
        age: 20
    };
    console.log(contador)
    const updateValor = () => {
        console.log({valor:valor.innerHTML})
        valor.innerHTML = count;
    };

    soma.addEventListener("click", () => {
        count += 1;
        updateValor();
    });

    subtrai.addEventListener("click", () => {
        count -= 1;
        updateValor();
    });

    resetar.addEventListener("click", () => {
        count = 0;
        updateValor();
    });
});

// Data una lista della spesa, stampare sulla pagina gli elementi della lista individualmente con un ciclo while.

const lista = document.getElementById("lista");

// creazione lista spesa
const spesa = ["acqua","pane","latte","formaggio","pasta"];

// inizializzazione variabile contatore
let i = 0;

// ciclo 
while (i < spesa.length){ 
    let spesaEl = spesa[i];
    // creazione LI
    const elementLi = document.createElement("li");
    // assegnazione elementi a LI
    elementLi.append(spesaEl);
    // inseriamo LI dentro UL
    lista.append(elementLi);
    // incrementazione contatore
    i++;
}
/* 
Data una lista della spesa, stampare sulla pagina (anche brutalmente, basta che si vedano) gli elementi della lista individualmente con un ciclo while.
*/



const listaSpesa = ['latte','uova','burro','zucchero','pasta','caramelle'];

// variabile per il ciclo while
let i = 0;

// console.log(listaSpesa.length);  -debug

//collego elemento del DOM
const listaSpesaDOM = document.getElementById('listaSpesa');

// ciclo while
while (i < listaSpesa.length){

    const prodottoSpesa = listaSpesa[i];
    // console.log(prodottoSpesa); -- debug

    const lisataMarkup = `<li>${prodottoSpesa}</li>`;

    listaSpesaDOM.insertAdjacentHTML('beforeend',lisataMarkup);

    i++;
}
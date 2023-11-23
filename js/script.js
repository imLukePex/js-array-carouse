const items = document.getElementsByClassName('item');
console.log(items);

let activeItem = 0;

// navigazione
const next = document.querySelector('.button-next');

// Arrow Up
next.addEventListener('click', function() {

    if(activeItem < items.length - 1) {
        // togliamo la classe active all'elemento corrente
        items[activeItem].classList.remove('active');

        // incrementiamo l'indice dell'elemento da visualizzare
        activeItem++;

        // aggiungiamo la classe active all'elemento successivo
        items[activeItem].classList.add('active');

        // if (activeItem === items.length - 1) {
        //     // siamo arrivati all'ultimo elemento
        //     next.classList.add('hidden');
        // }
    }
})

const prev = document.querySelector('.button-prev');

// Arrow Down
prev.addEventListener('click', function() {

    if(activeItem <= items.length - 1) {
        // togliamo la classe active all'elemento corrente
        items[activeItem].classList.remove('active');

        // incrementiamo l'indice dell'elemento da visualizzare
        activeItem--;

        // aggiungiamo la classe active all'elemento successivo
        items[activeItem].classList.add('active');

        // if (activeItem === items.length - 1) {
        //     // siamo arrivati all'ultimo elemento
        //     prev.classList.add('hidden');
        // }
    }
})
/*
Chiedere all'utente il numero di km e metterlo in una variabile (km)
Chiedere all'utente l'età e metterlo in una variabile (age)
Calcolare il prezzo del biglietto in base ai km (0.21 € al km) e metterlo in una variabile (price)

IF (age) è < 18 applicare uno sconto del 20%
    stampare (price - 20%) prezzo biglietto in forma umana
    ELSE IF (age) > di 65 applicare uno sconto del 40%
        stampare (price - 40%) prezzo biglietto in forma umana
stampare prezzo biglietto forma umana
END IF
*/


const eleInvia = document.querySelector('.invia');
const eleCancella = document.querySelector('.cancella');
const eleTicket = document.querySelector('.ticket');

eleInvia.addEventListener('click' , function(){

    eleTicket.classList.add('show');

    const eleAge = document.querySelector('#age').value;
    const eleKm = document.querySelector('#km').value;
    const name = document.querySelector('#name').value;
    const randomInteger = Math.floor((Math.random() * 20) +1 )
    const randomInteger2 = Math.floor(Math.random() * 99999 )
    let price = eleKm * 0.21;

    if ((name == '') || (eleKm == 0)){
        alert('Per favore inserire nome o km da percorrere');
        window.location.reload();

    }    if (eleAge === 'minorenne') {
        price = price - (price * 0.2);
        
    }   else if(eleAge === 'over65'){
        price = price - (price * 0.4);     
    } 
    
    document.getElementById('price').innerHTML = price.toFixed(2) + '€';
    document.getElementById('passeggero').innerHTML = name;
    document.getElementById('carrozza').innerHTML = randomInteger;
    document.getElementById('cpcode').innerHTML = randomInteger2;
}
)

eleCancella.addEventListener('click' , function(){
    document.location.reload();
}
)
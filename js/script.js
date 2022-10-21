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


const button = document.querySelector('button');

button.addEventListener('click' , function(){

    const eleAge = document.querySelector('#age').value;
    const eleKm = document.getElementById('km').value;
    
    let price = eleKm * 0.21;

    if (eleAge === 'minorenne') {
    price = price - (price * 0.2);
    
}   else if(eleAge === 'over65'){
    price = price - (price * 0.4);     
} 

    document.getElementById('price').innerHTML = price.toFixed(2) + '€';
}
)
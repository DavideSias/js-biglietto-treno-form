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

const km = parseInt(prompt('Quanti km devi percorrere?'));
console.log(km);

const age = parseInt(prompt('Quanti anni hai?'));
console.log(age);

let price = km * 0.21;
console.log(price);

if (age < 18) {
    price = price - (price * 0.2);

}   else if(age > 65){
        price = price - (price * 0.4);     
}  

console.log('Il prezzo del biglietto è:', price.toFixed(2), '€');
// importar la función sum del archivo app.js
const { sum } = require('./app.js');

// comienza tu primera prueba
test('adds 14 + 9 to equal 23', () => {
    //dentro de la prueba llamamos a nuestra función sum con 2 números
    let total = sum(14, 9);

    // esperamos que la suma de esos 2 números sea 23
    expect(total).toBe(23);
});

test("One euro should be 1.206 dollars", function(){//BIEN
    // importo la funcion desde app.js
    const { fromEuroToDollar } = require('./app.js')
    
    // hago mi comparacion (la prueba)
    expect(fromEuroToDollar(3.5)).toBe(4.2); //1 euro son 1.2 dolares, entonces 3.5 euros deberian ser = (3.5 * 1.2)
});

test("One dolar should be 447.65 yenes", function(){
    // importo la funcion desde app.js
    const { fromDollarToYen } = require('./app.js')
    const dolarToYen = (3.5 / 1.2) * 127.9;
    // hago mi comparacion (la prueba)
    expect(fromDollarToYen(3.5)).toBe(373.04166666666674); //1 dolar son 127.9 yenes, entonces 3.5 dolares deberian ser = (3.5 * 127.9)
});

test("One yen should be 127.9 pound", function(){
    // importo la funcion desde app.js
    const { fromYenToPound } = require('./app.js')
    const yenToPound = (3.5 / 127.9) * 0.8;
    // hago mi comparacion (la prueba)
    expect(fromYenToPound(3.5)).toBe(3.5); //1 dolar son 127.9 yenes, entonces 3.5 dolares deberian ser = (3.5 * 127.9)
});


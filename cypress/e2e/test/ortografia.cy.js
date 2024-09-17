/// <reference types="cypress" />
require('cypress-xpath');
import { LISS_USER } from '../data/userLis';
import login from '../page/login';

describe('Revision de ortografía login', () => {
    beforeEach(() => {
        cy.visit(login.url);
    });


    let btnText = '';  // Inicializamos la variable fuera del ciclo para acumular el texto

    it('revision 1 - prueba', () => {
        login.iniciarSesion(LISS_USER.usaruio, LISS_USER.contrasenaq);
        cy.get('.btn-light').click();
        
        // Recorremos todos los elementos y almacenamos el texto en la variable 'btnText'
        for (let index = 1; index <= 14; index++) {
            cy.xpath(`/html/body/div/div/div[1]/div[2]/div[1]/div[2]/div[${index}]`)
                .invoke('text')
                .then(text => {
                    btnText += text + ", ";  // Acumulamos el texto con un espacio entre cada palabra
                    console.log("Texto acumulado:", btnText);  // Verificamos el texto acumulado
                    
                });
        }
    
        // Esperamos que todo el ciclo se complete y luego enviamos el texto acumulado en una sola petición
        cy.then(() => {
            console.log("Texto acumulado:", btnText);  // Verificamos el texto completo
            cy.request({
                method: 'POST',
                url: 'https://api.languagetoolplus.com/v2/check', // URL completa
                headers: {
                    'Content-Type': 'application/x-www-form-urlencoded', // Cambiado a x-www-form-urlencoded
                    'Accept': 'application/json',
                },
                body: new URLSearchParams({
                    text: btnText.trim(),  // Eliminamos espacios en blanco extras si hay
                    language: 'es'
                }).toString() // Convierte el body a la cadena URL-encoded
            })
            .then(response => {
                expect(response.status).to.eq(200);  // Verificamos que la respuesta sea exitosa
                const data = response.body;
                cy.log(JSON.stringify(data));  // Mostramos la respuesta en el log de Cypress
                console.log(data);  // Mostramos la respuesta en la consola del navegador
    
                // Validamos si hay errores ortográficos
                if (data.matches.length > 0) {
                    cy.log('Hay errores ortográficos');
                } else {
                    cy.log('Sin errores ortográficos');
                }
            });
        });
    });
    
});

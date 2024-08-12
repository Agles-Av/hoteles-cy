/// <reference types="cypress" />
require('cypress-xpath');
import login from '../page/login';
import { LISS_USER } from '../data/userLis';
import { RESERVACION,SINESPECIFICAR_ESERVACION } from '../data/reservacion';

describe('Crear reservacion',()=>{
    it('iniciar sesion y crear reservacion',()=>{
        cy.visit(login.url);
        login.iniciarSesion(LISS_USER.usaruio, LISS_USER.contrasenaq);
        login.reservarSinEespecificar(
            SINESPECIFICAR_ESERVACION.fecha_reservacion
        );
        login.agregarHuesped();

    })

})

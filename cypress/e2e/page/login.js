/// <reference types="cypress" />
//clase de login para las pruebas y almnacenasr los detalles e las cosas que se van a probar

class login{
    constructor(){
        this.url = 'http://192.168.20.130:12091/#/login';
        this.inputCorreo = '#__BVID__16';
        this.inputContrasena = '#__BVID__18';
        this.btnIniciarSesion = '.btn';
    }

    //Funciones
    iniciarSesion(correo, contrasena){
        cy.wait(1000);
        cy.get(this.inputCorreo).clear().type(correo);
        cy.get(this.inputContrasena).clear().type(contrasena);
        cy.get(this.btnIniciarSesion).click().wait(3000);
    }

    reservarSinEespecificar(fecha_reservacion){
        cy.get('.btn-light').click()
        cy.get('[to="/owner/reservations"] > .item > span').click()
        .get('.bi-chevron-left').click()
        cy.get(`.fc-timeline-slots > table > tbody > tr > [data-date="${fecha_reservacion}"]`).click();
        cy.get('#__BVID__273 > :nth-child(1) > [data-v-59fe559c=""] > .multiselect > .multiselect__select').type('{downarrow}{enter}')
        cy.get('#__BVID__279 > :nth-child(1) > [data-v-59fe559c=""] > .multiselect > .multiselect__select').type('{downarrow}{enter}')
        cy.get('.col-12 > :nth-child(3)').click();
        cy.get('#__BVID__285 > :nth-child(1) > [data-v-59fe559c=""] > .multiselect > .multiselect__select').type('{enter}')
        cy.get('.col-12 > :nth-child(3)').click();
        cy.get('#__BVID__291 > :nth-child(1) > [data-v-59fe559c=""] > .multiselect > .multiselect__select').type('{downarrow}{enter}')
        cy.get('.col-12 > :nth-child(3)').click();
        cy.get('#__BVID__317 > :nth-child(1) > .multiselect > .multiselect__select').type('{downarrow}{enter}')
        cy.get('.col-12 > :nth-child(3)').click();
   
        
    }

    agregarHuesped(){
        for (let i = 65; i < 69; i++) {
            for (let j = 65; j < 90; j++) {
                cy.get('#__BVID__333').type('Christian'+ String.fromCharCode(i),{ delay: 100 })
                cy.get('#__BVID__335').type('Campos' +String.fromCharCode(j),{ delay: 100 })
                cy.get('#__BVID__337').type('Salgado' + String.fromCharCode(i) + String.fromCharCode(j),{ delay: 100 }) 
                cy.get('#__BVID__339').type('23' + j,{ delay: 100 })
                cy.get('#__BVID__341').type('12345678' + j,{ delay: 100 }).wait(1000)   
                cy.get(':nth-child(1) > .text-right > .btn').click();
                cy.wait(1000);
                cy.get('.swal2-confirm').click();
                
            }
        }
        cy.get('.btn-success').click();
    }

    /*reservaEspecifica(tipoPago,canalventa,tipocuenta,tipotarifa,cliente){
        cy.get('.btn-light').click()
        cy.get('[to="/owner/reservations"] > .item > span').click()
        .get('.bi-chevron-left').click()
        cy.get(`.fc-timeline-slots > table > tbody > tr > [data-date="${this.obtenerFechaHoy()}"]`).click();
        cy.get('#__BVID__273 > :nth-child(1) > [data-v-59fe559c=""] > .multiselect > .multiselect__select').type(tipoPago)
        cy.get('#__BVID__279 > :nth-child(1) > [data-v-59fe559c=""] > .multiselect > .multiselect__select').type(canalventa)
        cy.get('.col-12 > :nth-child(3)').click();
        cy.get('#__BVID__285 > :nth-child(1) > [data-v-59fe559c=""] > .multiselect > .multiselect__select').type(tipocuenta)
        cy.get('.col-12 > :nth-child(3)').click();
        cy.get('#__BVID__291 > :nth-child(1) > [data-v-59fe559c=""] > .multiselect > .multiselect__select').type(tipotarifa)
        cy.get('.col-12 > :nth-child(3)').click();
        cy.get('#__BVID__317 > :nth-child(1) > .multiselect > .multiselect__select').type(cliente)
        cy.get('.col-12 > :nth-child(3)').click();
        cy.get('.btn-success').click();
        
    }*/


}
export default new login();
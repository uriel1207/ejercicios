import { LitElement, html } from 'lit-element';
import './e-contact.js';

export class EcontactList extends LitElement {
    static get properties() {
        return {
            contactos: { type: Array }
        };
    }

    constructor() {
        super();
        this.contactos = [
            {
                nombre: 'Uriel Carbajal',
                email: 'prueba@gmail.com'
            },
            {
                nombre: 'Griselda Santillan',
                email: 'prueba2@gmail.com'
            },
            {
                nombre: 'Jesus Martinez',
                email: 'prueba3@gmail.com'
            }
        ];
    }

    render() {
        return html `
        <div>
            ${this.contactos.map(contact =>
                html `<e-contact nombre="${contact.nombre}" email="${contact.email}"></e-contact>`
            )}
        </div>
        `;
    }
}

customElements.define('econtact-list', EcontactList);

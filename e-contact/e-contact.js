import { LitElement, html, css } from 'lit';
export class econtact extends LitElement{
constructor(){
    super();
    this.verMas=false;
}
static properties={
    nombre:{
        type:String
    },
    email:{
        type:String
    },
    verMas:{
        type:Boolean
    }
};
render(){
    return html `
    <style>
        div{
            border: 1px solid #ddd;
            padding:10px;
            border-radius:5px;
            display:inline-block;
        }
        h1{
            font-size:1.2em;
            font-weight:normal;
        }
    </style>
    <div>
        <h1>${this.nombre}</h1>
        <p><a href="#" @click="${this.toogle}">Ver Mas</a></p>
        ${this.verMas?
            html`Email:${this.email}`:
            ''
        }
    </div>
    `;
}
toogle(e){
    e.preventDefault();
    this.verMas=!this.verMas;
}
}
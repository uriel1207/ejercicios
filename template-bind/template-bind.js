import { LitElement, html } from "lit";
export class TemplateBind extends LitElement{
static get properties(){
    return{
        prop1:{type:String},
        prop2:{type:String},
        prop3:{type:Boolean},
        prop4:{type:String}
    };
}
constructor(){
    super();
    this.prop1='text binding';
    this.prop2='mydiv';
    this.prp3=true;
    this.prop4='pie';
}
render(){
    return html`
    <div>${this.prop1}</div>
    <div id="${this.prop2}">attribute binding</div>
    <div>
        boolean attribute binding
        <input type="text" ?disabled="${this.prp3}"/> 
    </div>
    <div>
        property binding
        <input type="text" .value="${this.prop4}"/>
    </div>
    <div>event handler binding
        <button @click="${this.clickHandler}">click</button>
    </div>
    `;
}
clickHandler(e){
console.log(e.target);
}
}
customElements.define('template-bind', TemplateBind);
(()=>{

    //* Aplicar el principio de responsabilidad única
    //* Priorizar la composición frente a la herencia

    type HtmlType = 'input'|'select'|'textarea'|'radio';
   
    class HtmlElement {
        constructor(
            public id: string,
            public type: HtmlType,
        ) {}
    }

    class InputAttributes {
        constructor(
            public placeholder: string,
            public value: string,
        ) {}
    }

    class InputEvents {
        
        constructor(){}

        setFocus() {};
        getValue() {};
        isActive() {};
        removeValue() {};
    }


    //? Idea para la nueva clase InputElement
    class InputElement {
        public html: HtmlElement;
        public attributes: InputAttributes;
        public events: InputEvents;

        constructor( id: string , placeholder: string, value: string ) {
            this.html = new HtmlElement( id, 'input' );
            this.attributes = new InputAttributes( placeholder, value );
            this.events = new InputEvents();
        }
    }

    const nameField = new InputElement('txtName', 'Enter first name', 'Fernando');

    console.log({ nameField });

})()
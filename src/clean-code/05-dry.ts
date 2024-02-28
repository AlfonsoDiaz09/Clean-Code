
type Size = '' | 'S' | 'M' | 'XL';

class Product {
    constructor(
        public name: string = '',
        public price: number = 0,
        public size: Size = '',
    ) {}

    toString(){
        // No se está aplicando el principio DRY (Don't Repeat Yourself)
        if ( this.name.length <= 0 ) throw Error('Name is empty');
        if ( this.price <= 0 ) throw Error('Price is zero');
        if ( this.size.length <= 0 ) throw Error('Size is empty');
        
        return `${ this.name } (${ this.size }) - $${ this.price }`;
    }
}

(() => {

    const bluePants = new Product('Blue Large Pants', 10, 'XL');
    console.log(bluePants.toString());

})();
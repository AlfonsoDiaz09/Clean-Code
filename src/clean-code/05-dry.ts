
type Size = '' | 'S' | 'M' | 'XL';

class Product {
    constructor(
        public name: string = '',
        public price: number = 0,
        public size: Size = '',
        public stock: number = 0,
    ) {}

    isProductReady(): boolean {
        for( const key in this ){
            switch ( typeof this[key] ) {
                case 'string':
                    if ( (<string><unknown>this[key]).length <= 0 ) throw Error(`${ key } is empty`);
                    break;
                case 'number':
                    if ( (<number><unknown>this[key]) <= 0 ) throw Error(`${ key } is zero`);
                    break;
                default:
                    throw Error (`${ typeof this[key] } is not supported`);
            }
        }

        return true;
    }

    toString(){
        if( !this.isProductReady() ) return;
        console.log(!this.isProductReady)
        return `${ this.name } (${ this.size }) - $${ this.price } - ${ this.stock } units`;
    }
}

(() => {

    const bluePants = new Product('Blue Large Pants', 10, 'XL', 10);
    console.log(bluePants.toString());

})();
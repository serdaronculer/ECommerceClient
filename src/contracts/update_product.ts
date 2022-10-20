import CreateProduct from './create_product';
class UpdateProduct {
    id: string;
    name: string;
    stock: number;
    price: number;
    constructor(id: string, name: string, stock: number, price: number) {
        this.id = id;
        this.name = name;
        this.stock = stock;
        this.price = price;

    }
}



export default UpdateProduct;


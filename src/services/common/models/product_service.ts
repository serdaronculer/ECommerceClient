import { AxiosResponse } from "axios";
import DataService from "../data-service";
import CreateProduct from './../../../contracts/create_product';
import Product from './../../../contracts/product';

class ProductService {
    private dataService: DataService;
    constructor() {
        this.dataService = new DataService();
    }

    async create(product: CreateProduct) : Promise<AxiosResponse<Product, any>> {   
            const response = await this.dataService.post<CreateProduct, Product>({
                controller: '/products',

            }, product)
            return response;
    }

}

export default ProductService;
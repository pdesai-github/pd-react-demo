import { Product } from "../models/product";

export class ProductService {
    API_BASE_URL = 'http://localhost:8080/products';

    async getProducts(): Promise<Product[]> {
        try {
            const response = await fetch(this.API_BASE_URL);
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            const products: Product[] = await response.json();
            return products;
        } catch (error) {
            console.error('Failed to fetch products:', error);
            throw error;
        }
    }

}
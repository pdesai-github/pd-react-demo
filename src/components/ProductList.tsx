import { Product } from "../models/product.model";
import ProductCard from "./ProductCard";

const ProductList: React.FC = () => {

    const products: Product[] = [
        {
            id: 1,
            name: "Product 1",
            price: 100,
            description: "Description for Product 1",
            quantity: 1,
        },
        {
            id: 2,
            name: "Product 2",
            price: 200,
            description: "Description for Product 2",
            quantity: 1,
        },
        {
            id: 3,
            name: "Product 3",
            price: 300,
            description: "Description for Product 3",
            quantity: 1,
        },
        {
            id: 4,
            name: "Product 4",
            price: 400,
            description: "Description for Product 4",
            quantity: 1,
        },
        {
            id: 5,
            name: "Product 5",
            price: 500,
            description: "Description for Product 5",
            quantity: 1,
        }
    ];


    return (
        <>
        <div><h2>Product List</h2></div>
            <div className="d-flex flex-row">
                {
                    products.map((product) => (
                        <div key={product.id} className="card m-2">
                            <ProductCard product={product} />
                        </div>
                    ))
                }
            </div>
        </>
    )
}

export default ProductList;
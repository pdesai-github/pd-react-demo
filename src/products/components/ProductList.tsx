import { useEffect, useState } from "react";
import { ProductService } from "../services/product.service";
import { Product } from "../models/product";

const ProductList: React.FC = () => {
    const productService = new ProductService();
    const [products, setProducts] = useState<Product[]>([]);
    const [loader, setLoader] = useState<boolean>(false);

    useEffect(() => {
        const getProducts = async () => {
            try {
                setLoader(true);

                let products: Product[] = await productService.getProducts();
                setProducts(products)

                setLoader(false);
            } catch (error) {
                console.log("Unable to fetch products")
                setLoader(false);
            }
        }

        getProducts();
    }, []);

    if (loader) <p>Loading ...</p>

    return (
        <>
            {
                products.length > 0 ? <div className="d-flex flex-row w-100">
                    {
                        products.map((product) =>
                            <div className="card ms-2" style={{ width: "150px" }}>
                                <div>{product.name}</div>
                                <div>{product.description}</div>
                                <div>{product.price}</div>
                            </div>
                        )
                    }
                </div> : <h3>No products to show</h3>
            }
        </>
    )
}

export default ProductList;
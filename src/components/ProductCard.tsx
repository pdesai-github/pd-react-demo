import { useContext, useReducer } from "react";
import { Product } from "../models/product.model";
import { CartContext } from "../state/CartContextProvider";

interface ProductCardProps {
    product: Product
}
const ProductCard: React.FC<ProductCardProps> = ({ product }) => {

    const { state, dispatch } = useContext(CartContext);

    function addToCartHandler(product: Product) {
        console.log("Adding to cart", product);
        dispatch({ type: 'ADD_ITEM', payload: product });
    }
    function removeFromCartHandler(product: Product) {
        console.log("Removing from cart", product);
        dispatch({ type: 'REMOVE_ITEM', payload: { id: product.id } });
    }

    return (
        <div className="card">
            <div className="card-header">
                {product.name}
            </div>
            <div className="card-body">
                <h5 className="card-title">{product.name}</h5>
                <p className="card-text">{product.price}</p>
                <a href="#" onClick={()=> addToCartHandler(product)} className="btn btn-primary">Add </a>
                <a href="#" onClick={()=> removeFromCartHandler(product)} className="btn btn-danger mx-2">Remove</a>
            </div>
        </div>
    )
}

export default ProductCard;
import { useContext } from "react";
import { CartContext } from "../state/CartContextProvider";
import ProductCard from "./ProductCard";
import { Product } from "../models/product.model";

const CartSideBar: React.FC = () => {

    const { state, dispatch } = useContext(CartContext);

    function addToCartHandler(product: Product) {
        dispatch({ type: 'ADD_ITEM', payload: product });
    }

    return (
        <>
            <div>
                <h2>Your cart</h2>
            </div>
            <div className="d-flex flex-row">
                {state.products.length === 0 ? <div>No items in cart</div> :
                    state.products.map((product: Product) => (
                        <div className="card m-2">
                            <div className="card-header">
                                {product.name}
                            </div>
                            <div className="card-body">
                                <h5 className="card-title">{product.name}</h5>
                                <p className="card-text">{product.price}</p>
                            </div>
                        </div>
                    ))
                }
            </div>
        </>
    )
}

export default CartSideBar;
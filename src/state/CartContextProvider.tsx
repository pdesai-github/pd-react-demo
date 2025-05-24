import { createContext, Dispatch, Reducer, useReducer } from "react";
import { CartAction, CartState } from "../models/product.model";

const initialState: CartState = { products: [] }

//=================================================

export const CartContext = createContext<{
    state: CartState;
    dispatch: Dispatch<CartAction>;
}>({
    state: initialState,
    dispatch: () => null,
});

const cartReducer = (state: CartState, action: CartAction): CartState => {
    switch (action.type) {
        case "ADD_ITEM":
            // Check if the product already exists in the cart
            const existingProductIndex = state.products.findIndex(p => p.id === action.payload.id);
            if (existingProductIndex >= 0) {
                // If it exists, update the quantity
                const updatedProducts = [...state.products];
                updatedProducts[existingProductIndex].quantity += action.payload.quantity;
                return { ...state, products: updatedProducts };
            } else {
                // If it doesn't exist, add it to the cart
                return { ...state, products: [...state.products, action.payload] };
            }
        case "REMOVE_ITEM":
            // Remove the product from the cart
            return { ...state, products: state.products.filter(p => p.id !== action.payload.id) };
        default:
            return state;
    }    
}

interface CartContextProviderProps {
    children: React.ReactNode;
}

const CartContextProvider: React.FC<CartContextProviderProps> = ({ children }) => {

    const [state, dispatch] = useReducer(cartReducer, initialState);

    return (
        <CartContext.Provider value={{ state, dispatch }}>
            {children}
        </CartContext.Provider>
    )
}

export default CartContextProvider;
export interface Product {
    id: number;
    name: string;
    description: string;
    price: number;
    quantity: number;
}

export interface CartState {
    products: Product[]
}

export type CartAction = { type: "ADD_ITEM", payload: Product }
    | { type: "REMOVE_ITEM", payload: { id: number } }
import ProductType from "./ProductType.tsx";

interface OrderType {
    id: number,
    totalPrice: number,
    orderDateTime: Date,
    orderedProducts: ProductType []
}

export default OrderType;
import { useCart } from "../../context/CartContext";
import { ItemList } from "../ItemList/ItemList";

export const Cart = () => {
    const {cart,clearCart,getTotalItems,getCartTotal} = useCart();

    if (cart.length === 0)
    {
        return(
            <div>
                <h1>El carrito esta vacio</h1>
                <p>Agrega productos para continuar la compra</p>
            </div>
        );
    }
    else
    {
        return(<section>
            <h1>Items en el carrito: {getTotalItems()}, Precio: {getCartTotal()} </h1>
            <ItemList products ={cart} />
            <span onClick={() => clearCart()}>Limpiar Carrito</span>
        </section>)
    }
}

export default Cart;
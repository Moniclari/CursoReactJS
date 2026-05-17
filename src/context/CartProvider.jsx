import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { CartContext } from "./CartContext";

export const CartProvider = ({children}) => {
    const navigate = useNavigate();
    const [cart, setCart] = useState([]);

    //chequea existencia y devuelve un boolean
    const isInCart = (item) => {
        const inCart = cart.some((element) => element.id === item.id);
        return inCart;
    };

    //Vaciar carrito
    const clearCart = () => {
        setCart([]);
    };

    //Agregar al carrito
    const addItem = (item) => {
        if(isInCart(item)){
            alert("el producto ya existe en el carrito");
            return;
        }

        setCart([...cart, item]);
        alert("producto agregado al carrito con exito");
    };

    //Elimminar del carrito
    const removeItem = (id) => {
        const updatedCart = cart.filter(element => element.id !== id);
        setCart(updatedCart);
        alert("producto elimincado correctamente");
    };

    //total de items en el carrito
    const getTotalItems = () => {
        return cart.length;
    };
    
    //total a pagar
    const getCartTotal = () => {
        return cart.reduce((acc,element) => acc + element.price, 0);
    };

    //checkout
    const checkout = () => {
        alert("su compra ha sido realizada con exito");
        clearCart();
        navigate("/");
    };

    const values = {clearCart, addItem, removeItem,getTotalItems,getCartTotal,checkout,};
    return <CartContext.Provider value= {values}>
        {children}
    </CartContext.Provider>
};
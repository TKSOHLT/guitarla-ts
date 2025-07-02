import { useState, useEffect, useMemo } from "react";
import { db } from "../data/db.ts";
import type { CartItem, Guitar } from "../types/types.ts";

export const useCart = () => {

  const initialCart = () : CartItem[] => {
    const localStorageCart = localStorage.getItem("cart");
    return localStorageCart ? JSON.parse(localStorageCart) : [];
  };

  const [data] = useState(db);
  const [cart, setCart] = useState(initialCart);

  const MAX_ITEMS = 5;
  const MIN_ITEMS = 1;

  useEffect(() => {
    console.log("guardando en el local storage...");
    localStorage.setItem("cart", JSON.stringify(cart));
  }, [cart]);

  function addToCart(item: Guitar) {
    const itemExist = cart.findIndex((guitar) => guitar.id === item.id);

    if (itemExist >= 0) {
      if (cart[itemExist].quantity >= MAX_ITEMS) {
        return;
      }

      const updatedCart = [...cart]; //Copia del carrito
      updatedCart[itemExist].quantity++;
      setCart(updatedCart);
      return;
    }
    const newItem : CartItem = {...item, quantity: 1}
    setCart([...cart, newItem]);
  }

  function removeFromCart(id: number) {
    setCart((prevCart) => prevCart.filter((guitar) => guitar.id != id));
  }

  function increaseQuantity(id: Guitar['id']) { //Lookup por si cambia el id de numebr a string u otro
    const updatedCart = cart.map((item) => {
      if (item.id === id && item.quantity < MAX_ITEMS) {
        return {
          ...item,
          quantity: item.quantity + 1,
        };
      }
      return item;
    });

    setCart(updatedCart);
  }

  function decreaseQuantity(id: Guitar['id']) { //Lookup por si cambia el id de numebr a string u otro
    const updatedCart = cart.map((item) => {
      if (item.id === id && item.quantity > MIN_ITEMS) {
        return {
          ...item,
          quantity: item.quantity - 1,
        };
      }
      return item;
    });

    setCart(updatedCart);
  }

  function clearCart() {
    setCart([]);
  }

  const isEmpty = useMemo(() => cart.length === 0, [cart]);
  const cartTotal = useMemo(
    () => cart.reduce((total, item) => total + item.price * item.quantity, 0),
    [cart]
  );

  return {
    data,
    cart,
    addToCart,
    removeFromCart,
    decreaseQuantity,
    increaseQuantity,
    clearCart,
    isEmpty,
    cartTotal
  };
};

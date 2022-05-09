import { useEffect, useState } from 'react';
import useLocalStorage from './useLocalStorage';

const useCartPrice = () => {
    const [cartList, setCartList] = useLocalStorage("cart", [])

    const [price, setPrice] = useState(0);

    const updatePrice = () => {
        let currentPrice = cartList && cartList.reduce((sum, val) => sum + val.price*val.quantity, 0);
        setPrice(currentPrice);
    }

    useEffect(() => {
        if (localStorage.getItem("cart"))
        {
            setCartList(JSON.parse(localStorage.getItem("cart")));
        }
        updatePrice();
    });

    return price;
}

export default useCartPrice
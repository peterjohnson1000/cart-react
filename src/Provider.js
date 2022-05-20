import { useState } from "react";
import PackageContext from './Context';

// export const CartContext = createContext(); if in the same file w/o context.js but not working

const CartProvider = ({ children }) => {
    const [cart, setCart]  = useState([]);
    return <PackageContext.Provider value = {{cart, setCart}} > {children} </PackageContext.Provider>
};

export default CartProvider;
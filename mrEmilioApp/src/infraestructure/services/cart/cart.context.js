import React, { createContext, useState, useEffect } from "react";
// import AsyncStorage from "@react-native-async-storage/async-storage";

// import { AuthenticationContext } from "../authentication/authentication.context";
import { companyDataRequest } from "./cart.services";

export const CartContext = createContext();

export const CartContextProvider = ({ children }) => {
  //   const { user } = useContext(AuthenticationContext);
  const [cart, setCart] = useState([]);
  const [sum, setSum] = useState(0);
  const [companyInfo, setCompanyInfo] = useState(null);
  const [error, setError] = useState(null);
  const [deliveryType, setDeliveryType] = useState("");

  useEffect(() => {
    if (!cart.length) {
      setSum(0);
      return;
    }
    const total = cart.reduce((acc, { price, quantity }) => {
      // console.log('this is price at CartContext:', price);
      return (acc = acc + price * quantity);
    }, 0);

    setSum(total);
  }, [cart]);

  useEffect(() => {
    retrieveCompanyFeesAndTaxes();
  }, []);

  const itemFound = (item) => {
    const isFound = cart.some((prd) => {
      if (prd.id === item.id) {
        return true;
      }
      return false;
    });
    return isFound;
  };

  const incOrDecProductQuantity = (item, task) => {
    setCart((cart) => {
      return cart.map((obj) => {
        return obj.id === item.id
          ? {
              ...obj,
              quantity:
                task === "inc"
                  ? obj.quantity + 1
                  : task === "dec"
                  ? obj.quantity - 1
                  : null,
            }
          : obj;
      });
    });
  };

  const add = (item) => {
    const isFound = itemFound(item);
    console.log(isFound);
    if (isFound) {
      incOrDecProductQuantity(item, "inc");
    }
    if (!isFound) {
      setCart([...cart, item]);
    }
  };

  const retrieveCompanyFeesAndTaxes = () => {
    companyDataRequest()
      .then(({ companyFeesAndtaxes }) => {
        setCompanyInfo(companyFeesAndtaxes);
      })
      .catch((error) => {
        setError(error);
      });
  };

  const removeItem = (item) => {
    const indexFound = cart.findIndex((obj) => {
      if (obj.id === item.id) {
        return true;
      }
      return false;
    });
    console.log(`item if found and index is ${indexFound} `);
    setCart((cart) => {
      return [...cart.slice(0, indexFound), ...cart.slice(indexFound + 1)];
    });
  };

  const incQuantity = (item) => {
    const isFound = itemFound(item);
    console.log(isFound);
    if (isFound) {
      incOrDecProductQuantity(item, "inc");
    }
  };

  const decQuantity = (item) => {
    const isFound = itemFound(item);
    console.log(isFound);
    if (isFound) {
      incOrDecProductQuantity(item, "dec");
    }
  };

  const changingDeliveryType = (type) => {
    setDeliveryType(type);
  };
  //   const clearCart = () => {
  //     setCart([]);
  //   };
  console.log("this is Cart: ", cart);
  return (
    <CartContext.Provider
      value={{
        cart,
        addToCart: add,
        removeFromCart: removeItem,
        // clearCart,
        sum,
        incQuantity,
        decQuantity,
        companyInfo,
        deliveryType,
        changingDeliveryType,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};

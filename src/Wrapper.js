import { productData } from "./Context";
import { useState } from "react";

const Wrapper = ({ children }) => {
  const [item, setItem] = useState([]);
  const get = JSON.parse(localStorage.getItem("Cart"));
  let obj = new Set(get?.map(JSON.stringify));
  let output = Array.from(obj).map(JSON.parse);

  const cartItemlenght = output.length;

  // console.log("get", get);

  return (
    <productData.Provider value={{ item, setItem, cartItemlenght, output }}>
      {children}
    </productData.Provider>
  );
};

export default Wrapper;

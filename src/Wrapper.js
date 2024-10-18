import { productData } from "./Context";
import { useEffect, useState } from "react";

const Wrapper = ({ children }) => {
  const [item, setItem] = useState(JSON.parse(localStorage.getItem("Cart")));

  let obj = new Set(item?.map(JSON.stringify));
  let output = Array.from(obj).map(JSON.parse);

  localStorage.setItem("Cart", JSON.stringify(output));

  const cartItemlenght = output.length;

  return (
    <productData.Provider value={{ item, setItem, cartItemlenght, output }}>
      {children}
    </productData.Provider>
  );
};

export default Wrapper;

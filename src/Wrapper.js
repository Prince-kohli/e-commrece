import { productData } from "./Context";
import { useEffect, useState } from "react";

const Wrapper = ({ children }) => {
  const [item, setItem] = useState(JSON.parse(localStorage.getItem("Cart")));
  // console.log("item", item);
  console.log("item", item);

  let obj = new Set(item?.map(JSON.stringify));
  let output = Array.from(obj).map(JSON.parse);
  console.log("out", output);
  localStorage.setItem("Cart", JSON.stringify(output));

  const cartItemlenght = output.length;
  // console.log("output", output);

  return (
    <productData.Provider value={{ item, setItem, cartItemlenght, output }}>
      {children}
    </productData.Provider>
  );
};

export default Wrapper;

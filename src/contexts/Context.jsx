import { createContext, useState, useEffect } from "react";

export const Context = createContext({});

const ContextProvider = ({ children }) => {
    const [data, setData] = useState([]);
    const [total, setTotal] = useState(0);
    const url = '/pizzas.json';

  const consultarApi = async () => {  
      const response = await fetch(url);
      const data = await response.json();
     
      const newdata = data.map((p) => {
        const obj = {cantidad: 0 ,...p}
        return obj;
      })
      setData([...newdata])
  };


useEffect(() => {
  consultarApi();
}, []);


    return (
            <Context.Provider value={{data, setData, total, setTotal}} >{children}</Context.Provider>
    )
};

export default ContextProvider;
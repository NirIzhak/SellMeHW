import { createContext, useState, useEffect } from "react";
import { BASE_URL } from "../data/api";

export const SellMeContext = createContext();

export default function SellMeContextProvider({ children }) {
  const [data, setData] = useState({});
  const [currentShoes, setCurrentShoes] = useState(null);
  const [currentPants, setCurrentPants] = useState(null);
  const [currentShirt, setCurrentShirt] = useState(null);
  const [currentSet, setCurrentSet] = useState([]);
  const [allShoes, setAllShoes] = useState({});
  const [allPants, setAllPants] = useState({});
  const [allShirts, setAllShirts] = useState({});
  const [allSets, setAllSets] = useState([]);

  const LoadItems = async () => {
    try {
      let res = await fetch(`${BASE_URL}`);
      let resData = await res.json();
      setData(resData.results);
      setAllShoes(resData.results.filter((i) => i.type === "shoes"));
      setAllPants(resData.results.filter((i) => i.type === "pants"));
      setAllShirts(resData.results.filter((i) => i.type === "shirt"));
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    LoadItems();
  }, []);

  const value = {
    data,
    allPants,
    allShirts,
    allShoes,
    currentPants,
    currentShirt,
    currentShoes,
    currentSet,
    allSets,
    setCurrentPants,
    setCurrentShirt,
    setCurrentShoes,
    setCurrentSet,
    setAllSets
  };
  return (
    <SellMeContext.Provider value={value}>{children}</SellMeContext.Provider>
  );
}

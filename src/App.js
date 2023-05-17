import { useState, useEffect, useMemo } from "react";
import CheckList from "./components/CheckList";
import SearchBar from "./components/SearchBar";

// const API_URL = "https://dummy.restapiexample.com/api/v1/employees";
// const API_PRODUCT_URL = "https://dummyjson.com/products";

function App() {
  const [cleanComponent, setCleanComponet] = useState(true);
  const [data, setData] = useState();

  // useEffect(() => {
  //   if (cleanComponent) {
  //     fetch(API_PRODUCT_URL)
  //       .then((data) => data.json())
  //       .then((res) => setData(res));
  //   }
  //   // return () => {
  //   //   return false;
  //   // };
  // }, []);

  const productsData = useMemo(() => {
    const resData = data?.products || [];
    return resData;
  }, [data]);
  // console.log(data, "DA::::");
  return (
    <div
      style={{
        padding: "2rem 0rem 0rem 0rem",
        display: "flex",
        justifyContent: "center",
      }}
    >
      {/* {cleanComponent ? <CheckList product={productsData} /> : null} */}
      {/* <button onClick={() => setCleanComponet((prev) => !prev)}>unmount</button> */}
      <SearchBar />
    </div>
  );
}

export default App;

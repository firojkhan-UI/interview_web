import { useState, useEffect, useMemo } from "react";
import CheckList from "./components/CheckList";

const API_URL = "https://dummy.restapiexample.com/api/v1/employees";
const API_PRODUCT_URL = "https://dummyjson.com/products";

function App() {
  const [data, setData] = useState();

  useEffect(() => {
    fetch(API_PRODUCT_URL)
      .then((data) => data.json())
      .then((res) => setData(res));
  }, []);

  const productsData = useMemo(() => {
    const resData = data?.products || [];
    return resData;
  }, [data]);
  return (
    <div>
      <CheckList product={productsData} />
    </div>
  );
}

export default App;

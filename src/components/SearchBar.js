import { useState, useEffect, useMemo } from "react";
import { API_URL, EMP_API_URL, MOVIE_API_URL } from "../APIURL";

const SearchBar = () => {
  const [value, setValue] = useState("");
  const [data, setData] = useState([]);
  const url = `https://api.jikan.moe/v4/anime?q=${value}`;

  const _handleApiCall = (e) => {
    setValue(e.target.value);
    fetch(url)
      .then((response) => response.json())
      .then((res) => setData(res));
  };

  const resData = useMemo(() => {
    const dt = data?.data;
    return dt;
  }, [data, value]);

  return (
    <div>
      <label>
        Search: <input type="search" value={value} onChange={_handleApiCall} />
      </label>
      <h4>{value}</h4>
      <ul>
        {resData?.map((item) => (
          <li>{item?.mal_id}</li>
        ))}
      </ul>
    </div>
  );
};
export default SearchBar;

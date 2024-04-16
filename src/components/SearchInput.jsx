import { useState } from "react";
import axios from "axios";

export default function SearchInput() {
  const [data, setData] = useState(null);
  const initialURL =
    "https://api.pexels.com/v1/search?query=nature&page=1&per_page=15";

  const searchButtonHandler = async function () {
    let result = await axios.get(initialURL, {
      headers: { Authorization: import.meta.env.VITE_PEXELS_API_KEY },
    });
    setData(result.data.photos);
  };

  return (
    <div className="search">
      <input className="input" type="text" />
      <button onClick={searchButtonHandler}>Search</button>
    </div>
  );
}

import { useEffect, useState } from "react";
import axios from "axios";
import SearchInput from "../components/SearchInput";
import Image from "../components/Image";

export default function Index() {
  const [page, setPage] = useState(1);
  const [photos, setPhotos] = useState(null);
  const [searchInput, setSearchInput] = useState("");
  const [currentSearch, setCurrentSearch] = useState("");
  const initialURL = "https://api.pexels.com/v1/curated?page=1&per_page=15";
  let searchURL = `https://api.pexels.com/v1/search?query=${searchInput}&locale=zh-TW&locale=en-US&page=1&per_page=15`;

  const search = async function (url) {
    let result = await axios.get(url, {
      headers: { Authorization: import.meta.env.VITE_PEXELS_API_KEY },
    });

    setPhotos(result.data.photos);
    setCurrentSearch(searchInput);
  };

  const moreImagesHandler = async function () {
    let newURL;
    setPage(page + 1);

    if (currentSearch === "") {
      newURL = `https://api.pexels.com/v1/curated?page=${page + 1}&per_page=15`;
    } else {
      newURL = `https://api.pexels.com/v1/search?query=${currentSearch}&locale=zh-TW&locale=en-US&page=${
        page + 1
      }&per_page=15`;
    }

    let result = await axios.get(newURL, {
      headers: { Authorization: import.meta.env.VITE_PEXELS_API_KEY },
    });

    setPhotos(photos.concat(result.data.photos));
  };

  useEffect(() => {
    search(initialURL);
  }, []);

  return (
    <div style={{ minHeight: "100vh" }}>
      <SearchInput
        onSearch={() => search(searchURL)}
        setInput={setSearchInput}
      />
      <div className="images">
        {photos &&
          photos.map((photo) => {
            return <Image key={photo.id} photo={photo} />;
          })}
      </div>
      <div className="moreImages">
        <button onClick={moreImagesHandler}>更多圖片</button>
      </div>
    </div>
  );
}

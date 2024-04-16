import { useEffect, useState } from "react";
import axios from "axios";
import SearchInput from "../components/SearchInput";
import Image from "../components/Image";

export default function Index() {
  const [photos, setPhotos] = useState(null);
  const initialURL = "https://api.pexels.com/v1/curated?per_page=1&per_page=15";

  const search = async function (url) {
    let result = await axios.get(url, {
      headers: { Authorization: import.meta.env.VITE_PEXELS_API_KEY },
    });

    setPhotos(result.data.photos);
  };

  useEffect(() => {
    search(initialURL);
  }, []);

  return (
    <div style={{ minHeight: "100vh" }}>
      <SearchInput onSearch={search} />
      <div className="images">
        {photos &&
          photos.map((photo) => {
            return <Image key={photo.id} photo={photo} />;
          })}
      </div>
    </div>
  );
}

export default function SearchInput({ onSearch }) {
  const searchURL =
    "https://api.pexels.com/v1/search?query=nature&page=1&per_page=15";

  return (
    <div className="search">
      <input className="input" type="text" />
      <button onClick={() => onSearch(searchURL)}>Search</button>
    </div>
  );
}

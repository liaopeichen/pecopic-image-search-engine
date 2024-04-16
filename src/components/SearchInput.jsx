export default function SearchInput({ onSearch, setInput }) {
  const inputHandler = function (event) {
    setInput(event.target.value);
    () => setInput("");
  };

  return (
    <div className="search">
      <input className="input" type="text" onChange={inputHandler} />
      <button onClick={onSearch}>Search</button>
    </div>
  );
}

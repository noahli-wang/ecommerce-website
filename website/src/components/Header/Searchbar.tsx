import searchIcon from "../../assets/search.png";

export default function Searchbar() {
  return (
    <div className="search-bar">
      <img
        src={searchIcon}
        alt="Search"
        className="search-icon"
      />
      <input
        type="text"
        placeholder="Search..."
      />
    </div>
  );
}
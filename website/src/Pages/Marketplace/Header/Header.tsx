import Searchbar from "./Searchbar";
import "./header.css";


export default function Header() {
  return (
    <header className="header">
      <h1 className="title">WesternMarketplace</h1>
      <p className="slogan">Buy. Sell. Trade on Campus.</p>
      <Searchbar />
    </header>
  );
}

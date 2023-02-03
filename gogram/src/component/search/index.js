import "./Search.css";
import logo from "./logo.png"

export default function Search({ handleChange, handleClick }) {
  return (
    <div className="search">
      <div className="logo">
      <img className="logo" src={logo} alt="logo"/>
      </div>
      <div className="search-bar">
      <input type="text" placeholder="search here" onChange={handleChange} />
      <button class="button-82-pushable" 
        onClick={handleClick}>
      <span class="button-82-shadow"></span>
      <span class="button-82-edge"></span>
      <span class="button-82-front text">
        GO
      </span>
    </button>
    </div>
    </div>
  );
}



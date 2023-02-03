import "./Search.css";
import logo from "./logo.png"

export default function Search({ handleChange, handleClick }) {
  return (
    <div className="Search">
      <img className="logo" src={logo} alt="logo"/>
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
  );
}



// set up the component
// it takes in a single input
// img with href = {results[i].thumbnail}
// this image also needs to be ahyperlink that goes to results[i].URL
import "./thumbnail.css"
export default function Thumbnail({ url, thumbnail }) {
  console.log("url:", url)
  return (
    <a href={url} target="_blank" rel="noreferrer">
      {" "}
      <img src={thumbnail} alt="result"/>{" "}
    </a>
  );
}

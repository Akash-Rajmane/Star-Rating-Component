import "./styles.css";
import StarRating from "./StarRating";

export default function App() {
  return (
    <div className="App">
      <h1>Star Rating Component</h1>
      <StarRating initialRating={3} maxRating={5} />
    </div>
  );
}

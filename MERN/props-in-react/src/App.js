import "./styles.css";
import Card from "./Card.js";
import zoo from "./zoo.js";
export default function App() {
  return (
    <div className="App">
      <Card name={zoo[0].name} source={zoo[0].source} para={zoo[0].para} />
      <Card name={zoo[1].name} source={zoo[1].source} para={zoo[1].para} />
    </div>
  );
}

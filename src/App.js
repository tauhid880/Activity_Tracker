import "./App.css";
import Activities from "./Components/Activities/Activities";
import Header from "./Components/Header/Header";
import Question from "./Components/Question/Question";

function App() {
  return (
    <div className="App">
      <Header></Header>
      <Activities></Activities>
      <Question></Question>
    </div>
  );
}

export default App;

import "./App.css";
import { Team } from "./components/Team";
import { TournamentBrackets } from "./components/TournamentBrackets";

function App() {
  return (
    <div className="app">
      <TournamentBrackets />
      <Team />
      <Team />
      <Team />
      <Team />
    </div>
  );
}

export default App;

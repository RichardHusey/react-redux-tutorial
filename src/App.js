import Counter from "./components/Counter";
import User from "./components/User";

import "./styles.css";

export default function App() {
  return (
    <div className="App">
      <h1>React-Redux-Counter-User</h1>
      <Counter />
      <User />
    </div>
  );
}

import { Component } from "react";
import "./App.css";

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      monsters: [
        {
          id: 1,
          name: "Linda",
        },
        {
          id: 2,
          name: "Frank",
        },
        {
          id: 3,
          name: "Jacky",
        },
        {
          id: 4,
          name: "Andrei",
        },
      ],
    };
  }

  render() {
    return (
      <div className="App">
        {this.state.monsters.map((monster) => (
          <h1 key={monster.id}>{monster.name}</h1>
        ))}
      </div>
    );
  }
}

export default App;

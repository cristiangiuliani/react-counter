import React, { Component } from "react";
import NavBar from "./components/navbar";
import Counters from "./components/counters";
import "./App.css";

class App extends Component {
  state = {
    counters: [
      { id: 1, value: 4 },
      { id: 2, value: 0 },
      { id: 3, value: 0 },
      { id: 4, value: 0 }
    ]
  };
  constructor(props) {
    //Il codice nel costruttore viene chiamato quando si inizzializza la classe.
    //Le props vanno passate come argomento altrimenti non vengono viste
    super(props); //super va sempre chiamata nel costruttore
    console.log("App - Constructor", props);
  }
  componentDidMount() {
    //viene chiamata quando il componente ha finito il caricamento e renderizzato la pagina.
    //Comoda per chiamate AJAX
    console.log("App - Mounted");
  }
  handleDelete = counterId => {
    const counters = this.state.counters.filter(c => c.id !== counterId);
    this.setState({ counters });
  };
  // per evitare di bindare tutti imetodi nel constructor, si trasforma il metodo in una funzione di errore che non rebinda this
  handleIncrement = counter => {
    console.log(counter);
    const counters = [...this.state.counters]; //...clona l'array
    const index = counters.indexOf(counter);
    counters[index] = { ...counter };
    counters[index].value++;
    // setState sincronizza il dom virtuale con quello reale
    this.setState({ counters });
  };
  handleReset = () => {
    const counters = this.state.counters.map(c => {
      c.value = 0;
      return c;
    });
    this.setState({ counters });
  };
  render() {
    console.log("App - Rendered");

    return (
      <React.Fragment>
        <NavBar
          totalCounters={this.state.counters.filter(c => c.value > 0).length}
        />
        <main className="container">
          <Counters
            counters={this.state.counters}
            onReset={this.handleReset}
            onIncrement={this.handleIncrement}
            onDelete={this.handleDelete}
          />
        </main>
      </React.Fragment>
    );
  }
}

export default App;

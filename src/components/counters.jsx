import React, { Component } from "react";
import Counter from "./counter";
class Counters extends Component {
  render() {
    console.log("Counters - Rendered");

    const { onReset, counters, onDelete, onIncrement } = this.props;
    // dtata destructoring, non c'è più bisogno di scrivere ogni volta this.props
    return (
      <div>
        <button onClick={onReset} className="btn btn-primary btn-sm m-2">
          Reset
        </button>
        {counters.map(counter => (
          <Counter
            key={counter.id}
            onDelete={onDelete}
            onIncrement={onIncrement}
            counter={
              counter /* si incapsula l'oggetto e si hanno tutte le props*/
            }
          >
            <h4>Counter {counter.id}</h4>
          </Counter>
        ))}
      </div>
    );
  }
}

export default Counters;

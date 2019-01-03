import React, { Component } from "react";

class Counter extends Component {
  state = {
    //lo state è interno al componente, non visibile dagli altri
    //value: this.props.counter.value, // le props servono ad inviare variabili tra componenti ma sono read-only
    // si spostano le proprietà in un solo componente, il padre
    imageUrl: "https://picsum.photos/50",
    tags: ["tag1", "tag2", "tag3"]
  };
  styles = {
    fontSize: 10,
    fontWeight: "bold"
  };
  /*
    serve per bindare this Counter al metodo. andrebbe fatto per tutti i metodi
    constructor() {
    super();
    this.handleIncrement = this.handleIncrement.bind(this);
  }*/
  componentDidUpdate(prevProps, prevState) {
    console.log("Counter - Updated");

    // Questo state scatta quando si aggiorna il dom con setstate.
    //Il dom virtuale viene confrontato con quello reale e vengono riportate solo le modifiche
    console.log("prevProps", prevProps); // è posibile avere i valori prima dell'update
    console.log("prevState", prevState);
  }

  componentWillUnmount() {
    console.log("Counter - Unmount");
  }
  render() {
    console.log("Counter - Rendered");

    return (
      <React.Fragment>
        {
          this.props.counter.children
          /*children contiene i nodi interni del compoennte padre, se esistono*/
        }
        <img src={this.state.imageUrl} alt="" />
        <span style={this.styles} className={this.getBadgeClasses()}>
          {this.formatCount()}
        </span>
        <button
          //onClick={this.handleIncrement}
          // Se si vogliono passare parametri questa è la sintassi
          onClick={() => this.props.onIncrement(this.props.counter)}
          className="btn btn-secondary btn-sm"
        >
          Increment
        </button>
        <button
          onClick={() => this.props.onDelete(this.props.counter.id)}
          className="btn btn-danger btn-sm m-2"
        >
          Delete
        </button>
        {this.state.tags.length === 0 && "create tag"}
        {this.renderTags()}
      </React.Fragment>
    );
  }

  renderTags() {
    if (this.state.tags.length === 0) return <p>No tags</p>;
    // si usa map perchè non esistono cicli in react
    return (
      <ul>
        {this.state.tags.map(tag => (
          <li key={tag}>{tag}</li>
        ))}
      </ul>
    );
  }

  getBadgeClasses() {
    let classes = "badge m-2 badge-";
    classes += this.props.counter.value === 0 ? "warning" : "primary";
    return classes;
  }

  formatCount() {
    const { value } = this.props.counter;
    return value === 0 ? "Zero" : value;
  }
}

export default Counter;

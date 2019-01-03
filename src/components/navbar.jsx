import React /*, { Component } se stateless non serve */ from "react";

// Stateless Functional Component. Altro modo di scrivere componenti senza state e metodi

const NavBar = ({ totalCounters }) => {
  //Nelle stateless non si possono usare stati come render, constructor, didmount ecc...
  console.log("Navbar - Rendered");

  return (
    <nav className="navbar navbar-light bg-light">
      <a href="#" className="navbar-brand">
        Navbar
        <span className="badge badge-pill badge-secondary">
          {totalCounters}
        </span>
      </a>
    </nav>
  );
};
/* class NavBar extends Component {
  render() {
    return (
      <nav className="navbar navbar-light bg-light">
        <a href="#" className="navbar-brand">
          Navbar
          <span className="badge badge-pill badge-secondary">
            {this.props.totalCounters}
          </span>
        </a>
      </nav>
    );
  }
}*/

export default NavBar;

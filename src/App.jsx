import React, { Component } from 'react';
import Film from "./components/Film";
import People from "./components/People";
import "./App.css";

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      ghibliFilms: [],
      filmsLoaded: false,
      peopleLoaded: false
    };
  }

  componentDidMount() {
    fetch("https://ghibliapi.herokuapp.com/films")
      .then(res => res.json())
      .then(studioGhibli =>
        this.setState({
          ghibliFilms: studioGhibli,
          filmsLoaded: false,
          peopleLoaded: false
        })
      );
  }

  handleClick() {
    if (this.state.filmsLoaded === false) {
      this.setState(prevState => ({
        filmsLoaded: !prevState.filmsLoaded
      }));
      this.setState({ peopleLoaded: false });
    } else {
      this.setState(prevState => ({
        peopleLoaded: !prevState.peopleLoaded
      }));
      this.setState({ filmsLoaded: false });
    }
  }

  render() {
    console.log(this.state.ghibliFilms);
    return (
      <div>
        <div className="jumbotron jumbotron-fluid" style={{backgroundColor: '	#676a78'}} >
          <div className="container mx-auto text-center">
          <img className="w-75" src={require(`./Images/logo.png`)} alt="Studio Ghibli" />

          </div>
        </div>
        <div className="row">
          <div className="col-sm-12 mx-auto text-center mt-2">
            <input
              type="button"
              value={this.state.filmsLoaded ? "Load People" : "Load Films"}
              onClick={e => this.handleClick(e)}
            />
          </div>
        </div>
        <div className="row">
          {this.state.filmsLoaded ? (
            <Film data={this.state.ghibliFilms} />
          ) : (
            ""
          )}
          {this.state.peopleLoaded ? (
            <People data={this.state.ghibliFilms} />
          ) : (
            ""
          )}
        </div>
      </div>
    );
  }
}

export default App;


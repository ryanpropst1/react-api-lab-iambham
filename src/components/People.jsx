import React from "react";

class People extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      ghibliFilms: [],
      ghibliPeople: []
    };
  }

  componentDidMount() {
    fetch(this.props.data[0].people[0])
      .then(res => res.json())
      .then(studioGhibli => this.setState({ ghibliPeople: studioGhibli }));
  }

  render() {
    let listPeople = this.state.ghibliPeople.map(person => {
      return (
        <div
          key={ person.id }
          className="card col-sm-5 my-2 mx-auto d-flex justify-content-center"
          style={{backgroundColor: '#606090'}}
        >
          <img
            className="card-img-top"
            src={require(`../Images/movie-banner.jpg`)}
            alt="Movie Banner"
          />
          <div className="card-body">
            <h5 className="card-title">Name: {person.name}</h5>
            <p className="card-text">
              Age: {person.age}
              <br />
              Gender: { person.gender }
              <br />
              <a href={person.url}>My data Object URL</a>

            </p>
          </div>
        </div>
      );
    });
    return <React.Fragment>{listPeople}</React.Fragment>;
  }
}

export default People;

// api.data.people properties
//
// {
//   "id": "ba924631-068e-4436-b6de-f3283fa848f0",
//   "name": "Ashitaka",
//   "gender": "Male",
//   "age": "late teens",
//   "eye_color": "Brown",
//   "hair_color": "Brown",
//   "films": [
//     "https://ghibliapi.herokuapp.com/films/0440483e-ca0e-4120-8c50-4c8cd9b965d6"
//   ],
//   "species": "https://ghibliapi.herokuapp.com/species/af3910a6-429f-4c74-9ad5-dfe1c4aa04f2",
//   "url": "https://ghibliapi.herokuapp.com/people/ba924631-068e-4436-b6de-f3283fa848f0"
// }

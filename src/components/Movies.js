import React, { Component } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faRoute, faSearch } from "@fortawesome/free-solid-svg-icons";
import { movies } from "../mockData/moviesData";
import { InputGroup, FormControl, Button } from "react-bootstrap";
import {Link} from "react-router-dom";
import "./Movies.css";
import MovieDetails from "./MovieDetails";

class Movies extends Component {
  constructor(props) {
    super(props);
    this.state = {
      searchtext: "",
      filteredMovies: [],
      movies: movies,
    };
  }

  changeSearchText = (e) => 
  {
    this.setState({
      searchtext: e.target.value,
    });
  };

  onFilterMovies = (e) => 
  {
    const Search = this.state.searchtext.toLocaleLowerCase();
    e.preventDefault(); //item.Movie.toLowerCase().includes('Search'.toLowerCase())) ;
    const cinemas = this.state.movies; //str.toLowerCase().includes('Stark'.toLowerCase());
    const filtermovie = cinemas.filter((item) =>
    item.Movie.toLowerCase().includes(Search)
      
    );
    console.log(filtermovie); //str.toLowerCase().indexOf('hello')
    this.setState({
      filteredMovies: filtermovie,
    });
  };
  // //  Enter keycode....function.
  enterPressed = (event) => {
    console.log("testing");
    var code = event.keyCode || event.which;
    if (code === 13) {
      //13 is the enter keycode
      this.onFilterMovies(event);
    }
  };

  loadMoviewDetails = (movie) => {
    return <MovieDetails movie={movie} />;
  };
  render() {
     const { searchtext, filteredMovies } = this.state;
    return (
      <div className="text-center">

        
       <InputGroup className="mt-5">
          <FormControl
            placeholder="search"
            aria-label="Search"
            aria-describedby="basic-addon2"
            onChange={this.changeSearchText}
            value={searchtext}
            onKeyPress={this.enterPressed.bind(this)}
          />
          <InputGroup.Append>
            <Button
              variant="primary"
              id="enter"
              onClick={this.onFilterMovies}
              type="button"
            >
              <FontAwesomeIcon icon={faSearch} />
            </Button>
          </InputGroup.Append>
        </InputGroup>  

        <div>
          {filteredMovies.map((item, index) => {
            return (
              <div
                // className="tile mt-5"
                onClick={() => this.loadMoviewDetails(item)} >
              
                <Link to={`${item.id}/moviedetails`}>
                  <div key={index} className="cine-right">
                    {item.Movie}
                  </div>
                </Link>
              </div>
            );
          })}
        </div>
      </div>
    );
  }
}

export default Movies;

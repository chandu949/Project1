import React, { Component } from "react";
import { movies } from "../mockData/moviesData";
import { faStar, StarRating } from "react-bootstrap-star-rating";
import {Link} from "react-router-dom";
// import {ReactStars} from "react-rating-stars-component";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import homelogo from "../img/home.jpg";
import Dropdown from "react-bootstrap/Dropdown";
import "bootstrap/dist/css/bootstrap.min.css";
import SocialFollow from "../components/Socialfollow";

class MovieDetails extends Component {
  constructor(props) {
    super(props);
    this.state = {
      movies: movies    
    };
    
  }

  render() {

    const movieID = this.props.match.params.name;
    console.log(this.props);
    
    const moviedetails = this.state.movies.find(item => item.id == movieID);

   return (
      <div className="bg-dark">
           <nav className="navbar navbar-expand-md navbar-dark bg-dark fixed-top">
              <Link className="navbar-brand" to="/movies">
                   <img
                    // className="imglogo"
                    className="img-thumbnail"
                    src={homelogo}
                    alt="homelogo"
                    width="35"
                    height="10"
                  ></img>
              </Link>

          <Dropdown>
            <Dropdown.Toggle
              className="imdb-menu"
              variant="Secondary"
              id="dropdown-basic"
            >
              Imdbmenu
            </Dropdown.Toggle>
            <Dropdown.Menu className="imdb-shows">
              <Dropdown.Item
                className="imdb-links"
                href="https://www.imdb.com/chart/boxoffice/?ref_=nv_ch_cht"
              >
                Top Box Office
              </Dropdown.Item>
              <Dropdown.Item
                className="imdb-links"
                href="https://www.imdb.com/movies-in-theaters/?ref_=nv_mv_inth"
              >
                In Theatres
              </Dropdown.Item>
              <Dropdown.Item
                className="imdb-links"
                href="https://www.imdb.com/chart/toptv/?ref_=nv_tvv_250"
              >
                T.v Shows
              </Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>
        </nav>
        <div className="jumbotron">
          <h1 className="col mt-3 text-white">{moviedetails.Movie}</h1>

          <div className="hell">
            <FontAwesomeIcon icon={faStar} className="star" />
            <p className="imdb">IMDB rating</p>
            <p className="rate">{moviedetails.Rating}</p>
          </div>

          <div className="col mt-4 rounded random">
            <div className="alignment">
              <a
                className="text-white"
                href={moviedetails.link1}
              >
                Watch it
              </a>
              {/* {moviedetails.scenes.map(scene => {
           return (<a href={scene.link}>{scene.label}</a>);
         })} */}

              <div>
                <a
                  className="text-white"
                  href="https://www.imdb.com/showtimes/"
                >
                  Ticket Booking
                </a>
              </div>
            </div>
          </div>

          <div className="col mt-4 move-left">
            <img
              src={moviedetails.img}
              alt="Aditya"
              width="100%"
              height="280"
            />
          </div>
          <div className="ml-3 mt-4 ">
            <a
              href={moviedetails.movietrailer}
              className="btn btn-outline-primary"
            >
              Trailer
            </a>
          </div>

          <div className="col mt-3">
            <div className="col mt-1 text-center Description">
              Movie Description
            </div>
            <div className="col mt-1 text-white description">
              {moviedetails.Description}
            </div>
          </div>

          <div className=" col mt-5 move-right">
            <div className="text-center castandcrew">Cast & crew </div>
            <div className="moviedetails">
              <p className="text-white">
                Movie{" "}

                <span className="changecolor">{moviedetails.Movie}</span> 

                {/* {/* <a
                  className="ml-3"
                  href= {moviedetails.Movie}
                > *
                 
                </a> */}
              </p>
              <hr className="my-1" />
              <p className="text-white">
                Cast{" "}
                {moviedetails.Cast.map((cast,index) => {
                return (
                  <span key={index}>
                  
                      <a className="ml-3 moviedetails" href={cast.link}>{cast.name}{cast.comma}
                      </a>
             
                      </span>
                     )})}
              </p>
            
              <hr className="my-1" />
              <p className="text-white">
                Director{" "}

                     <span>
                       <a className="ml-3 direc" href={moviedetails.director.link}>
                        {moviedetails.director.name}
                      </a>
                      
                     </span>
              </p>

               <hr className="my-1" />
              <p className="text-white">
                {" "}
                Cinematography
                
                {moviedetails.Cinematography.map((dop, index) => {
                return (
                  <span key={index}>
                    <span>
                      <a className="ml-3 moviedetails" href={dop.link}>
                        {dop.name}
                      </a>
                   </span>
                   </span>
                )})}
              
               </p>
              <hr className="my-1" />

              <p className="text-white">
                Genre{" "}

                <span>
                  <a className="ml-3"  href={moviedetails.genre.link}>
                  {moviedetails.genre.name}
                 </a>
                </span>
                
              </p>
                       
              <hr className="my-1" />
              <p className="text-white">
                Music{" "}
                {moviedetails.Music.map((music, index) => {
                return (
                  <span key={index}>
                  
                      <a className="ml-3 moviedetails" href={music.link}>
                        {music.name}
                      </a>
             
                      </span>
                     )})}
              </p>
              <hr className="my-1" />

              <p className="text-white">
                Production by{" "}
                <a
                  className="ml-3"
                  href={moviedetails.Production.link}>{moviedetails.Production.name}
                 </a>
               </p>

              <hr className="my-1" />
              <p className="text-white">
                ReleaseDate{" "}
                <a className="ml-3 nolink">{moviedetails.ReleaseDate}</a>
              </p>
              <hr className="my-1" />
              <p className="text-white">
                Duration <a className="ml-3 nolink">{moviedetails.Duration}</a>
              </p>
              <hr className="my-1" />
              <p className="text-white">
                Awards <a className="ml-3 nolink">{moviedetails.Awards}</a>
              </p>
            </div>
          </div>

          <div className="bg-white complete">
            <p className="text-center moviescenes">Movie scenes</p>
            <div className="move-right">

               {moviedetails.scenes.map((scene, index) => {
                return (
                  <span key={index}>
                    <span>
                      <a className="scenes" href={scene.link}>
                        {scene.label}
                      </a>
                      <img
                        src={scene.img}
                        className="img-thumbnail"
                        width="20%"
                        height="18"
                      />
                    </span>
                  </span>
                );
              })}
            </div>
          </div>
        </div>
        <SocialFollow />
      </div>
    );
  }
}
export default MovieDetails;

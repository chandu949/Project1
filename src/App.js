import logo from "./logo.svg";
import "./App.css";
import Movies from "./components/Movies";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { BrowserRouter, Route, Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import MovieDetails from "./components/MovieDetails";


function App() {
      return (
      <div>    
          <BrowserRouter>
            <div className="App"> 
                <Route path="/:name/moviedetails" component={MovieDetails}></Route>
                <Route path="/movies" component={Movies}></Route> 
            </div>
          </BrowserRouter>
      </div>  
            );
              }
 export default App;
        



      
    
      
      


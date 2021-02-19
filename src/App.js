import logo from "./logo.svg";
import "./App.css";
import Movies from "./components/Movies";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { BrowserRouter, Route, Redirect} from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import MovieDetails from "./components/MovieDetails";
import Ticketbooking from "./components/Ticketbooking";
import Movieseats from "./components/Movieseats";
 


function App() {
      return (
      <div>    
        <BrowserRouter>
            <div className="App"> 
                <Route path="/:name/moviedetails" component={MovieDetails}></Route>
                <Route path="/movies" component={Movies}></Route> 
                <Route path="/movieseats" component={Movieseats}></Route>
                <Route path="/Ticketbooking" component={Ticketbooking}></Route>
                <Route path="/bookingsummary" component={Movieseats}></Route>
                <Redirect from="/" to="/movies" />
            </div>
          </BrowserRouter>

          
      </div>  
            );
              }
 export default App;
        



      
    
      
      


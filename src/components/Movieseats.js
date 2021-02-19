import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import angleleft from "../img/angleleft.png";
import screencover from "../img/screencover.jpg";
import { BrowserRouter, Route, Link } from "react-router-dom";
import { Modal,Button} from 'react-bootstrap';
// import { movies } from "../mockData/moviesData";

class Movieseats extends Component {

    constructor(props) {
        super(props);
        this.state={
            cost:0,
        selectedseats:[],
        selectedtickets:false,
        modalclose:false,
        
       
      }
    }           
        
    booktickets = (row,index) => {
        const {cost,selectedseats,modalclose} = this.state;
        const newcost = row.cost + cost;
        const newindex = index + 1
        const newseats = row.label + '' + newindex;
        selectedseats.push(newseats);
        this.setState({
            cost:newcost,
            selectedseats:selectedseats,
            modalclose:true
            
          })
        }

        ticketbooked = () => {
          this.setState({
            selectedtickets:true
          })

        }

        ticketsdone = () => {
          this.setState({
            selectedseats:[],
            cost:0,
            selectedtickets:false
           
          })
        }
          
  
  render() {
    const {cost,modalclose} = this.state;
    const seatArrangment = [
      {
        label: "G",
        seats: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21,22],
        cost: 200,
      },
      {
        label: "F",
        seats: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21,22],
        cost: 200,
        
      },
      {
        label: "E",
        seats: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21,22],
        cost: 200,
          
      },
    ];
    const silverArrngment = [
      {
        label: "D",
        seats: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21,22],
        cost: 150,
      },
      {
        label: "C",
        seats: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21,22],
        cost: 150,
      },
      {
        label: "B",
        seats:[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21,22],
        cost: 150,
      },
      {
        label: "A",
        seats: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21,22],
        cost: 150,
      },
    ];
 
      
  
return (
  
      <div>
        <nav className="navbar navbar-light bg-dark">
         {/* <h1 className="col mt-3 text-white">{moviedetails.Movie}</h1> */}
         
        
        <Link  to="/Ticketbooking">
          <img
            className="img-thumbnail"
            src={angleleft}
            alt="angleleft"
            width="25"
            height="70"
          />
          </Link>
          
       </nav>
        <nav className="navbar navbar-light bg-light">gdhfghfdgfgfd</nav>

        <div className="mt-4 movieseats">
          <div className="mx-5 gold">
            <p className="ml-4"> GOLD Rs. 200.00-/</p>
            <hr className="mx-4" />
          </div>
        </div>

        <div>
          <table>
            <tbody>
              {seatArrangment.map((row) => {
                return (
                  <tr>
                    <td>
                      <div className="seats">{row.label}</div>
                    </td>
                    <td>
                      <div className="seatsnum">
                        {row.seats.map((seat, index) => {
                          return (
                            index >= 0 &&
                            index < 6 && (
                              <button className="moveseat" onClick={()=>this.booktickets(row,index)}>{seat}</button>
                            )
                          );
                        })}
                      </div>
                    </td>

                    <td>
                      <div className="seatsnum1">
                        {row.seats.map((seat, index) => {
                          return (
                            index >= 6 &&
                            index < 15 && (
                              <button className="moveseat" onClick={() =>this.booktickets(row,index)}>{seat}</button>
                            )
                          );
                        })}
                      </div>
                    </td>

                    <td>
                      <div className="seatsnum2">
                        {row.seats.map((seat, index) => {
                          return (
                            index >= 15 &&
                            index < 22 && (
                              <button className="moveseat" onClick={()=>this.booktickets(row,index)}>{seat}</button>
                            )
                          );
                        })}
                      </div>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>

        <div className="mt-4 movieseats">
          <div className="mx-5 gold">
            <p className="ml-4"> SILVER Rs. 150.00-/</p>
            <hr className="mx-4" />
          </div>
        </div>

        <div>
          <table>
            <tbody>
              {silverArrngment.map((row) => {
                return (
                  <tr>
                    <td>
                      <div className="seats">{row.label}</div>
                    </td>

                    <td>
                      <div className="seatsnum">
                        <td>
                          {row.seats.map((silverseats,index) => {
                            return (
                              index >= 0 &&
                              index < 6 && (
                                <button className="moveseat" onClick={()=>this.booktickets(row,index)}>
                                  {silverseats}
                                </button>
                              )
                            );
                          })}
                        </td>

                        <td>
                          <div className="seatsnum1">
                            {row.seats.map((silverseats, index) => {
                              return (
                                index >= 6 &&
                                index < 15 && (
                                  <button className="moveseat" onClick={()=>this.booktickets(row,index)}>
                                    {silverseats}
                                  </button>
                                )
                              );
                            })}
                          </div>
                        </td>

                        <td>
                          <div className="seatsnum2">
                            {row.seats.map((seat, index) => {
                              return (
                                index >= 15 &&
                                index < 22 && (
                                  <button className="moveseat" onClick={()=>this.booktickets(row,index)}>{seat}</button>
                                )
                              );
                            })}
                          </div>
                        </td>
                      </div>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
          <div className="mt-3 screenimg">
            <img className="screencover" src= {screencover} alt="screencover" height= "70px" width="376px" />
           
          </div>
           <div className="screenlook">ALL EYES THIS WAY PLEASE</div>
        </div>
        { modalclose && <div className="border footer">
          <div className=" mt-2 payable">
            <div className="mt-2  pay">Pay Rs.{cost}-/</div>
            <button type="button" className="ticket" onClick={this.ticketbooked}>TAKE TICKETS</button>
          </div>         
        </div>}
        <Modal show={this.state.selectedtickets}>
  <Modal.Header> Booking summary
  </Modal.Header>
  <Modal.Body>Seats   {this.state.selectedseats.map(seat=> {
  
    return(
          <span>{seat},</span>
         )
     })}
  
  <div>Total Rs.{cost}</div>
  
  </Modal.Body>
        <Modal.Footer>
          <Button onClick={this.ticketsdone} variant="secondary">Done</Button>
        </Modal.Footer>
  </Modal>
      
      </div>
    );
  }
}

export default Movieseats;
        

import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Modal,Button} from 'react-bootstrap';
import Movieseats from './Movieseats';
import { Link } from 'react-router-dom';
// import kgf2 from "../img/kgf2.jpg";
// import radhe from "../img/radhe.jpg";
// import sooryavanshi from "../img/sooryavanshi.jpg";
// import tuckjagadish from "../img/tuckjagadish.jpg";

class Ticketbooking extends Component {

  constructor(props) {
    super(props);
    this.state={
      alertMsg:"",
      showAlert: false,
      selectday:false,
    }

  }

  onShowTimingClick = () => {
    this.setState({
      showAlert:true

    })
  }

  onCancel = () => {
    this.setState({
      showAlert:false
    })
  }

  eachdayshow = () => {
   

    this.setState({
      selectday : true
         
    })
  } 
 
  
    render() {
      const showTimes = ["10:30AM", "1:30PM", "04:45PM", "07:25PM"];
      const showdays = ["MON","TUE","WED","THU","FRI","SAT","SUN"];
      const { showAlert, alertMsg,selectday } = this.state;

        return (
          
            <div>
                  
            <div>
              <nav className="navbar-light bg-dark">
                
                {showdays.map(days => {
                  return (
                     <button type="button" className="day" onClick={this.eachdayshow}>{days}</button>
                   
                      )})}
                    </nav>
              
                     </div>
                    
            {selectday ? <div className="timings">
               <div>
                  Usha Prasad Multiplex : Nizamabad 
                  {
                    showTimes.map(timing=> {
                      return <button type="button"  onClick={this.onShowTimingClick} className="myshowtiming" data-toggle="tooltip" data-placement="top" title= "Rs.130.00, GOLD ,available" >{timing}</button>
                      })}

                </div>

                <div>
                  AMB Cinemas: Gachibowli 
                  {
                    showTimes.map(timing=> {
                      return <button type="button"  onClick={this.onShowTimingClick} className="myshowtiming" data-toggle="tooltip" data-placement="top" title="Rs.130.00, GOLD ,available">{timing}</button>
                    })
                  }
                </div>

                <div>
                  PVR: Central Mall, Panjagutta 
                  {
                    showTimes.map(timing => {
                      return <button type="button" onClick={this.onShowTimingClick} className="myshowtiming" data-toggle="tooltip" data-placement="top" title="Rs.130.00, GOLD ,available">{timing}</button>
                    })
                  }
                </div>
                        
                      
 

                <div>
                  INOX: GVK One, Banjara Hills 
                  {
                    showTimes.map(timing => {
                      return <button type="button" onClick={this.onShowTimingClick} className="myshowtiming" data-toggle="tooltip" data-placement="top" title="Rs.130.00, GOLD ,available">{timing}</button>
                    })
                  }
                 
                </div>

                <div>
                  Cinepolis: Sudha Cinemas, Hyderabad
                 {
                  showTimes.map(timing => {
                     return  < button type="button" onClick={this.onShowTimingClick} className="myshowtiming" data-toggle="tooltip" data-placement="top" title="Rs.130.00,  GOLD, available">{timing}</button>
                   })
                 }
                
                </div>
               
                <Modal show={showAlert}>
                    <Modal.Header><div className="terms">Terms and Condition</div>
                    </Modal.Header>
                    <Modal.Body className="conditions">
                    <div>1. Right of admission reserved.</div>
                    <div>2. Ticket is Compulsory for Children of 3 Years age & Above.</div>
                    <div>3. Please Carry ID Proof for movies Certified with `A` Certificate.</div>
                    <div>4. Once Ticket Purchased cannot be Cancelled or refunded.</div>
                    <div>5. Outside food and beverages are not allowed into the theatre premises.</div>
                    <div>6. Items like Laptops, Cameras, Lighters, Matchboxes, Cigarettes or any Inflammable objects are not allowed into the theatre premises.</div>
                    <div>7. Helmets, carry bags, eatables or handbags are not allowed into the theatres, please deposit at Baggage counter provided.</div>
                    <div>8. Only Online booking partner server messages are allowed.</div>
                    <div>9. Children under the age of 18 years will not be permitted in the cinema for A rated movies.</div>
                    </Modal.Body>
                    <Modal.Footer>
                         <Button onClick={this.onCancel} variant="secondary">Cancel</Button>
                         <Link to="/movieseats">
                          <Button variant="primary">Accept</Button>
                        </Link>
                         
                    </Modal.Footer>
                </Modal>
            </div> 
               : <div className="quote">Select A Day</div>}
            </div>  
        );
    }
  }
  
  export default Ticketbooking;

                             
                                 

            
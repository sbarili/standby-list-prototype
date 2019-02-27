import React, { Component } from "react";
//import { Alert } from "react-bootstrap";

class Passenger extends Component {
  //state = {  }

  render() {
    console.log("Pax Props ", this.props);
    return (
      <div>
        {/* className are bootstrap classes to style elements */}
        {/* Using classes is normal convention, style can be used in special situations */}
        {/* {this.props.children} */}
        {this.props.passengerName}
      </div>
    );
  }

  formatPax() {
    return this.props.passenger;
  }
}

export default Passenger;

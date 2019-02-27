import React, { Component } from "react";
import Passenger from "./Passenger";
import { ListGroup } from "react-bootstrap";

class Passengers extends Component {
  render() {
    const { passengers } = this.props;
    console.log(passengers);
    return (
      <ListGroup>
        <div>
          {passengers.map(passenger => (
            <ListGroup.Item>
              <Passenger
                key={passenger.id}
                passengerName={passenger.nameLast + ", " + passenger.nameFirst}
                passenger={passenger}
                // key={counter.id}
                // onDelete={onDelete} // this counter component now bubbles onDelete event up to parent component so it's available to all of it's children
                // onIncrement={onIncrement}
                // counter={counter}
                // value={counter.value}
                // id={counter.id}
              >
                {/* <h4>Counter #{counter.id}</h4> */}
              </Passenger>
            </ListGroup.Item>
          ))}
        </div>
      </ListGroup>
    );
  }
}

export default Passengers;

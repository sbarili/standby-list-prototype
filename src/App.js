import React, { Component } from "react";
//import logo from './logo.svg';
//import Counters from "./Components/counters";
import Passengers from "./Components/Passengers";
import NavBar from "./Components/navbar";
//import Seatmap from "react-seatmap";
import "./App.css";

class App extends Component {
  state = {
    counters: [
      { id: 1, value: 0 },
      { id: 2, value: 3 },
      { id: 3, value: 1 },
      { id: 4, value: 2 }
    ],
    passengers: [
      {
        id: 1,
        priorityList: 1,
        thruStatus: "THRU",
        bpIssued: false,
        priorityCode: "D2",
        nameLast: "SHMULL MAYER",
        nameFirst: "DAWN",
        groupCode: "AB4",
        cabinBooked: "F",
        cabinDesired: "Y",
        destination: "TUS",
        seatOrTransferFlight: NaN,
        bags: "NB",
        remarks: "FDJ AA"
      },
      {
        id: 2,
        priorityList: 2,
        thruStatus: "???",
        bpIssued: true,
        priorityCode: "D2",
        nameLast: "BARILI",
        nameFirst: "SARAH",
        groupCode: "AB4",
        cabinBooked: "F",
        cabinDesired: "Y",
        destination: "TUS",
        seatOrTransferFlight: NaN,
        bags: "NB",
        remarks: "CJ"
      },
      {
        id: 3,
        priorityList: 3,
        thruStatus: "???",
        bpIssued: true,
        priorityCode: "D1",
        nameLast: "GRAY",
        nameFirst: "ROSALYNN",
        groupCode: NaN,
        cabinBooked: "F",
        cabinDesired: "Y",
        destination: "TUS",
        seatOrTransferFlight: NaN,
        bags: "NB",
        remarks: NaN
      },
      {
        id: 4,
        priorityList: 4,
        thruStatus: "???",
        bpIssued: false,
        priorityCode: "D1",
        nameLast: "NGUYEN",
        nameFirst: "TRACY",
        groupCode: NaN,
        cabinBooked: "F",
        cabinDesired: "J",
        destination: "TUS",
        seatOrTransferFlight: NaN,
        bags: "NB",
        remarks: NaN
      },
      {
        id: 5,
        priorityList: 5,
        thruStatus: "???",
        bpIssued: false,
        priorityCode: "D1",
        nameLast: "GRAY",
        nameFirst: "ROSALYNN",
        groupCode: NaN,
        cabinBooked: "F",
        cabinDesired: "Y",
        destination: "TUS",
        seatOrTransferFlight: NaN,
        bags: "NB",
        remarks: NaN
      },
      {
        id: 6,
        priorityList: 6,
        thruStatus: "???",
        bpIssued: false,
        priorityCode: "D1",
        nameLast: "GAMA",
        nameFirst: "RUI",
        groupCode: NaN,
        cabinBooked: "Y",
        cabinDesired: "J",
        destination: "TUS",
        seatOrTransferFlight: NaN,
        bags: "NB",
        remarks: NaN
      },
      {
        id: 7,
        priorityList: 7,
        thruStatus: "???",
        bpIssued: false,
        priorityCode: "D1",
        nameLast: "WILLIAMS",
        nameFirst: "SPENCER",
        groupCode: NaN,
        cabinBooked: "Y",
        cabinDesired: "Y",
        destination: "TUS",
        seatOrTransferFlight: NaN,
        bags: "NB",
        remarks: NaN
      },

      {
        id: 8,
        priorityList: 8,
        thruStatus: "???",
        bpIssued: false,
        priorityCode: "D1",
        nameLast: "KAUSHIK",
        nameFirst: "SUMAN",
        groupCode: "RR7",
        cabinBooked: "Y",
        cabinDesired: "F",
        destination: "TUS",
        seatOrTransferFlight: NaN,
        bags: "NB",
        remarks: NaN
      },
      {
        id: 9,
        priorityList: 9,
        thruStatus: "???",
        bpIssued: false,
        priorityCode: "D1",
        nameLast: "COLORES",
        nameFirst: "DAVID",
        groupCode: NaN,
        cabinBooked: "Y",
        cabinDesired: "Y",
        destination: "TUS",
        seatOrTransferFlight: NaN,
        bags: "NB",
        remarks: NaN
      }
    ]
  };

  // constructor() {
  //   super();
  //   //console.log("App - Constructor");
  //   //this.state = this.props.something; pass props as a param to ctor and base class (super) to directly modify state
  // }

  // componentDidMount() {
  //   //Make ajax calls to get data from the server
  //   //this.setState({movies});
  //   //console.log("App - Mounted");
  // }

  handleDelete = counterId => {
    //console.log("Event Handler Called", counterId);
    const counters = this.state.counters.filter(c => c.id !== counterId);
    this.setState({ counters });
  };

  handleReset = () => {
    const counters = this.state.counters.map(c => {
      c.value = 0;
      return c;
    });
    this.setState({ counters });
  };

  handleIncrement = counter => {
    //console.log(counter)
    const counters = [...this.state.counters];
    const index = counters.indexOf(counter);
    counters[index] = { ...counter };
    counters[index].value++;
    this.setState({ counters });
    //console.log(this.state.counters[0]);
  };

  render() {
    console.log(this.state.passengers);
    return (
      <React.Fragment>
        <NavBar totalCounters={this.state.passengers.length} />
        <main className="container">
          {/* <Counters
            counters={this.state.counters}
            onReset={this.handleReset}
            onIncrement={this.handleIncrement}
            onDelete={this.handleDelete}
          /> */}
          <Passengers passengers={this.state.passengers} />
          {/* <Seatmap
            rows={[
              [
                { number: "1A", isReserved: false },
                { number: "1B", isReserved: false }
              ],
              [
                { number: "2A", isReserved: false },
                { number: "2B", isReserved: false }
              ]
            ]}
            maxReservableSeats={3}
            alpha
          /> */}
        </main>
      </React.Fragment>
    );
  }
}

export default App;

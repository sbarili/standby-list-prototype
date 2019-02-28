import React, { Component } from "react";
//import logo from './logo.svg';
//import Counters from "./Components/counters";
import Passengers from "../../Components/Passengers";
import NavBar from "../../Components/navbar/navbar";
import Seatmap from "../../Components/SeatMap";
import { library } from '@fortawesome/fontawesome-svg-core'
import { faSearch } from '@fortawesome/free-solid-svg-icons'
import Popup from "react-popup";
import BootstrapTable from "react-bootstrap-table-next";
import "react-bootstrap-table-next/dist/react-bootstrap-table2.min.css";
//import Seatmap from "react-seatmap";
//import "./App.css";

library.add(faSearch);
class App extends Component {
  state = {
    passengers: [
      {
        id: 1,
        //priorityList: 1,
        thruStatus: "THRU",
        bpIssued: false,
        priorityCode: "OS",
        nameLast: "SKYWALKER",
        nameFirst: "LUKE",
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
        //priorityList: 2,
        thruStatus: "???",
        bpIssued: true,
        priorityCode: "OS",
        nameLast: "ORGANA",
        nameFirst: "LEAH",
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
        //priorityList: 3,
        thruStatus: "???",
        bpIssued: true,
        priorityCode: "OS",
        nameLast: "SOLO",
        nameFirst: "HAN",
        groupCode: "AB4",
        cabinBooked: "F",
        cabinDesired: "Y",
        destination: "TUS",
        seatOrTransferFlight: NaN,
        bags: "NB",
        remarks: NaN
      },
      {
        id: 4,
        //priorityList: 4,
        thruStatus: "???",
        bpIssued: false,
        priorityCode: "VOL",
        nameLast: "VADER",
        nameFirst: "DARTH",
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
        //priorityList: 5,
        thruStatus: "???",
        bpIssued: false,
        priorityCode: "VOL",
        nameLast: "KENOBI",
        nameFirst: "OBIWAN",
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
        //priorityList: 6,
        thruStatus: "???",
        bpIssued: false,
        priorityCode: "VOL",
        nameLast: "WINDU",
        nameFirst: "MACE",
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
        //priorityList: 7,
        thruStatus: "???",
        bpIssued: false,
        priorityCode: "VOL",
        nameLast: "REN",
        nameFirst: "KYLO",
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
        //priorityList: 8,
        thruStatus: "???",
        bpIssued: false,
        priorityCode: "D1",
        nameLast: "DAMERON",
        nameFirst: "POE",
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
        //priorityList: 9,
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
      },
      {
        id: 10,
        //priorityList: 10,
        thruStatus: "???",
        bpIssued: false,
        priorityCode: "D2",
        nameLast: "FETT",
        nameFirst: "BOBA",
        groupCode: "AB5",
        cabinBooked: "Y",
        cabinDesired: "Y",
        destination: "TUS",
        seatOrTransferFlight: NaN,
        bags: "NB",
        remarks: NaN
      },
      {
        id: 11,
        //priorityList: 11,
        thruStatus: "???",
        bpIssued: false,
        priorityCode: "D2",
        nameLast: "FETT",
        nameFirst: "JANGO",
        groupCode: "AB5",
        cabinBooked: "Y",
        cabinDesired: "Y",
        destination: "TUS",
        seatOrTransferFlight: NaN,
        bags: "NB",
        remarks: NaN
      },
      {
        id: 12,
        //priorityList: 12,
        thruStatus: "???",
        bpIssued: false,
        priorityCode: "D2",
        nameLast: "KANATA",
        nameFirst: "MAZ",
        groupCode: "AB5",
        cabinBooked: "Y",
        cabinDesired: "Y",
        destination: "TUS",
        seatOrTransferFlight: NaN,
        bags: "NB",
        remarks: NaN
      },
      {
        id: 13,
        //priorityList: 13,
        thruStatus: "???",
        bpIssued: false,
        priorityCode: "D2",
        nameLast: "TICO",
        nameFirst: "ROSE",
        groupCode: "AB5",
        cabinBooked: "Y",
        cabinDesired: "Y",
        destination: "TUS",
        seatOrTransferFlight: NaN,
        bags: "NB",
        remarks: NaN
      },
      {
        id: 14,
       // priorityList: 14,
        thruStatus: "???",
        bpIssued: false,
        priorityCode: "D2",
        nameLast: "ERSO",
        nameFirst: "JYN",
        groupCode: "AB5",
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
        <main className="container-fluid" >
        <div class="container-fluid p-2" >
        <div class="row">
        <div  class="col-md-8">
        <Passengers passengers={this.state.passengers} /></div>
        <div  class="col-md-4">  <Seatmap /></div>
        </div>         
          </div>
        </main>
        <Popup
    className="mm-popup"
    btnClass="mm-popup__btn"
    closeBtn={true}
    closeHtml={null}
    defaultOk="Ok"
    defaultCancel="Cancel"
    wildClasses={false}
    escToClose={true}  
    
    > <div>Popup content here !!</div></Popup>
      </React.Fragment>
    );
  }
}

export default App;

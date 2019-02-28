import React, { Component } from "react";
import { Dropdown } from "react-bootstrap";
//import logo from './logo.svg';
//import Counters from "./Components/counters";
import Passengers from "../../Components/Passengers";
import NavBar from "../../Components/navbar/navbar";
import Seatmap from "../../Components/SeatMap";
import { library } from "@fortawesome/fontawesome-svg-core";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import Popup from "react-popup";
import BootstrapTable from "react-bootstrap-table-next";
import SampleData from "./data";
import "./App.css";

import "react-bootstrap-table-next/dist/react-bootstrap-table2.min.css";

library.add(faSearch);

class App extends Component {
  state = {
    columns: SampleData.columns,
    passengers: SampleData.passengers,
    showOperationsBar: false,
    updatedPassengers: []
  };

  constructor() {
    super();
    this.state.passengers = SampleData.passengers;
    this.onClick = this.onClick.bind(this);
    this.onMouseHover = this.onMouseHover.bind(this);
    console.log("App - Constructor", this.state.passengers);
  }

  handleDelete = counterId => {
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

  onClick = (e, row, rowIndex) => {
    console.log(`clicked on row with index: ${rowIndex}`);
    const id = rowIndex + 1;
    const selectedPax = this.findArrayElementByTitle(this.state.passengers, id);
    const Passengers = this.state.updatedPassengers;
    if (!Passengers.find(passenger => passenger.id === id)) {
      Passengers.push(selectedPax);
      this.setState({ updatedPassengers: Passengers });
    } else {
      var index = Passengers.findIndex(passenger => passenger.id === id);

      Passengers.splice(index, 1);
      this.setState({
        updatedPassengers: Passengers
      });
    }
    console.log("updatedPassengers: ", this.state.updatedPassengers);
    if (this.state.updatedPassengers.length > 0) {
      this.setState({ showOperationsBar: true });
    } else {
      this.setState({ showOperationsBar: false });
    }
  };

  onMouseHover = (e, row, rowIndex) => {
    console.log(`enter on row with index: ${rowIndex}`);
  };

  findArrayElementByTitle = (paxArray, index) => {
    return paxArray.find(passenger => {
      return passenger.id === index;
    });
  };

  // hideOrShowOpsBar = () => {
  //   this.setState({
  //     hideOperationsBar: true
  //   });
  // };

  render() {
    const rowStyle = { fontSize: 12 };
    const selectRow = {
      mode: "checkbox",
      clickToSelect: true,
      style: { backgroundColor: "#c8e6c9" }
    };
    const hoverStyle = {
      style: { backgroundColor: "#e8e8e8" }
    };

    return (
      <React.Fragment>
        <NavBar totalCounters={this.state.passengers.length} />
        <main className="container-fluid p-2">
          <div className="row">
            <div className="col-md-8">
              <div className="row" style={{ height: 47 }}>
                <Dropdown style={{ position: "absolute", right: 5 }}>
                  <Dropdown.Toggle id="dropdown-custom-1">
                    Filter
                  </Dropdown.Toggle>
                  <Dropdown.Menu className="super-colors">
                    <Dropdown.Item eventKey="1">OS</Dropdown.Item>
                    <Dropdown.Item eventKey="2">VOL</Dropdown.Item>
                    <Dropdown.Item eventKey="3">NONREVENUE</Dropdown.Item>
                  </Dropdown.Menu>
                </Dropdown>
                {this.state.showOperationsBar && (
                  <div style={{ paddingLeft: 5 }}>
                    <button className="btn btn-primary btn-sm m-2 AppButtonStyling">
                      Auto Assign
                    </button>
                    <button className="btn btn-primary btn-sm m-2 AppButtonStyling">
                      Transfer
                    </button>
                    <button className="btn btn-primary btn-sm m-2 AppButtonStyling">
                      Unassign
                    </button>
                    <button className="btn btn-primary btn-sm m-2 AppButtonStyling">
                      CXL PAX
                    </button>
                    <button className="btn btn-primary btn-sm m-2 AppButtonStyling">
                      OS/VOL
                    </button>
                    <button className="btn btn-primary btn-sm m-2 AppButtonStyling">
                      VOL/OS
                    </button>
                  </div>
                )}
              </div>
              <BootstrapTable
                keyField="id"
                data={this.state.passengers}
                columns={this.state.columns}
                bordered={false}
                selectRow={selectRow}
                rowStyle={rowStyle}
                headerStyle={rowStyle}
                rowEvents={{
                  onClick: this.onClick
                }}
                hover={hoverStyle}
              />
            </div>
            <div className="col-md-4">
              <Seatmap />
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
        />
      </React.Fragment>
    );
  }
}

export default App;

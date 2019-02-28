import React, { Component } from "react";
//import logo from './logo.svg';
//import Counters from "./Components/counters";
import Passengers from "../../Components/Passengers";
import NavBar from "../../Components/navbar";
import Seatmap from "../../Components/SeatMap";
import BootstrapTable from "react-bootstrap-table-next";
import Popup from "react-popup";
import SampleData from "./data";

import "react-bootstrap-table-next/dist/react-bootstrap-table2.min.css";
//import Seatmap from "react-seatmap";
//import "./App.css";

class App extends Component {
  state = {
    columns: SampleData.columns,
    passengers: SampleData.passengers,
    hideOperationsBar: true,
    updatedPassengers: []
  };

  constructor() {
    super();
    this.state.passengers = SampleData.passengers;
    this.onClick = this.onClick.bind(this);
    this.onMouseHover = this.onMouseHover.bind(this);
    console.log("App - Constructor", this.state.passengers);
  }

  // componentDidMount() {
  //   //Make ajax calls to get data from the server
  //   //this.setState({movies});
  //   //console.log("App - Mounted");
  // }

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

  // handlePush(item) {
  //   this.handleCheck(item) == false
  //     ? this.setState({
  //         data: update(this.state.data, {
  //           $push: [item]
  //         })
  //       })
  //     : console.log("exists");
  // }

  // handleCheck(val) {
  //   return this.state.data.some(item => val.name === item.name);
  // }

  onClick = (e, row, rowIndex) => {
    console.log(`clicked on row with index: ${rowIndex}`);
    //const currentPassengers = this.state.currentPassengers;
    const id = rowIndex + 1;
    const selectedPax = this.findArrayElementByTitle(this.state.passengers, id);
    const Passengers = this.state.updatedPassengers;
    //console.log(selectedPax);
    //console.log(this.state.passengers);

    //var joined = Passengers.concat(selectedPax);
    // !Passengers.filter(passenger => passenger.id === id).length > 0
    //   ? this.setState({ updatedPassengers: joined })
    //   : console.log("exists");

    if (!Passengers.find(passenger => passenger.id === id)) {
      Passengers.push(selectedPax);
      console.log("added");
      this.setState({ updatedPassengers: Passengers });
      console.log("state.updatedPassengers", this.state.updatedPassengers);
    } else {
      // var removed = Passengers.splice(
      //   Passengers.indexOf(passenger => passenger.id === id),
      //   1
      // );
      console.log("removed");
      this.setState({
        updatedPassengers: Passengers.splice(
          Passengers.indexOf(passenger => passenger.id === id),
          1
        )
      });
    }
    console.log("updatedPassengers: ", this.state.updatedPassengers);
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
    const rowStyle = { fontSize: 10 };
    const selectRow = {
      mode: "checkbox",
      clickToSelect: true,
      style: { backgroundColor: "#c8e6c9" }
    };

    // const rowEvents = {
    //   onClick: (e, row, rowIndex) => {
    //     console.log(`clicked on row with index: ${rowIndex}`);
    //   },
    // onMouseEnter: (e, row, rowIndex) => {
    //   console.log(`enter on row with index: ${rowIndex}`);
    // }
    // };

    return (
      <React.Fragment>
        <NavBar totalCounters={this.state.passengers.length} />
        <main className="container-fluid p-2">
          <div className="row">
            <div className="col-md-8">
              {this.state.hideOperationsBar && (
                <div>
                  <button>Testing1</button>
                  <button>Testing2</button>
                  <button>Testing3</button>
                </div>
              )}
              <BootstrapTable
                keyField="id"
                data={this.state.passengers}
                columns={this.state.columns}
                bordered={false}
                selectRow={selectRow}
                rowStyle={rowStyle}
                headerStyle={rowStyle}
                rowEvents={{
                  onClick: this.onClick,
                  onMouseEnter: this.onMouseHover
                }}
                hover
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

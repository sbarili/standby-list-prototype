import React, { Component } from "react";

class Counter extends Component {
  // componentDidUpdate(prevProps, prevState) {
  //   console.log("prev props: ", prevProps);
  //   console.log("prev state: ", prevState);
  //   // if (prevProps.counter.value !== this.props.counter.value){
  //   //   // ajax call to get new data from server
  //   // }
  // }

  render() {
    //console.log("Counter - Rendered");
    console.log("props", this.props); // props == plain javascript object that contains all of the attributes in the counter component
    return (
      <div>
        {/* className are bootstrap classes to style elements */}
        {/* Using classes is normal convention, style can be used in special situations */}
        {/* {this.props.children} */}
        <span className={this.getBadgeClasses()}>{this.formatCount()}</span>

        {/* Inline function to add an argument to the event handler */}
        <button
          // onClick={this.handleIncrement}
          onClick={() => this.props.onIncrement(this.props.counter)} //event handler increments the value of counter
          className="btn btn-secondary btn-sm"
        >
          Increment
        </button>
        <button
          onClick={() => this.props.onDelete(this.props.counter.id)}
          className="btn btn-danger btn-sm m-2"
        >
          Delete
        </button>

        {/* {this.state.tags.length === 0 && "Please create a new tag"} */}
        {/* {this.renderTags()} */}
      </div>
    );
  }

  //methods to perform calculations on classes
  getBadgeClasses() {
    let classes = "badge m-2 badge-";
    // classes += this.state.value === 0 ? "warning" : "primary";
    classes += this.props.counter.value === 0 ? "warning" : "primary";
    return classes;
  }

  formatCount() {
    // const { value: count } = this.state;
    const { value: count } = this.props.counter;
    return count === 0 ? "Zero" : count;
  }
}

export default Counter;

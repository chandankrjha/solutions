import React from "react";
// import {connect} from "react-redux";
// import Nav from "../../main/sections/nav";

class Solution extends React.Component {

  handleSubmit(e) {

    e.preventDefault();
    let solution = this.refs["solution"].value;

    let info = {
      solution
    }
    
    console.log(info);
    //this.props.submitProblem(info)
  }

  render() {
    return (
      <div>
        <div className="sol-wr">
          <h4>Submit a solution</h4>
          <form className="sol-form">

            <div className="sol-row">
              <textarea ref="solution" placeholder="Solution"></textarea>
            </div>

            <span>
              <button onClick={(e) => this.handleSubmit(e)} >
                Submit
              </button>
            </span>

          </form>
        </div>
      </div>
    );
  }
}

export default Solution;

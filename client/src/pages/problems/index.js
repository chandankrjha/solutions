import React from "react";
import {connect} from "react-redux";
import Nav from "../../main/sections/nav";

class App extends React.Component {

  handleSubmit(e) {

    e.preventDefault();

    let name = this.refs["name"].value;
    let description = this.refs["description"].value;

    let info = {
      name,
      description
    }
    
    console.log(info);
    //this.props.submitProblem(info)
  }

  render() {
    return (
      <div>
        <div className="pr-wr">
          <h4>Add a new problem</h4>
          <form className="pr-form">

            <div class="pr-row">
              <input ref="name" type="text" placeholder="Name" />
            </div>

            <div class="pr-row">
              <textarea ref="description" placeholder="Description"></textarea>
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

export default connect(
  state => ({
    loading: state.app.loading
  })
)(App);

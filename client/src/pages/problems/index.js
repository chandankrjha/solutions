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
    this.props.submitProblem(info)
  }

  render() {
    return (
      <div>
        <div className="pr-wr">
          <form className="pr-form">

            <input ref="name" type="text" />

            <textarea ref="description"></textarea>

            <button onClick={(e) => this.handleSubmit(e)} >
              Submit
            </button>

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

import React from "react";
import {connect} from "react-redux";
import Nav from "../../main/sections/nav";

class App extends React.Component {

  handleSubmit(e) {
    let name = this.refs["name"];
    let description = this.refs["description"]

    let info = {
      name,
      description
    }

    this.props.submitProblem(info)
  }

  render() {
    return (
      <div>
        <div className="pr-wr">
          <form>
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

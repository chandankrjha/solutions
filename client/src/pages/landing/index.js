import React from "react";
import {connect} from "react-redux";
import * as lp from "../../main/constants/textConstants"

class LandingPage extends React.Component {
  render() {
    return (
      <div>
        
      </div>
    );
  }
}

export default connect(
  state => ({
    loading: state.app.loading
  })
)(LandingPage);
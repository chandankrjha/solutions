import React from "react";
import {connect} from "react-redux";
import LANDING_PAGE_CONTENT from "../../main/constants/textConstants"

class LandingPage extends React.Component {
  render() {
    return (
      <div>
        {LANDING_PAGE_CONTENT}
      </div>
    );
  }
}

export default connect(
  state => ({
    loading: state.app.loading
  })
)(LandingPage);
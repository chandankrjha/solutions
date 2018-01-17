import React from "react";
import {connect} from "react-redux";
// import LANDING_PAGE_CONTENT from "../../main/constants/textConstants"

const content = `
Solution for everyday problems.

Any problem can have many solutions.
One of the solutions can be called close to optimal solution.

The concept of solutions is to find out close to optimal solutions 
in a concise and very limited to the point solutions points.
`

class LandingPage extends React.Component {
  
  render() {
    return (
      <div>
        {content}
      </div>
    );
  }
}

export default connect(
  state => ({
    loading: state.app.loading
  })
)(LandingPage);
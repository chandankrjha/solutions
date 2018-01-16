import React from "react";
import {connect} from "react-redux";
import Nav from "./sections/nav/Nav";
import Footer from "./sections/footer/Footer";

class App extends React.Component {

  render() {
    return (
      <div>
        <Nav />
        <div className="pr-wr">
          <form>
            <input ref="name" type="text" />
            <textarea ref="description"></textarea>
          </form>
        </div>
        <Footer />
      </div>
    );
  }
}

export default connect(
  state => ({
    loading: state.app.loading
  })
)(App);

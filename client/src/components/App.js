import React from "react";
import { BrowserRouter, Route } from "react-router-dom";
import Header from "./Header";
import "materialize-css/dist/css/materialize.min.css";
import { connect } from "react-redux";
import { fetchUser } from "../actions";

const Landing = () => <div>This is Landing Page .</div>;
const Dashboard = () => <div>This is Dashboard Page .</div>;

class App extends React.Component {
  componentDidMount() {
    this.props.dispatch(fetchUser());
  }
  render() {
    return (
      <div className="container">
        <BrowserRouter>
          <div>
            <Header />
            <Route exact path={"/"} component={Landing} />
            <Route path={"/survey"} component={Dashboard} />
          </div>
        </BrowserRouter>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return { user: state };
}

export default connect(
  mapStateToProps,
  null
)(App);

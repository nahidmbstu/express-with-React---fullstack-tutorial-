import React from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";

class Header extends React.Component {
  renderUserState = () => {
    switch (this.props.auth) {
      case null:
        return "waiting";
      case false:
        return (
          <li>
            <a href="/auth/google"> Login With Google </a>
          </li>
        );
      default:
        return (
          <li>
            <a href="/api/logout"> Log Out</a>
          </li>
        );
    }
  };
  render() {
    console.log(this.props);
    return (
      <nav>
        <div className="nav-wrapper">
          <Link
            to={this.props.auth ? "/survey" : "/"}
            className="left brand-logo"
          >
            Logo
          </Link>
          <ul id="nav-mobile" className="right ">
            {this.renderUserState()}
          </ul>
        </div>
      </nav>
    );
  }
}

function mapStateToProps({ auth }) {
  return { auth };
}

export default connect(
  mapStateToProps,
  null
)(Header);

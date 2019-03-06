import React, { Component } from "react";
import { Button } from "../../styles/common/button";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./styles.css";
import { Link } from "react-router-dom";

class AppBar extends Component {
  render() {
    return (
      <nav>
        <div className="row">
          <ul className="main-nav">
            <Link to="/" style={{ textDecoration: "none" }}>
              <Button about>Home</Button>
            </Link>

            <Link to="/contact" style={{ textDecoration: "none" }}>
              <Button about>Contact</Button>
            </Link>
            <Link to="/about" style={{ textDecoration: "none" }}>
              <Button about>About</Button>
            </Link>
            <div className="push">
              <Button signup border>
                Like
              </Button>
              <Button register border>
                Share
              </Button>
              <Link
                to="/login"
                style={{ textDecoration: "none" }}
              >
                <Button signup border>
                  <FontAwesomeIcon
                    icon={["fab", "twitter"]}
                    className="social-media fa-lg"
                  />
                  <span>Login</span>
                </Button>
              </Link>
              <Link to="/register" style={{ textDecoration: "none" }}>
                <Button register border>
                  Register
                </Button>
              </Link>
            </div>
          </ul>
        </div>
      </nav>
    );
  }
}

export default AppBar;

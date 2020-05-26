import React, { Component } from "react";
import Modal from "react-responsive-modal";
import "./css/style.css";
import {
  Link
} from 'react-router-dom'

class Header extends Component {
  constructor(props) {
    super(props);

    this.state = {
      sign: false,
      login: false,
      email: "",
      password: "",
      currentUser: false,
      message: "",
    };
  }

  onOpenModal = () => {
    this.setState({ sign: true });
  };

  onOpenModalLogin = () => {
    this.setState({ login: true });
  };

  onCloseModal = () => {
    this.setState({ sign: false });
  };

  onCloseModalclose = () => {
    this.setState({ login: false });
  };

  onChange = (e) => {
    const { name, value } = e.target;

    this.setState({
      [name]: value,
    });
  };

  onSubmit = (e) => {
      this.setState({ currentUser: true})
  };

  render() {
    const { login, sign, currentUser } = this.state;

      return (
        <>
          <link
            href="https://fonts.googleapis.com/css2?family=Lobster&display=swap"
            rel="stylesheet"
          ></link>
          <header
            className="header header-animated opaque"
            style={{
              display: "block",
              paddingTop: "5px",
              paddingBottom: "5px",
              background: "rgba(243, 227, 227)",
              border: "1px solid #FFD3D3",
            }}
          >
            <div className="container">
              <nav className="navbar navbar-default" role="navigation">
                <div className="navbar-header">
                  <a className="logo" href="#">
                    <svg
                      width="46"
                      height="48"
                      viewBox="0 0 46 48"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M9.67548 23.8893L21.9622 0.624314C22.1982 0.20809 22.5991 -1.4414e-05 23 0C23.4009 1.4413e-05 23.8018 0.208119 24.0378 0.624314L36.3245 23.8893C36.6708 24.4999 36.4888 25.2945 35.9175 25.6656L23.6308 33.6474C23.4371 33.7733 23.2186 33.8362 23 33.8362C22.7815 33.8362 22.563 33.7733 22.3692 33.6474L10.0825 25.6656C9.77519 25.466 9.58048 25.1437 9.52011 24.7935C9.46827 24.4927 9.51548 24.1714 9.67548 23.8893Z"
                        fill="#3D3D3D"
                      />
                      <path
                        d="M11.4784 29.4292L22.3859 36.262C22.5755 36.3807 22.7878 36.4401 23 36.4401C23.2123 36.4401 23.4245 36.3807 23.6141 36.262L34.5216 29.4292C35.0849 29.0763 35.7011 29.7924 35.3237 30.3615L23.9903 47.4532C23.7485 47.8177 23.3743 48 23 48C22.6258 48 22.2515 47.8177 22.0097 47.4532L10.6763 30.3615C10.2989 29.7924 10.9151 29.0763 11.4784 29.4292Z"
                        fill="#3D3D3D"
                      />
                      <path
                        d="M23 37.1513L23 47.25M10.25 24.7502L23 18.6324M23 18.6324L35.75 24.7502M23 18.6324L23 0.75M23 18.6324V33M5.75 23.25L1.25 20.25M5.75 26.25L1.25 29.25M40.25 23.25L44.75 20.25M40.25 26.25L44.75 29.25"
                        stroke="white"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      />
                    </svg>
  
                    <a
                      style={{
                        color: "#3D3D3D",
                        "font-family": "'Lobster', cursive",
                        "font-size": "36px",
                        position: "absolute",
                        "margin-left": "15px",
                      }}
                    >
                      Voteforchange
                    </a>
                  </a>
                </div>
  
                <div
                  className="nav-toggle collapsed"
                  data-toggle="collapse"
                  data-target="#navbarMain"
                  aria-expanded="false"
                  style={{ top: "15px" }}
                >
                  <span></span>
                  <span></span>
                  <span></span>
                  <span></span>
                  <span></span>
                  <span></span>
                </div>
                {/* <!-- Collect the nav links, forms, and other content for toggling --> */}
                <div
                  className="navbar-collapse collapse in"
                  id="navbarMain"
                  aria-expanded="true"
                  style={{ top: "65px" }}
                >
                  <ul className="nav navbar-nav navbar-right">
                    <li>Raksani</li>
                  </ul>
                  <ul className="nav navbar-nav collapsed-color">
                  <li>
                    <Link to="/vote">Campaginlist</Link>
                    </li>
                  </ul>
                </div>
  
                {/* <!-- .navbar-collapse --> */}
              </nav>
            </div>
          </header>
          </>
      )
}
}

export default Header;
 

import React, { Component } from "react";
import Cover from "./cover";
import HomeVectors from "./homeVectors";
import MySkills from "./mySkills";
import SuperPowers from "./superPowers";
import Portfolio from "./portfolio";
import Footer from "./footer";

class Home extends Component {
  state = {};

  render() {
    return (
      <React.Fragment>
        <HomeVectors />
        <Cover />
        <MySkills />
        <SuperPowers />
        <Portfolio />
        <Footer />
      </React.Fragment>
    );
  }
}

export default Home;

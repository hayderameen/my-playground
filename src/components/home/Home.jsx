import React, { Component } from "react";
import Cover from "./cover";
import HomeVectors from "./homeVectors";
import MySkills from "./mySkills";
import SuperPowers from "./superPowers";

class Home extends Component {
  state = {};

  render() {
    return (
      <React.Fragment>
        <div>
          <HomeVectors />
          <Cover />
          <MySkills />
          <SuperPowers />
        </div>
      </React.Fragment>
    );
  }
}

export default Home;

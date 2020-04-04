import React, { Component } from "react";
import axios from "axios";
import Grid from "@material-ui/core/Grid";

import Scream from "../components/Scream";

class home extends Component {
  state = {
    screams: null,
  };
  componentDidMount() {
    axios
      .get("/screams")
      .then((res) => {
        console.log(res.data);
        this.setState({
          screams: res.data,
        });
      })
      .catch((err) => {
        console.log(err);
      });
  }
  render() {
    /*   let recentScreamsMarkup = !loading ? (
      screams.map((scream) => <Scream key={scream.screamId} scream={scream} />)
    ) : (
     
    ); */
    return (
      <div>
        <Grid container spacing={16}>
          <Grid item sm={8} xs={12}>
            {recentScreamsMarkup}
            <p>Content...</p>
          </Grid>
          <Grid item sm={4} xs={12}>
            <p>Profile...</p>
          </Grid>
        </Grid>
      </div>
    );
  }
}

export default home;

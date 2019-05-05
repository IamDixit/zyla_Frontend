import React, { Component } from "react";
import Header from "./components/Header/Header";
import Routes from "./routes";
import "./App.css";
import { Grid } from "@material-ui/core";
import apiString from './config/apiConfig';


class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      total: 0,
      today: 0,
      message: ''
    }
  }

  componentDidMount() {
    fetch(apiString + '/url/stats')
      .then(data=>data.json())
      .then(response=>{
        this.setState({
          total: response.totalService,
          today: response.today,
          message: response.message
        });
      }).catch(err=>{
        console.log(err);
      });
  }
  render() {
    return (
      <div>
        <Grid container spacing={24}>
          <Grid item xs={12}>
            <Header today={this.state.today} total={this.state.total}/>
          </Grid>
          <Grid item xs={12}>
            
          </Grid>
          <Grid item xs={12}>
            <Routes />
          </Grid>
        </Grid>
      </div>
    );
  }
}

export default App;

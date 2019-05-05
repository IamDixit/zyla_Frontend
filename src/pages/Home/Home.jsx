import React, { Component } from "react";
import "./home.css";
import apiString from "../../config/apiConfig";
import { Grid, TextField, Button } from "@material-ui/core";

export default class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      compress: "",
      extract: "",
      response: {
        message: "Waiting for user input..."
      }
    };
    this.handleChange = this.handleChange.bind(this);
    this.compress = this.compress.bind(this);
    this.extract = this.extract.bind(this);
  }

  handleChange = e => {
    this.setState({
      [e.target.name]: e.target.value
    });
  };

  compress() {
    fetch(apiString + "/url/shorten", {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        url: this.state.compress
      })
    })
      .then(data => data.json())
      .then(res => {
        this.setState({
          response: res
        })
      })
      .catch(err => {
        console.log(err);
      });
  }

  extract() {
    fetch(apiString + "/url/original", {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        url: this.state.extract
      })
    })
      .then(data => data.json())
      .then(res => {
        this.setState({
          response: res
        })
      })
      .catch(err => {
        console.log(err);
      });
  }

  render() {
    return (
      <div className="home">
        <Grid container spacing={24}>
          <Grid item md={4} xs={12} className="myForm">
            <TextField
              className="input"
              type="text"
              name="compress"
              label="Enter URL to Compress"
              margin="normal"
              variant="outlined"
              onChange={this.handleChange}
            />
            <Button
              className="button"
              id="compress"
              variant="contained"
              color="primary"
              onClick={this.compress}
            >
              Compress
            </Button>
          </Grid>
          <Grid item md={4} xs={12} className="myForm">
            <TextField
              className="input"
              type="text"
              name="extract"
              label="Extract Original URL"
              margin="normal"
              variant="outlined"
              onChange={this.handleChange}
            />
            <Button
              className="button"
              id="extract"
              variant="contained"
              color="primary"
              onClick={this.extract}
            >
              Extract
            </Button>
          </Grid>
        </Grid>
        <Grid container spacing={24}>
          <Grid item xs={12} className="myForm">
            <p>Result: </p>
            <p>{
              this.state.response ? JSON.stringify(this.state.response) : <br/> 
            }</p>
          </Grid>
        </Grid>
      </div>
    );
  }
}

import React, { Component } from 'react'
import { Button, Form, FormGroup, Label, Input, FormText } from "reactstrap";
import NYTDisplay from "./NYTDisplay";

export default class NYTResults extends Component {
  constructor(props: {}) {
    super(props);
    this.state = {
      searchTerm: "",
      startDate: "",
      endDate: "",
      results: [],
      pageNumber: 0,
    };
  }

  nytFetch = async () => {
    let base_url: string =
      "https://api.nytimes.com/svc/search/v2/articlesearch.json";
    let key: string = "";
    let url: string = `${base_url}?api-key=${key}&q=${this.state.searchTerm}&page=${this.state.pageNumber}`;

    if (this.state.startDate) {
      url = `${url}&start-date=${this.state.startDate}`;
    }
    if (this.state.endDate) {
      url = `${url}&end-date=${this.state.endDate}`;
    }

    console.log(url);

    const response = await fetch(url);
    const data = await response.json();
  };

  handleSubmit() {
  }

  handleChange(){
    
  }

  render() {
    return (
      <div>
        <Form>
          <FormGroup>
            <Label for="searchTerm">Enter a search term</Label>
            <Input
              type="text"
              id="searchTerm"
              name="searchTerm"
              value={this.state.searchTerm}
            />
          </FormGroup>
          <FormGroup>
            <Label for="startDate">Enter a search term</Label>
            <Input
              type="text"
              id="startDate"
              name="startDate"
              value={this.state.startDate}
            />
          </FormGroup>
          <FormGroup>
            <Label for="endDate">Enter a search term</Label>
            <Input
              type="text"
              id="endDate"
              name="endDate"
              value={this.state.endDate}
            />
          </FormGroup>
          <Button type="submit">Search</Button>
        </Form>
        {this.state.results.length > 0 ? (
          <NYTDisplay
            results={this.state.results}
          />
        ) : null}
      </div>
    )
  }
}

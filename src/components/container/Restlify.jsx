import React, { Component } from 'react';
import Header from '../presentation/Header';
import Input from '../presentation/Input';
import Results from '../presentation/Results';
import { apiCall } from '../services/ApiCall';

export default class Restlify extends Component{
    state = {
      url: '',
      method: '',
      body: '',
      results: { 'message':'I\'ll make an API call for you!' }
    }

    handleChange = ({ target }) => {
      this.setState({ [target.name]: target.value });
    }

    handleSubmit = e => {
      const { url, method } = this.state;

      e.preventDefault();
      this.fetch();
    }

    handleClick = e => {
      const { id } = e.target;
      let result;
      
      this.setState({
        url: result.url,
        method: result.method,
        body: result.body
      });    
    }

    fetch = () => {
      const { url, method, body } = this.state;
      return apiCall(url, method, body)
        .then(res => this.setState({ results: res }));
    }

    render(){
      const { url, method, body, results } = this.state;

      return (
        <>
          <Header />
          <div>
            <Input 
              url={url}
              method={method}
              body={body}
              onSubmit={this.handleSubmit}
              onChange={this.handleChange} />
            <Results results={results} />
          </div>
        </>

      );
    }
}

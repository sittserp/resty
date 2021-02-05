import React from 'react';
import Imput from '../presentation/Input';
import Results from '../presentation/Results';
import Header from '../presentation/Header';

export default class App extends React.Component {
  render() {
    return (
      <>
        <Header />
        <Imput />
        <Results />
      </>
    );
  }
}

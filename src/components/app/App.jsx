import React from 'react';
import Imput from '../presentation/Input';
import Results from '../presentation/Results';

export default class App extends React.Component {
  render() {
    return (
      <>
        <Imput />
        <Results />
      </>
    );
  }
}

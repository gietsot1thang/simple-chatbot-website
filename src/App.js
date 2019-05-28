import React, { Component } from 'react';
import Bot from './components/Bot';

class App extends Component {
  state =  {
    show: true,
  }

  onReset= value => {
    this.setState({ show: false });
    setTimeout(() => this.setState({ show: true }), 0);
  }

  render() {
    const { show } = this.state;
    return show ? <Bot onReset={this.onReset} /> : null;
  }
}

export default App;

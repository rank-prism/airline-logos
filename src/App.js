import React, { Component } from 'react';
import './App.css';
import Logo from './Logo';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import airlines from './Airlines';

class App extends Component {
  constructor(props) {
    super(props);
    const url = 'https://serko-oneclick.serko.com';
    this.state = {
      failures: 0,
      solUrlTemp: url,
      solUrl: url,
      tempSolUrlValid: this.isValid(url),
    };

    this.handleError = this.handleError.bind(this);
    this.handleSolUrlChange = this.handleSolUrlChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.updateSolUrl = this.updateSolUrl.bind(this);
  }

  handleError = () => {
    this.setState((prev, props) => ({ failures: prev.failures + 1 }));
  };

  handleSolUrlChange = event => {
    const value = event.target.value;
    const isValid = this.isValid(value);
    this.setState((prev, props) => ({ solUrlTemp: value, tempSolUrlValid: isValid }));
  };

  isValid = url => {
    const regex = /https?:\/\/(www\.)?[-a-zA-Z0-9@:%._+~#=]{2,256}\.[a-z]{2,6}\b([-a-zA-Z0-9@:%_+.~#?&//=]*)/;
    return regex.test(url);
  };

  updateSolUrl = () => {
    if (this.state.tempSolUrlValid) {
      this.setState((prev, props) => ({ solUrl: prev.solUrlTemp }));
    }
  };

  handleSubmit = event => {
    event.preventDefault();
  };

  render() {
    return (
      <div className="App">
        <h1>Airline Logos</h1>
        {this.state.failures > 0 && (
          <div style={{ color: 'red' }}>failures: {this.state.failures}</div>
        )}
        <div>Total logos: {airlines.length}</div>
        <div>
          <form onSubmit={this.handleSubmit}>
            <span style={this.state.tempSolUrlValid ? {} : { color: 'red' }}>
              Serko Online Url:{' '}
            </span>
            <input
              type="text"
              size="50"
              onChange={this.handleSolUrlChange}
              onBlur={this.updateSolUrl}
              value={this.state.solUrlTemp}
            />
            {this.state.tempSolUrlValid}
          </form>
        </div>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>Airline</TableCell>
              {this.state.solUrl && <TableCell>Classic</TableCell>}
              <TableCell>1x</TableCell>
              <TableCell>2x</TableCell>
              <TableCell>4x</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {airlines.map((airline, n) => (
              <Logo
                code={airline[0]}
                key={n}
                name={airline[1]}
                onError={this.handleError}
                solUrl={this.state.solUrl}
              />
            ))}
          </TableBody>
        </Table>
      </div>
    );
  }
}

export default App;

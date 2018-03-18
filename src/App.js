import React, { Component } from 'react';
import './App.css';
import Logo from './Logo';
import Table, { TableBody, TableCell, TableHead, TableRow } from 'material-ui/Table';

class App extends Component {
  render() {
    const codes = [ '3K', '6E', '8M', '9W', 'A3', 'AA', 'AC', 'AF', 'AI', 'AO', 'AR', 'AS', 'AY', 'AZ', 'BA', 'BD', 'BG', 'BI', 'BL', 'BR', 'CA', 'CC', 'CG', 'CI', 'CO', 'CQ', 'CX', 'CZ', 'DJ', 'DL', 'DN', 'DR', 'EI', 'EK', 'ET', 'EY', 'FJ', 'FM', 'FQ', 'FZ', 'GA', 'GE', 'GF', 'GK', 'H1', 'HA', 'HX', 'IB', 'IC', 'IE', 'IT', 'JG', 'JL', 'JQ', 'KA', 'KE', 'KL', 'KQ', 'KU', 'LA', 'LH', 'LX', 'MD', 'ME', 'MF', 'MH', 'MI', 'MS', 'MU', 'NC', 'NF', 'NH', 'NP', 'NW', 'NZ', 'O7', 'OA', 'OD', 'OS', 'OT', 'OZ', 'PG', 'PR', 'PX', 'Q6', 'QF', 'QO', 'QQ', 'QR', 'RJ', 'S2', 'SA', 'SB', 'SG', 'SK', 'SN', 'SQ', 'SU', 'SV', 'TG', 'TK', 'TL', 'TN', 'TR', 'TZ', 'U2', 'UA', 'UK', 'UL', 'UO', 'UQ', 'US', 'VA', 'VC', 'VF', 'VN', 'VS', 'VX', 'WN', 'WY', 'XR', 'XY', 'ZL'];
    return (
      <div className="App">
        <h1>
          Airline Logos
        </h1>
        <Table>
        <TableHead>
          <TableRow>
            <TableCell>Code</TableCell>
            <TableCell>1x</TableCell>
            <TableCell>2x</TableCell>
            <TableCell>4x</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
        {codes.map((code, n) => <Logo code={code} key={n} />)}
        </TableBody>
        </Table>
      </div>
    );
  }
}

export default App;

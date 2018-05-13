import React, { Component } from 'react';
import './App.css';
import Logo from './Logo';
import Table, { TableBody, TableCell, TableHead, TableRow } from 'material-ui/Table';

class App extends Component {
  constructor(props) {
    super(props);
    const url = 'https://serko-oneclick.serko.com';
    this.state = {
      failures: 0,
      solUrlTemp: url,
      solUrl: url,
      tempSolUrlValid: this.isValid(url)
    };

    this.handleError = this.handleError.bind(this);
    this.handleSolUrlChange = this.handleSolUrlChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  
  handleError = () => {
    this.setState((prev, props) => ({failures: prev.failures+1}))
  }

  handleSolUrlChange = (event) => {
    const value = event.target.value;
    console.warn(value);
    this.setState((prev, props) => ({solUrlTemp: value}))
  }

  isValid = (url) => {
    const regex = /https?:\/\/(www\.)?[-a-zA-Z0-9@:%._\+~#=]{2,256}\.[a-z]{2,6}\b([-a-zA-Z0-9@:%_\+.~#?&//=]*)/;
    return regex.test(url);
  }

  handleSubmit = (event) => {
    const isValid = this.isValid(this.state.solUrlTemp);
    const url = isValid ? this.state.solUrlTemp : this.state.solUrl;
    console.warn(url, this.state.solUrlTemp, isValid);
    this.setState((prev, props) => ({solUrl: url, tempSolUrlValid: isValid, solUrlTemp: prev.solUrlTemp}));
    event.preventDefault();
  }

  render() {
    const airlines = [];
    airlines.push(['3K', 'Jetstar Asia Airways']);
    // airlines.push(['4U', 'Germanwings']);
    airlines.push(['6E', 'IndiGo Air']);
    airlines.push(['8M', 'Myanmar Airways Intl']);
    // airlines.push(['8Z', 'Wizz Air Bulgaria']);
    airlines.push(['9F', 'Eurostar']);
    airlines.push(['9W', 'Jet Airways India']);
    airlines.push(['A3', 'Aegean Air']);
    airlines.push(['A5', 'HOP']);
    airlines.push(['AA', 'American Airlines']);
    // airlines.push(['AB', 'Air Berlin']);
    airlines.push(['AC', 'Air Canada']);
    airlines.push(['AF', 'Air France']);
    airlines.push(['AI', 'Air India']);
    airlines.push(['AR', 'Aerolineas Argentinas']);
    airlines.push(['AS', 'Alaska Airlines']);
    airlines.push(['AT', 'Royal Air Maroc']);
    airlines.push(['AY', 'Finnair']);
    airlines.push(['AZ', 'Alitalia']);
    airlines.push(['BA', 'British Airways']);
    airlines.push(['BD', 'Bmi British Midland']);
    airlines.push(['BE', 'Flybe']);
    airlines.push(['BF', 'French Bee']);
    airlines.push(['BG', 'Biman Bangladesh']);
    airlines.push(['BI', 'Royal Brunei Air']);
    airlines.push(['BL', 'Jetstar Pacific']);
    airlines.push(['BM', 'British Midland']);
    airlines.push(['BR', 'Eva Airways Corporation']);
    airlines.push(['BY', 'TUI']);
    airlines.push(['CA', 'Air China']);
    airlines.push(['CG', 'PNG Air']);
    airlines.push(['CI', 'China Airlines']);
    airlines.push(['CO', 'Continental Airlines']);
    airlines.push(['CX', 'Cathay Pacific Airways']);
    airlines.push(['CZ', 'China Southern Airlines']);
    airlines.push(['D8', 'Norwegian']);
    airlines.push(['DD', 'Nok Air']);
    airlines.push(['DE', 'Condor']);
    airlines.push(['DF', 'Condor Berlin']);
    airlines.push(['DL', 'Delta Air Lines']);
    // airlines.push(['DN', 'Senegal Airlines']);
    // airlines.push(['DR', 'Air Link Pty Ltd']);
    airlines.push(['DX', 'Danish Air']);
    airlines.push(['DY', 'Norwegian Air Shuttle']);
    airlines.push(['EI', 'Aer Lingus P.L.C.']);
    airlines.push(['EK', 'Emirates Airlines']);
    airlines.push(['ET', 'Ethiopian Air Lines']);
    airlines.push(['EY', 'Etihad Airways']);
    airlines.push(['EW', 'Eurowings']);
    airlines.push(['F9', 'Frontier Airlines']);
    airlines.push(['FB', 'Bulgaria Air']);
    airlines.push(['FI', 'Icelandair']);
    airlines.push(['FJ', 'Fiji Airways']);
    airlines.push(['FM', 'Shanghai Airlines']);
    // airlines.push(['FQ', 'Brindabella Airlines']);
    airlines.push(['FR', 'Ryanair (Ireland)']);
    airlines.push(['FT', 'FlyEgypt']);
    airlines.push(['FZ', 'Fly Dubai']);
    airlines.push(['GA', 'Garuda Indonesian']);
    // airlines.push(['GE', 'Transasia Airways']);
    airlines.push(['GF', 'Gulf Air Company']);
    airlines.push(['GK', 'Jetstar Japan']);
    airlines.push(['H1', 'Hahn Air Systems']);
    airlines.push(['HA', 'Hawaiian Airlines']);
    // airlines.push(['HQ', 'Thomas Cook BE']);
    airlines.push(['HV', 'Transavia']);
    airlines.push(['HX', 'Hong Kong Airlines']);
    airlines.push(['IB', 'Iberia']);
    // airlines.push(['IC', 'Indian Airlines']);
    airlines.push(['IE', 'Solomon Airlines']);
    // airlines.push(['IT', 'Kingfisher Airlines']);
    airlines.push(['JG', 'JetGo Australia']);
    airlines.push(['JL', 'Japan Airlines International']);
    airlines.push(['JQ', 'Jetstar Airways']);
    airlines.push(['KA', 'Cathay Dragon Airlines']);
    airlines.push(['KE', 'Korean Air']);
    airlines.push(['KL', 'Klm Royal Dutch Airlines']);
    airlines.push(['KM', 'Air Malta']);
    airlines.push(['KQ', 'Kenya Airways']);
    airlines.push(['KU', 'Kuwait Airways']);
    airlines.push(['LA', 'LATAM Airlines']);
    airlines.push(['LG', 'Luxair']);
    airlines.push(['LH', 'Lufthansa']);
    airlines.push(['LM', 'Loganair']);
    airlines.push(['LN', 'Libyan Airlines']);
    airlines.push(['LO', 'LOT Polish']);
    airlines.push(['LS', 'Jet2.Com']);
    airlines.push(['LX', 'Swiss']);
    airlines.push(['MD', 'Air Madagascar']);
    airlines.push(['ME', 'Middle East Airlines']);
    airlines.push(['MF', 'Xiamen Airlines']);
    airlines.push(['MH', 'Malaysia Airline']);
    airlines.push(['MI', 'Silkair']);
    airlines.push(['MS', 'Egyptair']);
    airlines.push(['MT', 'Thomas Cook Air']);
    airlines.push(['MU', 'China Eastern Airlines']);
    airlines.push(['NF', 'Air Vanuatu Limited']);
    airlines.push(['NH', 'All Nippon Airways']);
    airlines.push(['NK', 'Spirit Airlines']);
    airlines.push(['NP', 'NILE AIR']);
    // airlines.push(['NW', 'Northwest Airlines Inc']);
    airlines.push(['NZ', 'Air New Zealand']);
    airlines.push(['NY', 'Air Iceland']);
    // airlines.push(['O7', 'Ozjet Airlines']);
    airlines.push(['OA', 'Olympic Air']);
    airlines.push(['OD', 'MALINDO AIRWAYS']);
    airlines.push(['OK', 'Czech Airlines']);
    airlines.push(['OS', 'Austrian Airlines']);
    airlines.push(['OT', 'Aeropelican']);
    airlines.push(['OU', 'Croatia Airlines']);
    airlines.push(['OZ', 'Asiana Airlines']);
    airlines.push(['PG', 'Bangkok Airways']);
    airlines.push(['PR', 'Philippine Airlines']);
    airlines.push(['PX', 'Air Niugini']);
    airlines.push(['Q6', 'Skytrans Airlines']);
    airlines.push(['QF', 'Qantas Airways']);
    // airlines.push(['QO', 'Origin Pacific Airways']);
    airlines.push(['QQ', 'Alliance Airlines']);
    airlines.push(['QR', 'Qatar Airways']);
    airlines.push(['RJ', 'Royal Jordanian']);
    airlines.push(['RO', 'Tarom-Romanian']);
    airlines.push(['S2', 'Jet Lite']);
    airlines.push(['SA', 'South African Airways']);
    airlines.push(['SB', 'Air Calin']);
    airlines.push(['SG', 'Spice Jet']);
    airlines.push(['SK', 'Sas Scandinavian Airlines']);
    airlines.push(['SN', 'Brussels Airlines']);
    airlines.push(['SQ', 'Singapore Airlines']);
    airlines.push(['SU', 'Aeroflot Russian Airlines']);
    airlines.push(['SV', 'Saudi Arabian Airlines']);
    airlines.push(['T3', 'Easter Airways']);
    airlines.push(['TG', 'Thai Airways']);
    airlines.push(['TK', 'Turkish Airlines']);
    airlines.push(['TL', 'Air North Regional']);
    airlines.push(['TN', 'Air Tahiti Nui']);
    airlines.push(['TP', 'Air Portugal']);
    airlines.push(['TR', 'Scoot Pty Ltd']);
    airlines.push(['U2', 'Easy Jet']);
    airlines.push(['UA', 'United Airlines Inc']);
    airlines.push(['UK', 'VISTARA']);
    airlines.push(['UL', 'Srilankan Airlines']);
    airlines.push(['UO', 'Hong Kong Express Airways']);
    // airlines.push(['US', 'Us Airways']);
    airlines.push(['UX', 'Air Europa']);
    airlines.push(['VA', 'Virgin Australia']);
    // airlines.push(['VC', 'Strategic Airlines']);
    // airlines.push(['VF', 'Valuair Ltd']);
    airlines.push(['VG', 'VLM Airlines']);
    airlines.push(['VN', 'Vietnam Airlines']);
    airlines.push(['VS', 'Virgin Atlantic Airways Ltd.']);
    airlines.push(['VX', 'Virgin America']);
    airlines.push(['VY', 'Vueling Airlines']);
    airlines.push(['W6', 'Wizz Air Hungary']);
    airlines.push(['WF', 'Wideroes Flyvese']);
    airlines.push(['WN', 'Southwest Airlines']);
    airlines.push(['WW', 'Wow Air']);
    airlines.push(['WX', 'CityJet']);
    airlines.push(['WY', 'Oman Aviation']);
    airlines.push(['XR', 'Skywest Airlines']);
    airlines.push(['XY', 'flynas']);
    airlines.push(['ZL', 'Regional Express']);
    
    return (
      <div className="App">
        <h1>
          Airline Logos
        </h1>
        {this.state.failures > 0 && <div style={{color: 'red'}}>failures: {this.state.failures}</div>}
        <div>Total logos: {airlines.length}</div>
        <div>
          <form onSubmit={this.handleSubmit}>
          <span style={this.state.tempSolUrlValid ? {} : {color: 'red'}}>Serko Online Url: </span><input type="text" size="50" onChange={this.handleSolUrlChange} value={this.state.solUrlTemp}/>
          <button value="Update" onClick={this.updateSolUrl}>Update</button>
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
        {airlines.map((airline, n) => <Logo code={airline[0]} key={n} name={airline[1]} onError={this.handleError} solUrl={this.state.solUrl}/>)}
        </TableBody>
        </Table>
      </div>
    );
  }
}

export default App;

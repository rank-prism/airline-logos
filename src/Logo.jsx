import * as React from 'react';
import TableCell from '@material-ui/core/TableCell';
import TableRow from '@material-ui/core/TableRow';
const base_url = 'https://serkowebtest.blob.core.windows.net/airline-logos';
class Logo extends React.Component {
  state = { error: false };
  handleError = e => {
    if (this.props.onError) this.props.onError(e);
    this.setState(() => ({ error: true }));
  };
  render() {
    const sol_url = this.props.solUrl;
    return (
      <TableRow style={this.state.error ? { backgroundColor: '#e86f6f' } : {}}>
        <TableCell>
          <strong>{this.props.code}</strong> : {this.props.name}
        </TableCell>
        {sol_url && (
          <TableCell>
            <img
              alt={this.props.code}
              src={`${sol_url}/SOLV2/Images/SupplierLogos/airlines/${this.props.code}.gif`}
            />
          </TableCell>
        )}
        <TableCell>
          <img
            alt={this.props.code}
            src={`${base_url}/${this.props.code}_1x.png`}
            onError={this.handleError}
          />
        </TableCell>
        <TableCell>
          <img alt={this.props.code} src={`${base_url}/${this.props.code}_2x.png`} />{' '}
        </TableCell>
        <TableCell>
          <img alt={this.props.code} src={`${base_url}/${this.props.code}_4x.png`} />{' '}
        </TableCell>
      </TableRow>
    );
  }
}

export default Logo;

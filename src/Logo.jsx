import * as React from 'react';
import { TableCell, TableRow } from 'material-ui/Table';
const base_url = 'https://serkowebtest.blob.core.windows.net/airline-logos';
class Logo extends React.Component {
    render() {
        return (
            <TableRow>
                <TableCell><strong>{this.props.code}</strong>  : {this.props.name}</TableCell>
                <TableCell><img alt={this.props.code} src={`${base_url}/${this.props.code}_1x.png`} /></TableCell>
                <TableCell><img alt={this.props.code} src={`${base_url}/${this.props.code}_2x.png`} /> </TableCell>
                <TableCell><img alt={this.props.code} src={`${base_url}/${this.props.code}_4x.png`} /> </TableCell>
            </TableRow>
            );}
}

export default Logo;
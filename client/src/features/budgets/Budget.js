import React, {Component} from 'react';
import {Grid} from 'semantic-ui-react';
import DataTable from './../dashboard/DataTable';

let test = [{name: 'andres', edad: '21'}, {name: 'carlos', edad: '24'}];

export default class Budget extends Component {
  render() {
    return (
      <Grid>
        <Grid.Column>
          <DataTable data={test}/>
        </Grid.Column>
      </Grid>
    );
  }
}

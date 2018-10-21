import React from 'react';
import {Tab} from 'semantic-ui-react';
import {Bar, Pie} from './charts';
const panes = [
  {
    menuItem: 'Total Gastos',
    render: () => (
      <Tab.Pane>
        <Pie />
      </Tab.Pane>
    ),
  },
  {
    menuItem: 'Ingresos vs Gastos',
    render: () => (
      <Tab.Pane>
        <Bar />
      </Tab.Pane>
    ),
  },
];

const ReportsTab = () => <Tab panes={panes} />;

export default ReportsTab;

import React from 'react';
import MaterialTable from 'material-table';
import data from './data';
import { generateFields, friendlyNumber } from './data-utils';
import reactDOM from 'react-dom';
import * as V from 'victory';
import { VictoryBar, VictoryChart, VictoryAxis } from 'victory';
import './App.css';

function App() {
  return (
    <div className="App">
      <div className="table">
        <MaterialTable
          columns={generateFields(data)}
          data={data}
          title="Clare's Cool Material-Table Table" 
        />
      </div>
      <div>
        <VictoryChart domainPadding={20}>
          <VictoryAxis tickValues={20, 40, 60, 80}/>
          <VictoryBar data={friendlyNumber(data)} /*x="name" y="age"*/ />
        </VictoryChart>
      </div>
    </div>
  );
}

export default App;

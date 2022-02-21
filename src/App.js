import React from 'react';
import MaterialTable from 'material-table';
import data from './data';
import { generateFields } from './data-utils';
import reactDOM from 'react-dom';
import * as V from 'victory';
import { VictoryBar } from 'victory';
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
        <VictoryBar />
      </div>
    </div>
  );
}

export default App;

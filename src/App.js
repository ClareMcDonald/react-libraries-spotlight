import React from 'react';
import MaterialTable from 'material-table';
import data from './data';
import { generateFields, yesFriendlyNumber, notFriendlyNumber, getTotalOfEachGender } from './data-utils';
import reactDOM from 'react-dom';
import * as V from 'victory';
import { VictoryBar, VictoryChart, VictoryAxis, VictoryPie } from 'victory';
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
        <VictoryChart domainPadding={10}>
          {/* <VictoryAxis tickValues={50, 100, 150}/> */}
          <VictoryBar data={getTotalOfEachGender(data)} x='gender' y='total' />
        </VictoryChart>

        <VictoryPie
          data={[
            { x: 'Friendly', y: yesFriendlyNumber(data) },
            { x: 'Not Friendly', y: notFriendlyNumber(data) }
          ]}
          colorScale={['cyan', 'orange']}
          height={300}
        />
      </div>
    </div>
  );
}

export default App;

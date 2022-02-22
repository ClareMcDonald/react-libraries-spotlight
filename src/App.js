import React from 'react';
import MaterialTable from 'material-table';
import data from './data';
import { generateFields, friendlyNumber } from './data-utils';
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
        {/* <VictoryChart domainPadding={20}> */}
        {/* <VictoryAxis tickValues={20, 40, 60, 80}/> */}
        {/* <VictoryBar data={friendlyNumber(data)} /> */}
        {/* <VictoryPie data={friendlyNumber(data)} /> */}
        {/* </VictoryChart> */}
        <VictoryPie
          data={[
            { x: 'Friendly', y: 162 },
            { x: 'Not Friendly', y: 138 }
          ]}
          colorScale={['cyan', 'orange']}
          height={300}
        />
      </div>
    </div>
  );
}

export default App;

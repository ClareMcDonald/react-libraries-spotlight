import React from 'react';
import MaterialTable from 'material-table';
import data from './data';
import { generateFields } from './data-utils';
import './App.css';

function App() {
  return (
    <div className="App">
      <MaterialTable
        // columns={[
        //   { title: 'First Name', field: 'first_name' }
        // ]}
        columns={generateFields(data)}
        data={data}
        title="Clare's Cool Material-Table Table" 
      />
    </div>
  );
}

export default App;

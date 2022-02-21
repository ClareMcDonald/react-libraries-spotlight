import React from 'react';
import MaterialTable from 'material-table';
import data from './data';
import './App.css';

function App() {
  return (
    <div className="App">
      <MaterialTable
        data={data}
      />
    </div>
  );
}

export default App;

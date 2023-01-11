import { AgGridReact } from 'ag-grid-react';
import 'ag-grid-community/dist/styles/ag-grid.css';
import 'ag-grid-community/dist/styles/ag-theme-alpine.css';

import Papa from 'papaparse'
import fs from 'fs'

const csvFile = fs.readFileSync('./mock/csv/addresses.csv', 'utf-8')
const csvData = Papa.parse(csvFile).data
console.log(csvData)

const Example = ({data}) => {
    return (
      <div
        className="ag-theme-alpine"
        style={{
          height: '400px',
          width: '600px'
        }}
      >
        <AgGridReact 
          columnDefs={[
            { headerName: "Name", field: "name" },
            { headerName: "Age", field: "age" },
          ]}
          rowData={data}
        />
      </div>
    );
  }
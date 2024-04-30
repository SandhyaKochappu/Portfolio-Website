import React from 'react';
import {AgGridReact} from 'ag-grid-react';
import '../../node_modules/ag-grid-community/styles/ag-grid.css';
import '../../node_modules/ag-grid-community/styles/ag-theme-alpine.css';


const MyGrid = () => {

     const rowData = [
    {Course:'Master of Data Analytics', University:'Queensland University of Technology', Duration:'July 2022 – June 2024', Grade:'GPA : 5.65'},
    {Course:'Master of Computer Application', University:'Mahatma Gandhi University, India', Duration:'August 2008 - November 2011', Grade:'72.56%'},
    {Course:'Bsc.Chemistry', University:'Calicut University, India', Duration:'July 2005 - April 2008', Grade:'86.3%'}
    ];

  const columnDefs =[
    {field: 'Course', sortable: true, filter: true},
    {field: 'University', sortable: true, filter: true},    
    {field: 'Duration', sortable: true, filter: true},
    {field: 'Grade', sortable: true, filter: true}
    ];

  return (
    <div className='ag-theme-alpine' style={{height: 200, width:730}}>
            <AgGridReact
                  rowData={rowData}
                  columnDefs = {columnDefs}
                  rowSelection='multiple'
                  animateRows={true}
                  />
        </div>
  )
}

export default MyGrid
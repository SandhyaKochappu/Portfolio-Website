//rafce-> to automatically populate the div
import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import Heroimageothers from "../components/Heroimageothers";
import  Card  from "../components/Card";
import Edu from "../assets/Edu.jpg";
import {AgGridReact} from 'ag-grid-react';
import '../../node_modules/ag-grid-community/styles/ag-grid.css';
import '../../node_modules/ag-grid-community/styles/ag-theme-alpine.css';


const Resume = () => {

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
    <div>                    
        <Navbar/>
        <Heroimageothers heading="Resume" text="Here's my latest resume."/>
        <Card imgSrc={Edu}
          imgAlt="Card Image"
          title="Education"
          buttonText="Learn more"
          link="cardPage"
        />

        <div className='ag-theme-alpine' style={{height: 200, width:730}}>
        <AgGridReact
                  rowData={rowData}
                  columnDefs = {columnDefs}
                  rowSelection='multiple'
                  animateRows={true}
                  />
        </div>
        <Footer />
    </div>
  )
}

export default Resume;
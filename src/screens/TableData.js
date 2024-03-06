import React,{useEffect, useState} from "react";
import { Table,Container } from "react-bootstrap";
import axios from "axios";

const TableData = ({studentId}) => {
  console.log('st:',studentId)

  const [resultData, setResultData]=useState([])

  useEffect(()=>{
    axios.get('http://localhost:3002/resultInfo')
    .then((res)=>{
       console.log("res:",res.data)
    let temp = res.data.filter((d)=>d.registerId === studentId)
    console.log('temp',temp)
    setResultData(temp)
  })
    .catch((error)=> console.log("err:",error))
  },[studentId])
  console.log("resultdata",resultData)

  const getTotalMarks = (value)=> {
    console.log('value',value)
    let sum =0;
    resultData.map((d) => {
      sum +=parseInt(d.max_marks)
    })
    console.log("sum",sum)
    return sum
  }

  return (
    <>
    <Container>
      <Table className="my-5" responsive bordered>
        <thead>
          <tr>
            <th className="text-center">SI No</th>
            <th colSpan={2}>
              Subject
              <th style={{padding:"0px 6rem"}}>Code</th>
              <th style={{padding:"0px 6rem"}}>Subject</th>
            </th>
            <th colSpan={3}>
              Examination Marks Obtained
              <th style={{padding:"0px 2rem"}}>Max</th>
              <th style={{padding:"0px 2rem"}}>Min</th>
              <th style={{padding:"0px 1rem"}}>Obtained</th>
            </th>
            <th className="text-center">Subject Result</th>
          </tr>
        </thead>

        <tbody>
          <tr>
            <td>1</td>
            <td>CSE001</td>
            <td>JAVA</td>
            <td>100</td>
            <td>35</td>
            <td>65</td>
            <td>PASS</td>
          </tr>

          <tr>
            <td>2</td>
            <td>CSE002</td>
            <td>Python</td>
            <td>100</td>
            <td>35</td>
            <td>65</td>
            <td>PASS</td>
          </tr>

          <tr>
            <td>3</td>
            <td>CSE003</td>
            <td>C</td>
            <td>100</td>
            <td>35</td>
            <td>65</td>
            <td>PASS</td>
          </tr>

          <tr>
            <td>4</td>
            <td>CSE004</td>
            <td>web</td>
            <td>100</td>
            <td>35</td>
            <td>65</td>
            <td>PASS</td>
          </tr>

        </tbody>

        <thead>
            <tr>
                <th colSpan={3}>Grand Total
                </th>
                <td>400</td>
                <td>140</td>
                <td>260</td>
                <td><b>PASS</b></td>
            </tr>
        </thead>
      </Table>
      <p><b>Total Marks Obtained [In Word]</b>: Two Hundred And Sixty Only</p>
      <p><b>Result of Semester</b>: PASS</p>
      <p><b>Percentage</b>: 65%</p>
      <p><b>Date</b>: 05 Feb 2024</p>
      </Container>
    </>
  );
};
export default TableData;

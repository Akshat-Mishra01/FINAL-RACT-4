import React,{useState} from 'react'
import './Data.css';

function Student() {
  const [data] = useState([
    {
      Name:'John',
      Age:'25',
      Course:'MERN',
      Batch:'October',
      Edit:'Edit'
    },
    {
      Name:'Biden',
      Age:'26',
      Course:'MERN',
      Batch:'November',
      Edit:'Edit'
    },
    {
      Name:'Deo',
      Age:'25',
      Course:'MERN',
      Batch:'March',
      Edit:'Edit'
    },
    {
      Name:'Barar',
      Age:'22',
      Course:'MERN',
      Batch:'July',
      Edit:'Edit'
    },
    {
      Name:'Christ',
      Age:'23',
      Course:'MERN',
      Batch:'November',
      Edit:'Edit'
    },
    {
      Name:'Elent',
      Age:'24',
      Course:'MERN',
      Batch:'October',
      Edit:'Edit'
    },
    {
      Name:'Raghav',
      Age:'19',
      Course:'MERN',
      Batch:'December',
      Edit:'Edit'
    }
  ]);
  


  return (
    <>
   <div className='details'>
   <div><h1>Student Details</h1></div>
    <div> <button className='but'>Edit student details</button></div>
   </div>
    <div className='details'>
    <table border={1}>
      <tr>
        <th>Name</th>
        <th>Age</th>
        <th>Course</th>
        <th>Batch</th>
        <th>Edit</th>
      </tr>
      {data.map((item,index)=>{
        return(
          <tr key ={index}>
            <td>{item.Name}</td>
            <td>{item.Age}</td>
            <td>{item.Course}</td>
            <td>{item.Batch}</td>
            <td>{item.Edit}</td>
            
          </tr>
        )
      })}
    </table>
    </div>
    </>
  )
}

export default Student
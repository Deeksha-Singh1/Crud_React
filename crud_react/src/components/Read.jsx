import React,{useState,useEffect} from 'react'
import axios from 'axios';

const Read = () => {

  const [data,setData]=useState([]);

  const getData =()=>{
    axios.get("https://64b03146c60b8f941af56286.mockapi.io/crudOper").then((res)=>{
      setData(res.data);
    });
  }

  useEffect(() => {
    getData();
  }, []);

  return (
    <>
    <h2>Read Users</h2>
      <table class="table table-hover">
  <thead>
    <tr>
      <th scope="col">#</th>
      <th scope="col">Name</th>
      <th scope="col">Email</th>
      <th scope="col"></th>
      <th scope="col"></th>
    </tr>
  </thead>
  {data.map((ele)=>{return(<>
    <tbody>
    <tr>
      <th scope="row">{ele.id}</th>
      <td>{ele.name}</td>
      <td>{ele.email}</td>
      <td><button className="btn-success">Edit</button></td>
      <td><button className='btn-danger'>Delete</button></td>
    </tr>
    
  </tbody>
    </>)})}
  
</table>
    </>
  )
}

export default Read
import React,{useState,useEffect} from 'react'
import axios from 'axios';
import {Link} from 'react-router-dom';

const Read = () => {

  const [data,setData]=useState([]);

  const getData =()=>{
    axios.get("https://64b03146c60b8f941af56286.mockapi.io/crudOper").then((res)=>{
      setData(res.data);
    });
  }

  const handleDelete = (id)=>{
    axios.delete(`https://64b03146c60b8f941af56286.mockapi.io/crudOper/${id}`).then(()=>{getData();});
  }

  useEffect(() => {
    getData();
  }, []);

  return (
    <>
    <h2>Read Users</h2>
    <Link to="/">
      <button className='btn btn-primary'>Create</button>
    </Link>
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
      <td><button className=" btn btn-success">Edit</button></td>
      <td><button className='btn btn-danger' onClick={()=> handleDelete(ele.id)}>Delete</button></td>
    </tr>
    
  </tbody>
    </>)})}
  
</table>
    </>
  )
}

export default Read
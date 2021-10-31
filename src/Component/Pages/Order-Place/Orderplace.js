import React from 'react';
import axios from 'axios'; 
import './Orderplace.css'
import { useForm } from "react-hook-form";
const Orderplace = () => {
    const { register, handleSubmit,reset} = useForm();
    const onSubmit = data => {
      console.log(data);
      axios.post('http://localhost:5000/offers',data)
      .then(res=>{
         if(res.data.insertedId){
             alert('added successfully')
             reset();
         }
      })
    };
    return (
        <div className="add-service">
        <h2>Add service</h2>
        <form onSubmit={handleSubmit(onSubmit)}>
            <input {...register("name", { required: true, })} placeholder="Name" />
            <textarea {...register("description")}  placeholder="Description" />
            <input type="number" {...register("price")}  placeholder="price" />
            <input {...register("img")}  placeholder="img url"/>
            <input type="submit" />
        </form>
    </div>
    );
};

export default Orderplace;
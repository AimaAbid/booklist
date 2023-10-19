import React from 'react';
import "../index.css";
import { useState } from 'react';


export default function BookCreate({createBook}) {
    

    const [title,setTitle]=useState("")

    const handleChange=(e)=>{
        setTitle(e.target.value);
        console.log(title);
     }

     const handleSubmit=(e)=>{
        e.preventDefault();
        createBook(title);
        setTitle("");

     }
     
        

  return (
    <div>
        <div className="container">
            <div className="heading">Add a Book</div>
            <div className="form">
                <form onSubmit={handleSubmit}>
                    <label htmlFor="title" style={{fontSize:"30px",marginLeft: "10px"}}>Title</label>
                   <input type="text" className="book-input" id="title" value={title} placeholder="Title" onChange={handleChange} />
                    <br /> <br />
                    <input type="submit" value="Submit" className="submit-button" />
                   
                </form>
            </div>
        </div>
    </div>
  )
}

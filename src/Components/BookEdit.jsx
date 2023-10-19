import React from 'react';
import "../index.css";
import { useState } from 'react';

export default function BookEdit({book,onSubmit}) {

  const[title,setTitle]=useState(book.title);

  const handleChange=(e)=>{
    setTitle(e.target.value);


  };

  const handleSubmit=(e)=>{
    e.preventDefault();
     onSubmit(book.id,title);
  };



  return (
    <div className="form-container">
      <form onSubmit={handleSubmit}>
        <label htmlFor="text">Add a book</label><br />
        <input type="text" className='edit-input' id='text' onChange={handleChange} value={title}/>
        <input type="submit" value="Save" />

      </form>
    </div>
  )
}

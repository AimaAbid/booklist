import React from 'react'
import { useState } from 'react';
import BookEdit from "./BookEdit";

export default function BookShow({book,onDelete,onEdit}) {

  const [edit,setEdit]=useState(false);

  const handleSubmit=(id,newTitle)=>{       
    setEdit(false);
    onEdit(id,newTitle);
  }

  const deleteBook=()=>{
    console.log(onDelete);
    onDelete(book.id);
    
  };

  const editBook=()=>{
    setEdit(!edit);
  };

  let content=<h3>{book.title}</h3>
  if(edit)
  {
    content=<BookEdit book={book} onSubmit={handleSubmit}/>
  }

  return (
    <div className='book'>
      <div className="text">
      {content}
      <button className="edit" onClick={editBook}>Edit</button>
      <button className="delete" onClick={deleteBook}>X</button>
      </div>
    </div>
  )
}

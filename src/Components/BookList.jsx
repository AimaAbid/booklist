import React from 'react'
import BookShow from './BookShow';
import "../index.css"


export default function BookList({books,onDelete,onEdit}) {
    const renderedBooks=books.map(book =>{
       return  <BookShow book={book} key={book.id} onDelete={onDelete} onEdit={onEdit}/>

    });
 
    

  return (
   <div className='book-container'>{renderedBooks}</div>
  )
}

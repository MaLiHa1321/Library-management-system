import React, { useState } from 'react';

const Novel = ({book,targetCategory}) => {

            const {name,author
                ,photo,des,quantity
                ,rating,_id,type} = book;
            const filteredBook = book.filter(books => (books.type === targetCategory));
            console.log(filteredBook)
            return (
                <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12'>
                     {filteredBook?.map((book, index) => (
                <div key={index} className="card w-78 bg-base-100 shadow-xl">
                  <figure>
                    <img className='w-[200px] h-[200px]' src={book.photo} alt={book.name} />
                  </figure>
                  <div className="card-body">
                    <h2 className="card-title text-center"> {book.name}</h2>
                    <p className='text-base'>{book.des}</p>
                    <p className='text-base'>Brand: {book.type}</p>
                    <p className='text-base'>Quantity: {book.quantity}</p>
                    <p className='text-base'>Rating: {book.rating}</p>
                    {/* <div className="card-actions justify-end">
                   
                    
                        <Link to={`/updateDetails/${phone._id}`}>
                 <button className="btn btn-primary">Update</button>
                        </Link>
                        <Link to={`/proDetails/${phone._id}`}>
                 <button className="btn btn-primary">Details</button>
                        </Link>
                    </div> */}
                  </div>
                </div>
         ))}
        
                    
                </div>
       )
};

export default Novel;
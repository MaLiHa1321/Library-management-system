import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Container from '../routes/Container';

const Novel = ({book,targetCategory}) => {

            const {name,author
                ,photo,des,quantity
                ,rating,_id,type} = book;
            const filteredBook = book?.filter(books => (books.type === targetCategory));
         
            return (
                <Container>
                    <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 m-5 gap-12'>
                         {filteredBook?.map((book, index) => (
                    <div key={index} className="card w-78 bg-base-100 shadow-2xl">
                      <figure>
                        <img className='w-[200px] h-[200px]' src={book.photo} alt={book.name} />
                      </figure>
                      <div className="card-body">
                        <h2 className="card-title text-center"> {book.name}</h2>
                        <p className='text-base'>{book.des}</p>
                        <p className='text-base'>Category: {book.type}</p>
                        <p className='text-base'>Quantity: {book.quantity}</p>
                        <p className='text-base space-x-3'>
                        <div className="rating">
                      <input type="radio" name="rating-2"
                       className="mask mask-star-2 bg-orange-400" /> {book.rating} </div>
                           </p>
                        <div className="card-actions justify-end w-full ">
                            <Link to={`/bookDetails/${book._id}`}>
                     <button className="btn btn-outline btn-warning">Details</button>
                            </Link>
                        </div>
                      </div>
                    </div>
             ))}
            
                        
                    </div>
                        
                </Container>
       )
};

export default Novel;
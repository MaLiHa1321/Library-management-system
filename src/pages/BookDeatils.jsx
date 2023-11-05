import React from 'react';
import { Link, useLoaderData } from 'react-router-dom';

const BookDeatils = () => {
    const bookData = useLoaderData()
    // console.log(Object.keys(bookData).join(','))
    const {_id,name,photo,type,des,quantity,author,rating} = bookData
    return (
        <div className='border border-black p-5'>
            <img src={photo} alt="" />
            <h2>{name}</h2>
            <p>{type}</p>
            <p>{quantity}</p>
            <p>{author}</p>
            <p>{rating}</p>
            <div>
                <Link to={`/moreDetail/${_id}`}>
                <button className='btn btn-primary'>Read more</button>
                </Link>
                <Link>
                <button className='btn btn-primary'>Borrow Book</button>
                </Link>

            </div>
        </div>
    );
};

export default BookDeatils;
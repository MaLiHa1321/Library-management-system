import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Container from '../routes/Container';

const MoreDetails = () => {
    const bookData = useLoaderData()
    // console.log(Object.keys(bookData).join(','))
    const {_id,name,photo,type,des,quantity,author,rating} = bookData
    return (
        <Container>

        <div className='border border-black p-5'>
            <img src={photo} alt="" />
            <h2>{name}</h2>
            <p>{type}</p>
            <p>{quantity}</p>
            <p>{author}</p>
            <p>{rating}</p>
         
        </div>
        </Container>
    );
};

export default MoreDetails;
import React, { useContext, useState } from 'react';
import { Link, useLoaderData } from 'react-router-dom';
import Container from '../routes/Container';
import Swal from 'sweetalert2';
import { AuthContext } from '../provider/AuthProvider';
import useAxios from '../hooks/useAxios';

const BookDeatils = () => {
    const bookData = useLoaderData()
    const {user, logout} = useContext(AuthContext)
    const email = user?.email;
    const displayName = user?.displayName;
    const {_id,name,photo,type,des,quantity,author,rating} = bookData;
    const axios = useAxios()
    // borrow book

const handleBorrow = () => {
    const order = { name, photo, type, des, quantity, author, rating, email, displayName };
 
    Swal.fire({
      title: 'Submit your return date',
      html: `
        <form id="borrow-form">
          <label for="returnDate">Return Date:</label>
          <input type="date" id="returnDate" required> </br>
          <label for="email">Email:</label>
          <input type="email" id="email" value="${email}" readonly> </br>
          <label for="name">Name:</label>
          <input type="text" id="name" value="${displayName}" readonly>
        </form>
      `,
      showCancelButton: true,
      confirmButtonText: 'Submit',
      showLoaderOnConfirm: true,
      preConfirm:  () => {
        const returnDate = document.getElementById('returnDate').value;
        const borrowInfo = { returnDate, ...order };
  
  
        try {
     axios.post('/cart', borrowInfo)
  
        .then(res => {
          if (res.data.insertedCount === 1){
            
            Swal.fire({
                title: 'Borrow Successful',
                text: 'Your request has been submitted successfully.',
                icon: 'success',
              });
          }
        })
        } catch (error) {
          
          Swal.showValidationMessage(`Request failed: ${error}`);
        }
      },
    })

  };
  
      
    return (
        <Container>

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
                <Link >
                <button onClick={handleBorrow} className='btn btn-primary'>Borrow Book</button>
                </Link>

            </div>
        </div>
        </Container>
    );
};

export default BookDeatils;
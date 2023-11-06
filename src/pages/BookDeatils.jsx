import React, { useContext, useState } from 'react';
import { Link, useLoaderData } from 'react-router-dom';
import Container from '../routes/Container';
import Swal from 'sweetalert2';
import { AuthContext } from '../provider/AuthProvider';
import useAxios from '../hooks/useAxios';
import toast, { Toaster } from 'react-hot-toast';

const BookDeatils = () => {
    const bookData = useLoaderData()
    const {user, logout} = useContext(AuthContext)
    const email = user?.email;
    const displayName = user?.displayName;
    const {_id,name,photo,type,des,quantity,author,rating} = bookData;
    const axios = useAxios()
    const [isBorrowed, setIsBorrowed] = useState(false);
    
    // borrow book

const handleBorrow = () => {
  if (isBorrowed) {
    toast.error("You have already borrowed this item.");
    return;
  }
  

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
            toast.success("successfully added to the cart")
          }
        })
        } catch (error) {
          
          Swal.showValidationMessage(`Request failed: ${error}`);
        }
      },
    })
    setIsBorrowed(true);
   
  };
  
      
    return (
        <Container>
            <Toaster
        position="top-right"
        reverseOrder={false}
      />
          <div className="hero min-h-screen bg-base-200">
  <div className="hero-content flex-col lg:flex-row gap-12">
    <img src={photo}className="w-full max-w-sm h-[400px] rounded-lg shadow-2xl" />
    <div className='w-1/2'>
      <h1 className="text-5xl font-bold">{name}</h1>
      <h1 className="text-xl m-2">category: {type}</h1>
      <h1 className="text-xl m-2">Quantity:{quantity}</h1>
      <h1 className="text-xl m-2">Author: {author}</h1>
      <p className='text-base space-x-3'>
                        <div className="rating">
                      <input type="radio" name="rating-2"
                       className="mask mask-star-2 bg-orange-400" /> {rating} </div>
      </p>
      <div>
                <Link to={`/moreDetail/${_id}`}>
                <button className='btn btn-outline btn-warning mr-2'>Read more</button>
                </Link>
                <Link >
                <button onClick={handleBorrow}  className={`btn btn-outline btn-warning ${isBorrowed ? "disabled" : ""}`}>
                Borrow Book</button>
                </Link>

            </div>
    </div>
  </div>
</div>

   
        </Container>
    );
};

export default BookDeatils;
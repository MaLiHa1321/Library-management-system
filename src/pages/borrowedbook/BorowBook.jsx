import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../../provider/AuthProvider';
import useAxios from '../../hooks/useAxios';
import Container from '../../routes/Container';
import Swal from 'sweetalert2';
import toast, { Toaster } from 'react-hot-toast';


const BorowBook = () => {
    const [borrow, setBorrow] = useState([])
    const {user} = useContext(AuthContext)
    const userEmail = user?.email;
const url = `/cart?email=${userEmail}`;
    const axios = useAxios()

    useEffect(()=>{
        axios.get(url)
        .then(res => setBorrow(res.data))
        .catch(err => console.log(err))
    },[url,axios])
    
    const {returnDate,photo,name,type,_id} = borrow
    
    // delete operation
const handleDelete = _id =>{
  console.log(_id)
  const url1 = `http://localhost:5000/cart/${_id}`

    axios.delete(url1)
    .then(res =>{
      if(res.data.deletedCount > 0){
       toast.success("delete successful")
        const remaining = borrow.filter(book => book._id !== _id)
         setBorrow(remaining)
      }
    })
    .catch(err => console.log(err))
}
   
    return (
        <Container>
         <Toaster
        position="top-right"
        reverseOrder={false}
      />

        <div className='grid grid-cols-1 md:grid-cols-1 lg:grid-cols-2 gap-8'>
            {
                borrow.map(book =>  <div key={book._id} className="card card-side bg-base-100 shadow-xl">
                <figure><img src={book.photo} className='w-full h-[200px] object-cover' alt="Movie"/></figure>
                <div className="card-body">
                  <h2 className="card-title">{book.name}</h2>
                  <p>categories: {book.type}</p>
                  <p>Return date: {book.returnDate}</p>
                  <div className="card-actions justify-end">
                    <button onClick={() => handleDelete(book._id)} className="btn btn-primary">Return</button>
                  </div>
                </div>
              </div>)
            }
          
     


            
        </div>
        </Container>
    );
};

export default BorowBook;
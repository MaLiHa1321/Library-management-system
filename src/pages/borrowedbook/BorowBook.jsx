import React, { useEffect, useState } from 'react';
import Container from '../../routes/Container';
import toast, { Toaster } from 'react-hot-toast';
import useAuth from '../../hooks/useAuth';
import useAxios from '../../hooks/useAxios';


const BorowBook = () => {
    const [borrow, setBorrow] = useState([])
    const {user} = useAuth()
    const userEmail = user?.email;
const url = `/cart?email=${userEmail}`;
    const axios = useAxios();

    useEffect(()=>{
        axios.get(url)
        .then(res => {
          
          setBorrow(res.data)

        } )
        .catch(err => console.log(err))
    },[url,axios])
    
    const {returnDate,photo,name,type,_id} = borrow
    
    // delete operation
const handleDelete = _id =>{
  console.log(_id)
  const url1 = `/cart/${_id}`

    axios.delete(url1)
    .then(res =>{
      if(res.data.deletedCount > 0){
       toast.success("Return book successful")
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

        <div className='grid grid-cols-1 md:grid-cols-1 lg:grid-cols-2 gap-8 m-5'>
            {
                borrow.map(book =>  <div key={book._id} className="card card-side bg-base-100 shadow-xl">
                <figure><img src={book.photo} className='w-full h-[200px] object-cover' alt="Movie"/></figure>
                <div className="card-body">
                  <h2 className="card-title">{book.name}</h2>
                  <p>categories: {book.type}</p>
                  <p>Return date: {book.returnDate}</p>
                  <div className="card-actions justify-end">
                    <button onClick={() => handleDelete(book._id)} className="btn  btn-warning">Return</button>
                  </div>
                </div>
              </div>)
            }
          
     


            
        </div>
        </Container>
    );
};

export default BorowBook;
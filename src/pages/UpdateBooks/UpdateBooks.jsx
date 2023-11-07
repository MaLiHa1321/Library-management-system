import React, { useState } from 'react';
import useAxios from '../../hooks/useAxios';
import toast, { Toaster } from 'react-hot-toast';
import { useLoaderData } from 'react-router-dom';
import Container from '../../routes/Container';

const UpdateBooks = () => {
    const booksData = useLoaderData()
    const axios = useAxios()
   
    
        const [type, setType] = useState(''); // State for the selected type
       
        const types = ['Novel', 'Thriller', 'Sci-fi', 'Drama']; // Array of type options
        const {_id,name,photo,des,quantity,author,rating} = booksData

        const handleTypeChange = (event) => {
            setType(event.target.value);
          };
  
    
          const url =`/book/${_id}`
     
        const handleUpdate = e => {
            e.preventDefault();
            const form = e.target;
            const name = form.name.value;
            const photo = form.photo.value;
            const quantity = form.Quantity.value;
            const author = form.AuthorName.value;
            const type = form.type.value;
            const des = form.des.value;
            const rating = form.rating.value;
            const product ={name,photo,type,des,quantity,author,rating}
            console.log(product)

            axios.put(url, product)
            .then((res) => {
              // Handle the response here (e.g., show a success toast)
              console.log(res.data);
              
              toast.success('Book updated successfully');
            })
            .catch((err) => {
              // Handle errors (e.g., show an error toast)
              console.error(err);
              toast.error('Error updateding the book');
            });
        
    
    
    
     
    }
    return (
        <Container>

        <div>
        <Toaster
 position="top-right"
 reverseOrder={false}
/>
     <h2 className='text-2xl text-center font-bold text-orange-600'>Update Book</h2>
      <div >
         <form onSubmit={handleUpdate} >
          <div className='flex flex-col md:flex-row gap-3'>

 <div className="form-control flex-1">
   <label className="label">
     <span className="label-text">name</span>
   </label>
   <input type="text" placeholder="name" name="name" defaultValue={name} className="input input-bordered" required />
 </div>
 <div className="form-control flex-1">
   <label className="label">
     <span className="label-text">Image url</span>
   </label>
   <input type="text" placeholder="image url" name="photo" defaultValue={photo} className="input input-bordered" required />
 </div>
          </div>
          <div className='flex flex-col md:flex-row gap-3'>

 <div className="form-control flex-1">
   <label className="label">
     <span className="label-text">Quantity</span>
   </label>
   <input type="number" placeholder="Quantity" name="Quantity"  min="1" max="10" defaultValue={quantity} className="input input-bordered" required />
 </div>

 <div className="form-control flex-1">
     <label className="label">
       <span className="label-text">Category</span>
     </label>
     <select
       value={type}
       onChange={handleTypeChange}
       className="input input-bordered"
       name="type"
       required
     >
       <option value="" disabled>
         Select a Category
       </option>
       {types.map((type, index) => (
         <option key={index} value={type}>
           {type}
         </option>
       ))}
     </select>
   </div>
          </div>

          <div className='flex flex-col md:flex-row gap-3'>

 <div className="form-control flex-1">
   <label className="label">
     <span className="label-text">Author Name</span>
   </label>
   <input type="text" placeholder="Author" name="AuthorName" defaultValue={author} className="input input-bordered" required />
 </div>
 <div className="form-control flex-1">
   <label className="label">
     <span className="label-text">Rating</span>
   </label>
   <input type="number" placeholder="rating" name="rating"  min="1" max="5" defaultValue={rating} className="input input-bordered" required />
 </div>
          </div>

 <div className="form-control">
   <label className="label">
     <span className="label-text">Description</span>
   </label>
   <textarea placeholder="description" type="text" name='des' defaultValue={des} className="textarea textarea-bordered textarea-lg w-full " ></textarea>
 </div>
 
 <div className="form-control m-6">
   <button className="btn  btn-warning">update Book</button>
 </div>
         </form>
      </div>
     
 </div>
        </Container>
    );
};

export default UpdateBooks;
import React, { useEffect, useState } from 'react';


import toast, { Toaster } from 'react-hot-toast';
import useAxios from '../../hooks/useAxios';
import Container from '../../routes/Container';
const AddBooks = () => {
         

    const axios = useAxios()
    const url ='/book'
    
        const [type, setType] = useState(''); // State for the selected type
       
        const types = ['Novel', 'Thriller', 'Sci-fi', 'Drama']; // Array of type options
        // const [book, setBook] = useState([])

        const handleTypeChange = (event) => {
            setType(event.target.value);
          };
  
    
     
        const handleaAdd = e => {
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

            axios
            .post(url, product)
            .then((res) => {
              // Handle the response here (e.g., show a success toast)
              console.log(res.data);
              
              toast.success('Book added successfully');
            })
            .catch((err) => {
              // Handle errors (e.g., show an error toast)
              console.error(err);
              toast.error('Error adding the book');
            });
        
    
    
    
     
    }
        return (
            <Container>

            <div>
                   <Toaster
            position="top-right"
            reverseOrder={false}
          />
                <h2>Add Book</h2>
                 <div >
                    <form onSubmit={handleaAdd} >
            <div className="form-control">
              <label className="label">
                <span className="label-text">name</span>
              </label>
              <input type="text" placeholder="name" name="name" className="input input-bordered" required />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Image url</span>
              </label>
              <input type="text" placeholder="image url" name="photo" className="input input-bordered" required />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Quantity</span>
              </label>
              <input type="text" placeholder="Quantity" name="Quantity" className="input input-bordered" required />
            </div>
           
            <div className="form-control">
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
           
            <div className="form-control">
              <label className="label">
                <span className="label-text">Author Name</span>
              </label>
              <input type="text" placeholder="Author" name="AuthorName" className="input input-bordered" required />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Description</span>
              </label>
              <textarea placeholder="description" type="text" name='des' className="textarea textarea-bordered textarea-lg w-full max-w-xs" ></textarea>
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Rating</span>
              </label>
              <input type="text" placeholder="rating" name="rating" className="input input-bordered" required />
            </div>
            <div className="form-control m-6">
              <button className="btn btn-primary">add Book</button>
            </div>
                    </form>
                 </div>
                
            </div>
            </Container>
        );
    };
    
 

export default AddBooks;
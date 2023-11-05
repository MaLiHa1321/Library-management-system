import React, { useEffect, useState } from 'react';
import useAxios from '../../hooks/useAxios';
import { Link } from 'react-router-dom';


const AllBooks = () => {
    const [allBook, setAllBooks] = useState([])
    const axios = useAxios()
    const url = '/book'

    useEffect(()=>{
       axios.get(url)
       .then(res => setAllBooks(res.data))
       .catch(err => console.log(err))
    },[url,axios])
    const {_id,name,photo,type,des,quantity,author,rating} = allBook
    return (
        <div>
            <h2>{allBook.length}</h2>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12'> 

            {
               allBook.map(books => <div key={books._id} className="card w-96 bg-base-100 shadow-xl">
               <figure><img src={books.img} alt="Shoes" /></figure>
               <div className="card-body">
                 <h2 className="card-title">{books.name}</h2>
                 <p>{books.author}</p>
                 <p>{books.type}</p>
                 <p>{books.rating}</p>
                 <div className="card-actions justify-end">
                    <Link to={`/updateDetails/${books._id}`}>
                   <button className="btn btn-primary">Update</button>
                    </Link>
                 </div>
               </div>
             </div>) 
            }
            </div>
            
        </div>
    );
};

export default AllBooks;
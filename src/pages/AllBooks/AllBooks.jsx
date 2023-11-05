import React, { useEffect, useState } from 'react';
import useAxios from '../../hooks/useAxios';
import { Link } from 'react-router-dom';
import Container from '../../routes/Container';


const types = ['Novel', 'Thriller', 'Sci-Fi', 'Drama'];
const AllBooks = () => {
    const [allBook, setAllBooks] = useState({ result: [], total: 0 })
    const [selectedType, setSelectedType] = useState(null);
    const [page,setPage] = useState(1)
    const axios = useAxios()

    const limit= 5
    
    const {_id,name,photo,type,des,quantity,author,rating} = allBook


    const url = `/book?${selectedType ? `type=${selectedType}` : ''}&page=${page}&limit=${limit}`;


    useEffect(()=>{
   
        axios.get(url)
        .then(res => setAllBooks(res.data))
        .catch(err => console.log(err))
     }, [url, axios, selectedType, page])
  

     
    const handleTypeChange = (event) => {
        setSelectedType(event.target.value);
        setPage(1);
    };

    const handlePre =() =>{
        if(page > 1){

            setPage(page - 1)
        }
    }
    
    const handleNext =() =>{
        if(page < totalPage)
        setPage(page + 1)
    }

     const totalPage = parseInt( Math.ceil(allBook?.total /limit));
    console.log(url)




    return (
        <div>
            <Container>

                {/* filter */}
                <div>
                    <label htmlFor="bookType">Select a Book Type: </label>
                    <select id="bookType" onChange={handleTypeChange} value={selectedType}>
                        <option value="">All</option>
                        {types.map((type) => (
                            <option key={type} value={type}>
                                {type}
                            </option>
                        ))}
                    </select>
                </div>

            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12'> 

            {
               (allBook.result)?.map(books => <div key={books._id} className="card w-78 bg-base-100 shadow-xl">
               <figure><img src={books.photo} alt="Shoes" className='w-full h-[200px] object-cover' /></figure>
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

            {/* pagination */}
            <div>
            <div className="join">
  <button onClick={() => {handlePre}} className="join-item btn">pre</button>

  {Array(totalPage)
    .fill(0)
    .map((data, index) => (
      <button
        key={index + 1}
        className={`${(index + 1) === page ?
             "join-item btn btn-primary"
              : "join-item btn"}`}
        onClick={() => setPage(index + 1)} // Add 1 to index to start from page 1
      >
        {index + 1}
      </button>
    ))
}

  <button onClick={()=> {handleNext}} className="join-item btn">next</button>
</div>
            </div>
            
            </Container>
        </div>
    );
};

export default AllBooks;
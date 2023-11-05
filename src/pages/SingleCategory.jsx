
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import useAxios from '../hooks/useAxios';
import Novel from '../Category/Novel';


const SingleCategory = () => {

    const [cateBook, setCateBook] = useState([])
    const [book, setBook] = useState([])
    const axios = useAxios()
    const {id} = useParams();
  
   
    const url ='/category'
    const url1 ='/book'
    useEffect(()=>{
        axios.get(url)
        .then(res => setCateBook(res.data))
        .catch(err => console.log(err))
    }, [url,axios])
    const category = cateBook?.find(cate => cate._id === (id))
    const targetCategory = category?.categories_name;

    // all book
    useEffect(() =>{
        axios.get(url1)
        .then(res => setBook(res.data))
        .catch(err => console.log(err))
    },[url1,axios])

    // console.log(book)
  
    return (
        <div>
       
          {category ? (
                <h2>{category.categories_name}</h2>
            ) : (
                <p>Category not found</p>
            )}

            
  {/*  categories type data load*/}
  <div> 
   
                {book ? 
                  <Novel book={book} targetCategory={targetCategory} />
                 : (
                    <p>Loading categories data...</p>
                )}
            </div>
 

            
        </div> 
    );
          
    
};

export default SingleCategory;
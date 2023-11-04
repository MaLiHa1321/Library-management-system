import React, { useEffect, useState } from 'react';
import useAxios from '../hooks/useAxios';
import Container from '../routes/Container';
import { Link } from 'react-router-dom';

const Categories = () => {
    const [category, setCategory] = useState([])
    const axios = useAxios()
    const url = '/category';
    useEffect( ()=>{
      
        axios.get(url)
        .then(res =>{
            setCategory(res.data)
        })
        .catch(err =>{
            console.err(err)
        })
    },[url,axios])
    console.log(category);
    const {img,categories_name,_id} = category
    return (
        <Container>
            <h2 className='text-2xl md:text-5xl font-bold text-center space-y-4 mt-12'>Our Categories</h2>
            <p className='text-base  text-center space-y-4 m-12 '>These categories help librarians and patrons easily locate and access the materials they need. <br /> Library management categories typically encompass a wide range of items, <br /> including books, periodicals, multimedia materials, digital resources, and more. Here are some key aspects of library management categories</p>
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 m-6'>
            {
                category?.map(cate => <div key={cate._id} >
 <div className="card w-78 bg-base-100 shadow-2xl">
  <figure className="px-10 pt-10">
    <img src={cate.img} alt="Shoes" className="rounded-xl w-full h-[200px]" />
  </figure>
  <div className="card-body items-center text-center">
    <h2 className="card-title">{cate.categories_name}</h2>
    
    <div className="card-actions">
        <Link to={`/singleCate/${cate._id}`}>
      <button  className="btn btn-primary">Details</button>
        </Link>
    </div>
  </div>
</div>
                </div>)
            }
       
      </div>
        </Container>
    );
};

export default Categories;
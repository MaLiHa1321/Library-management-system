import React from 'react';
import { Link, useLoaderData } from 'react-router-dom';
import Container from '../routes/Container';

const MoreDetails = () => {
    const bookData = useLoaderData()
    // console.log(Object.keys(bookData).join(','))
    const {_id,name,photo,type,des,quantity,author,rating} = bookData
    return (
        <Container>
<div className="hero min-h-screen bg-base-200">
  <div className="hero-content flex-col lg:flex-row-reverse">
    <img src={photo}  className="w-full max-w-sm h-[400px] rounded-lg shadow-2xl" />
    <div>
      <h1 className="text-2xl lg:text-5xl font-bold">{name}</h1>
      <p className="py-6">{name} book is set in the fictional town of Maycomb, Alabama, during the Great Depression. The story is narrated by Scout Finch, a young girl, and it revolves around her experiences growing up and witnessing the racial and social injustices of the American South. It has won numerous awards and is considered a classic of American literature. The novel continues to be studied in schools and cherished by readers for its deep insights into human nature and the moral complexities of society. <br /> It remains a thought-provoking and impactful work that addresses themes of justice, empathy, and the struggle for equality.{name} is celebrated for its powerful portrayal of social issues and the timeless lessons it imparts. It has won numerous awards and is considered a classic of American literature. <br /> The novel continues to be studied in schools and cherished by readers for its deep insights into human nature and the moral complexities of society. It remains a thought-provoking and impactful work that addresses themes of justice, empathy, and the struggle for equality.


</p>
<Link to='/'>
      <button className="btn btn-outline btn-warning">Go Home</button>
</Link>
    </div>
  </div>
</div>

        {/* <div className='border border-black p-5'>
            <img src={photo} alt="" />
            <h2>{name}</h2>
            <p>{type}</p>
            <p>{quantity}</p>
            <p>{author}</p>
            <p>{rating}</p>
         
        </div> */}
        </Container>
    );
};

export default MoreDetails;
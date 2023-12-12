import React, { useEffect, useState } from 'react';
import useAxios from '../../hooks/useAxios';
import Container from '../../routes/Container';

import { Swiper, SwiperSlide } from 'swiper/react';
import { FaQuoteLeft } from "react-icons/fa";

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import { Navigation } from 'swiper/modules';


import '@smastrom/react-rating/style.css'

const ReviewSection = () => {
    const [review, setReview] = useState([])
    const axios = useAxios();
    useEffect(()=>{
        axios.get('/allReviews')
        .then(res => {
            setReview(res.data)
        })
        .catch(err => console.log(err))
    },[])
    return (
        <Container>

        <div className='mt-12 my-10'>
            <h2 className='text-2xl text-blue-600 text-center mb-4'>---What our customer say---</h2>
             <h3 className='text-2xl md:text-5xl text-center uppercase mb-4'>Review</h3>
             <p className='text-base text-center mb-8'>There’s nothing quite as rewarding as knowing our solutions make a significant impact. Hear from our esteemed clients who have experienced first-hand the transformative power of our teleradiology services.</p>
            <div>
            <Swiper navigation={true} modules={[Navigation]} className="mySwiper">
       
        {
            review.map(reveiw =>  <SwiperSlide key={reveiw._id}>
                <div className='flex flex-col items-center m-16 my-16'>
                {/* <Rating
      style={{ maxWidth: 180 }}
      value={reveiw.rating}
      readOnly
    /> */}
    <img src={reveiw?.photo} alt="" className='w-[200px] h-[200px] rounded-full' />
    <p className='text-2xl text-orange-400'>{reveiw?.author}</p>
                  <p className='text-4xl m-4'><FaQuoteLeft></FaQuoteLeft></p>
                    <p className='mt-12'>{reveiw?.review
}</p>
                    <h3 className='text-2xl text-orange-400'>{reveiw?.email}</h3>
                </div>

            </SwiperSlide>)
        }
    
      </Swiper>
            </div>
            
        </div>
        </Container>
    );
};

export default ReviewSection;



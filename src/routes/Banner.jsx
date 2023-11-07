import React from 'react';
import Container from './Container';

const Banner = () => {
    return (
        <Container>
   <div className="carousel w-full h-[500px]">
  <div id="slide1" className="carousel-item relative w-full overlay bg-opacity-70">
    <img src="  https://i.ibb.co/FzGDdmT/pexels-rafael-cosquiere-2041540.jpg" className="w-full h-full object-cover" />
    <div className="absolute w-full lg:w-1/2 mx-auto text-white transform -translate-y-1/2 left-5 right-5 top-1/2">
    <div className="bg-black bg-opacity-50 text-opacity-100 p-5 rounded-lg">
      <h1 className="text-2xl lg:text-5xl font-bold mb-5">Welcome to Grand Library</h1>
      <p className="text-2xl  mb-5">Your Gateway to Knowledge and Adventure</p>
      <button className="btn btn-warning ">Explore Now</button>
    
    </div>
    </div>
    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
      <a href="#slide4" className="btn btn-circle">❮</a> 
      <a href="#slide2" className="btn btn-circle">❯</a>
    </div>
  </div> 
  <div id="slide2" className="carousel-item relative w-full">
    <img src="https://i.ibb.co/zQDBpxn/pexels-rick-han-2793466.jpg" className="w-full h-full object-cover" />
    <div className="absolute w-full lg:w-1/2 mx-auto text-white transform -translate-y-1/2 left-5 right-5 top-1/2">
    <div className="bg-black bg-opacity-50 text-opacity-100 p-5 rounded-lg">
    <h1 className="text-2xl lg:text-5xl font-bold mb-5">Discover Our Collection</h1>
      <p className="text-2xl mb-5">Explore a Vast Array of Books and Resources</p>
      <button className="btn btn-warning">Browse Books</button>
    </div>
    </div>
    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
      <a href="#slide1" className="btn btn-circle">❮</a> 
      <a href="#slide3" className="btn btn-circle">❯</a>
    </div>
  </div> 
  <div id="slide3" className="carousel-item relative w-full">
    <img src="https://i.ibb.co/nwd14y0/pexels-malte-luk-1848924.jpg" className="w-full h-full object-cover" />
    <div className="absolute w-full lg:w-1/2 mx-auto text-white transform -translate-y-1/2 left-5 right-5 top-1/2">
    <div className="bg-black bg-opacity-50 text-opacity-100 p-5 rounded-lg">
    <h1 className="text-2xl lg:text-5xl font-bold mb-5">Stay Connected</h1>
      <p className="text-2xl mb-5">Access Our Digital Library Anytime, Anywhere</p>
      <button className="btn btn-warning">Digital Library</button>
    </div>
    </div>
    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
      <a href="#slide2" className="btn btn-circle">❮</a> 
      <a href="#slide4" className="btn btn-circle">❯</a>
    </div>
  </div> 
  <div id="slide4" className="carousel-item relative w-full">
    <img src="https://i.ibb.co/ChVygR1/pexels-berk-ozdemir-3779187.jpg" className="w-full h-full object-cover" />
    <div className="absolute w-full lg:w-1/2 mx-auto text-white transform -translate-y-1/2 left-5 right-5 top-1/2">
    <div className="bg-black bg-opacity-50 text-opacity-100 p-5 rounded-lg">
    <h1 className="text-2xl lg:text-5xl font-bold mb-5">Join Our Library Community</h1>
    <p className="text-2xl mb-5">Connect with Fellow Readers and Share Your Love for Books</p>
    <button className="btn btn-warning">Join Community</button>

    </div>
    </div>
    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
      <a href="#slide3" className="btn btn-circle">❮</a> 
      <a href="#slide1" className="btn btn-circle">❯</a>
    </div>
  </div>
</div>
        </Container>
    );
};

export default Banner;
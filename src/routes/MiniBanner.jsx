import React from 'react';
import { Link } from 'react-router-dom';


const MiniBanner = () => {
    return (
        <div className="hero w-full min-h-[400px] mb-12" style={{backgroundImage: 'url(https://i.ibb.co/KwRPyQd/wout-vanacker-l4-HBYk-URqv-E-unsplash.jpg)'}}>
        <div className="hero-overlay bg-opacity-70"></div>
        <div className="hero-content text-center text-neutral-content">
          <div className="max-w-full flex flex-col lg:flex-row gap-8">
            <div className='flex-1 bg-gray-300 p-5 rounded-tr-lg rounded-bl-lg text-black'>
            <h1 className="mb-5 text-2xl lg:text-5xl font-bold ">Connect With Us</h1>
            <p className="mb-5 ">Tel: 8448010216 , 8308831026 </p>
            <p className="mb-5 ">Mail: janki.somani@iitms.co.in , presales@iitms.co.in </p>

            </div>
            <div className='flex-1'>
            <h1 className="mb-5 text-2xl lg:text-4xl font-bold text-white">Organize, Maintain, And Operate Our Library Systematically!</h1>
           <Link to='/'>
           <button className="btn btn-warning">Veiw More</button>
           </Link>
                
            </div>

          </div>
        </div>
      </div>
    );
};

export default MiniBanner;
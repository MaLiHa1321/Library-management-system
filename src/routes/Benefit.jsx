import React from 'react';
import { AiOutlineEuro, AiTwotoneTool,AiOutlineFund,AiOutlineUserAdd,AiFillUnlock,AiOutlineFileProtect } from 'react-icons/Ai';
import Container from './Container';

const Benefit = () => {
    return (
        <div className='mt-16' >
            <h2 className='text-xl md:text-4xl font-bold text-center mt-16'> <span className='text-orange-600'>Benefits Of Our</span> Library Management System</h2>
             <p className='text-sm text-center m-8'>A Library management system (LMS) offers access to and deals with the assets in your library. A well-picked framework will expand your library's proficiency, <br /> spare significant organization time, lead to a superior instructive encounter for understudies and help create autonomous learning.</p>
             <Container>

             <div className='grid grid-cols-1 md:grid-cols-3 gap-12 m-12'>
                <div >
                <AiOutlineEuro className='text-5xl'></AiOutlineEuro>
                <h2 className='text-xl text-orange-500 font-bold'>Cost</h2>
                <p>You will work an exacting spending plan so consistently approach the merchants at a harsh cost or ballpark figure, and ensure you recognize what is incorporated into that cost.</p>
                </div>
                <div>
                <AiTwotoneTool className='text-5xl'></AiTwotoneTool>
                <h2 className='text-xl text-orange-500 font-bold'>24/7 access</h2>
                <p>Users can access digital resources, such as e-books and e-journals, at any time, providing flexibility for research and reading.</p>
                </div>
                <div>
                <AiOutlineFund className='text-5xl'></AiOutlineFund>
                <h2 className='text-xl text-orange-500 font-bold'>Digital Resource Access</h2>
                <p>Users can access a wide range of digital resources, including databases, e-books, and e-journals, through the library's online portal.</p>
                </div>
                <div>
                <AiOutlineUserAdd className='text-5xl'></AiOutlineUserAdd>
                <h2 className='text-xl text-orange-500 font-bold'>Online Feedback and Support</h2>
                <p> Users can provide feedback, ask questions, or seek assistance through the library's online channels, enhancing communication between the library and its patrons.</p>
                </div>
                <div>
                <AiFillUnlock className='text-5xl'></AiFillUnlock>
                <h2 className='text-xl text-orange-500 font-bold'>Data Security</h2>
                <p>Users can have confidence that their personal information and borrowing history are protected and secure.</p>
                </div>
                <div>
                <AiOutlineFileProtect className='text-5xl'></AiOutlineFileProtect>
                <h2 className='text-xl text-orange-500 font-bold'>Digital Preservation</h2>
                <p>Libraries may digitize and archive historical documents and rare books, making them accessible to a wider audience.

</p>
                </div>
              
             </div>
             </Container>
        </div>
    );
};

export default Benefit;
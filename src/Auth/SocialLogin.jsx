import React, { useContext } from 'react';
import { AuthContext } from '../provider/AuthProvider';
import { useNavigate } from 'react-router-dom';
import toast, { Toaster } from 'react-hot-toast';
import { BiLogoGoogle } from 'react-icons/bi';


const SocialLogin = () => {
    const {user, googleLogin} = useContext(AuthContext)
    const navigate = useNavigate()


    const handleSocialLogin = (media) => {
        media()
        .then(res => {
            toast.success('login succesful')
            navigate('/')
        })
        .catch(err => console.log(err))
    }
    return (
        <div>
             <Toaster
        position="top-right"
        reverseOrder={false}
      />
      
            <div onClick={() => handleSocialLogin(googleLogin)} className='text-center' >

            <button className='btn btn-warning  text-4xl'><BiLogoGoogle></BiLogoGoogle></button>
            </div>
            
        </div>
    );
};

export default SocialLogin;
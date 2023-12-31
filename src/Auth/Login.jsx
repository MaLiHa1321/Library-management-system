
import { Link, useLocation, useNavigate } from 'react-router-dom';
import SocialLogin from './SocialLogin';
import toast, { Toaster } from 'react-hot-toast';
import useAuth from '../hooks/useAuth';

const Login = () => {

  const {userLogin, user} = useAuth()
  const location = useLocation();
  const navigate = useNavigate()
  const handleLogin = e =>{
     e.preventDefault()
     const form = e.target;
     const email = form.email.value;
     const password = form.password.value;
     console.log(email,password)

     userLogin(email,password)
     .then(res => {
      toast.success('login successful')

        // windows refresh
    setTimeout(() => {
      window.location.reload();
    }, 1000);

      navigate(location?.state ? location?.state : '/')
     })
     .catch(err => {
      toast.error("invalid email or password")
      return;
     })
  }
    return (
        <div>
        <Toaster
        position="top-right"
        reverseOrder={false}
      />
          <h1 className='text-3xl text-center'>Please Login</h1>
             <form onSubmit={handleLogin} className="card-body w-full mx-auto md:w-3/4 lg:w-1/2">
        <div className="form-control">
          <label className="label">
            <span className="label-text">Email</span>
          </label>
          <input type="email" placeholder="email" name='email' className="input input-bordered" required />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Password</span>
          </label>
          <input type="password" placeholder="password" name='password' className="input input-bordered" required />
        </div>
        <p>Don't have an account? <span className='text-blue-400'><Link to="/register">Register</Link></span></p>
        <div className="form-control mt-6">
          <button className="btn btn-warning">Login</button>
        </div>
        <div className='mt-5'>
          <SocialLogin></SocialLogin>
        </div>
      </form>


       
            
        </div>
    );
};

export default Login;
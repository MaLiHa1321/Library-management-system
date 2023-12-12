import { useLoaderData, useNavigate } from "react-router-dom";
import useAuth from "../../hooks/useAuth";
import Container from "../../routes/Container";
import toast, { Toaster } from "react-hot-toast";
import useAxios from "../../hooks/useAxios";

const ReviewBook = () => {
    const reviewBook = useLoaderData()
    const {user} = useAuth();
    const axios = useAxios();
    const navigate = useNavigate();

    const {_id,name,photo,des,quantity,author,rating} = reviewBook;



     const handleReview = e => {
        e.preventDefault();
        const form = e.target;
        const name = form.name.value;
        const photo = form.photo.value;
        const author = form.AuthorName.value;
        const email = form.userName.value;
        const review = form.review.value;
        const product ={name,photo,author,email,review}
        console.log(product)

        axios.post('/reviews', product)
        .then(res =>{
            console.log(res.data)
         if(res?.data?.insertedId){
            toast.success('Book updated successfully');
             navigate('/')
         }
        } )
        .catch(err => console.log(err))
     }




    
    return (
        <Container>

        <div>
        <Toaster
 position="top-right"
 reverseOrder={false}
/>
     <h2 className='text-2xl text-center font-bold text-orange-600'>Review Book</h2>
      <div className='p-5'>
         <form onSubmit={handleReview}>
          <div className='flex flex-col md:flex-row gap-3'>

 <div className="form-control flex-1">
   <label className="label">
     <span className="label-text">Name</span>
   </label>
   <input type="text" placeholder="name" name="name" defaultValue={name} className="input input-bordered" required />
 </div>
 <div className="form-control flex-1">
   <label className="label">
     <span className="label-text">Image url</span>
   </label>
   <input type="text" placeholder="image url" name="photo" defaultValue={photo} className="input input-bordered" required />
 </div>
          </div>
       
          <div className='flex flex-col md:flex-row gap-3'>

 <div className="form-control flex-1">
   <label className="label">
     <span className="label-text">Author Name</span>
   </label>
   <input type="text" placeholder="Author" name="AuthorName" defaultValue={author} className="input input-bordered" required />
 </div>
 <div className="form-control flex-1">
   <label className="label">
     <span className="label-text">User Email</span>
   </label>
   <input type="text" placeholder="Author" name="userName" defaultValue={user?.email} className="input input-bordered" required />
 </div>
 
          </div>

 <div className="form-control">
   <label className="label">
     <span className="label-text">Message</span>
   </label>
   <textarea placeholder="description" type="text" name='review'  className="textarea textarea-bordered textarea-lg w-full " ></textarea>
 </div>
 
 <div className="form-control m-6">
   <button className="btn  btn-warning">Review Book</button>
 </div>
         </form>
      </div>
     
 </div>
        </Container>
    );
};

export default ReviewBook;
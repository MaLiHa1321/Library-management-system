import axios from "axios";
import { useEffect } from "react";



const axiosSecure = axios.create({
    baseURL: 'https://library-management-server-sepia.vercel.app',
    withCredentials: true
})


const useAxios = () => {
 

    useEffect(() =>{
        axiosSecure.interceptors.response.use(res => {
            return res;
        },
        err =>{
            console.log(err.response)
            if(err.response.status === 401 || err.response.status === 403){
                console.log("logout the user")
            }
        }
        )
    },[])
    return axiosSecure;
};

export default useAxios;
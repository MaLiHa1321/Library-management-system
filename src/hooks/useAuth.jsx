import { useContext } from 'react';
import { AuthContext } from "../provider/AuthProvider";

const useAuth = () => {
    const authen = useContext(AuthContext);

    return authen;
};

export default useAuth;
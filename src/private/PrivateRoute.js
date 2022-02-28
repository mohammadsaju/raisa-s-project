import {useLocation, Navigate} from 'react-router-dom';
import useAuth from '../hooks/useAuth';


const PrivateRoute = ({children}) => {
    const location = useLocation();
    const {user, isloading} = useAuth();

    if(isloading) {
        return <p>loading...</p>
    }
    
    return user.email ? children : <Navigate to='/sign-in' state={{from: location}} />

}

export default PrivateRoute;
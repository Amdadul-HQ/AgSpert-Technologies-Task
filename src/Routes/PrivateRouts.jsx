import { Navigate, useLocation } from "react-router-dom";
import useAuth from "../Hooks/useAuth";

const PrivateRouts = ({children}) => {
    const location = useLocation()
    
    const {user,loading} = useAuth()
    if(loading)return <h1>Loading......</h1>
    return user ? (
        <div>{ children }</div>
    ) : (
        <Navigate to={ '/login' } state={ { from: location } } replace />
    )
};

export default PrivateRouts;
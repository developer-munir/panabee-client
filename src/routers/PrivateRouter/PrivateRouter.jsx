import React, { useContext } from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import { AuthContext } from '../../contexts/AuthContexts/AuthProvider';
// import LoadinSpinner from '../../pages/Shared/Spinner/LoadinSpinner';

const PrivateRouter = ({children}) => {
    const { user, spinner } = useContext(AuthContext);
    const location = useLocation();
    if (spinner) {
        return <div className='text-center text-xl'>Loading</div>;
    }
    if (!user) {
        return (
          <Navigate to="/login" state={{ from: location }} replace></Navigate>
        );
    }
    return children;
};

export default PrivateRouter;
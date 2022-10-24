import React, { useContext } from 'react';
import { AuthContext } from '../../contexts/AuthContexts/AuthProvider';

const Home = () => {
    const { name } = useContext(AuthContext);
    console.log(name)
    return (
        <div>
            <h1 className='font-serif'>Home component</h1>
            <h1>{name}</h1>
        </div>
    );
};

export default Home;
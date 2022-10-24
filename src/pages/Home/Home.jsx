import React, { useContext } from 'react';
import { AuthContext } from '../../contexts/AuthContexts/AuthProvider';
import Header from './Header';

const Home = () => {
    const { name } = useContext(AuthContext);
    console.log(name)
    return (
        <div>
            <Header></Header>
        </div>
    );
};

export default Home;
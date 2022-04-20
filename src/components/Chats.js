import React  from 'react';
import { useNavigate } from 'react-router-dom';
import { auth } from '../firebase';

// Components
import Navbar from './Navbar';

// Styles
import styles from "./Chats.module.css"

const Chats = () => {
    const navigate = useNavigate();

    const logoutHandler = async() => {
        await auth.signOut();
        navigate('/')
    }

    return (
        <div className={styles.container}>
            <Navbar logoutHandler={logoutHandler}/>
        </div>
    );
};

export default Chats;
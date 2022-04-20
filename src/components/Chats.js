import React, { useContext, useEffect, useState }  from 'react';
import { useNavigate } from 'react-router-dom';
import { auth } from '../firebase';
import {ChatEngine} from 'react-chat-engine'
import axios from 'axios';

//Context
import {AuthContext} from '../contexts/AuthContextProvider'

// Components
import Navbar from './Navbar';

// Styles
import styles from "./Chats.module.css"

const Chats = () => {
    const [loading , setLoading] = useState(true);
    const user = useContext(AuthContext);
    const navigate = useNavigate();

    useEffect(() => {
        if(!user) {
            navigate('/');
            return;
        }
        axios.get("https://api.chatengine.io/users/me",{
            headers:{
                'project-id':'76335f8a-230e-49d8-964f-8a483d4b28ea',
                'user-name':user.email,
                'user-secret': user.uid
            }
        })
        .then(() => setLoading(false))
        .catch(() => {
            let formData = new FormData();
            formData.append('email' , user.email);
            formData.append('username' , user.email);
            formData.append('secret' , user.uid)
            getPhoto(user.photoURL)
                .then(avatar => {
                    formData.append('avatar' , avatar , avatar.name)
                })
                axios.post("https://api.chatengine.io/users/", formData ,{
                    headers:{
                        'private-key' : 'c5179af8-e8af-4d32-a3b9-6f99d0db69c5'
                    }
                })
                .then(() => setLoading(false))
                .catch(err => console.log(err))
        })
    }, [user , navigate])

    const getPhoto = async(url) => {
        const response = await fetch(url);
        const data = await response.blob();
        return new File([data] , 'userPhoto.jpg' , {type: 'image/jpeg'})
    }

    const logoutHandler = async() => {
        await auth.signOut();
        navigate('/')
    }

    if(!user || loading) return 'loading...'
    return (
        <div className={styles.container}>
            <Navbar logoutHandler={logoutHandler}/>
            <ChatEngine 
                height='calc(100vh - 50px)'
                projectID='76335f8a-230e-49d8-964f-8a483d4b28ea'
                userName={user.email}
                userSecret={user.uid}
            />
        </div>
    );
};

export default Chats;
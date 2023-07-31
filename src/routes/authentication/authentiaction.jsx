import React from 'react';
import SignIn from '../../components/signIn/signIn';
import SignUp from '../../components/signUp/signUp';
import "./authentication.scss";
import { Divider } from '@mui/material';
import { Routes,Route } from 'react-router-dom';

const Authentiaction = () => {
    return (
        <div className='authPage'>
            <Routes>
                <Route index element={<SignIn/>}/>
                <Route path='signUp' element={<SignUp/>}/>
            </Routes>
            {/* <SignIn/> */}
            
            {/* <SignUp/> */}
        </div>
    );
}

export default Authentiaction;

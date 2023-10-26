import React from 'react';
import {Route, Routes} from 'react-router-dom';
import Home from '../pages/home';
import Create from '../pages/create';
import Detail from '../pages/detail';
import Edit from '../pages/edit';
import SignIn from '../pages/login';
import {PrivateRoutes} from "../components/privateRoutes";



  const AppRoutes = () => {

    return (
        <Routes>
            <Route path="/" element={<Home/>}/>
            <Route element={<PrivateRoutes/>}>
                <Route path="/create" element={<Create/>} />
                <Route path="/edit/:id" element={<Edit/>}/>
            </Route>
            <Route path="/detail/:userId" Component={Detail} />
            {/* What is wrong?? <Route path="/detail/:userId" element={<Detail />} /> */}
            <Route path="/login" element={<SignIn/>}/>
        </Routes>
    );
};

export default AppRoutes;

import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import CreatePoint from './pages/CreatePoint';
import Home from './pages/Home';

const BasicRoutes = function () {
    // <Route component={Home} path='/' /> está na versão 5.0
    return (
        <Router>
            <Routes>
                <Route element={<Home />} path='/' />
                <Route element={<CreatePoint />} path='/create-point' />
            </Routes>
        </Router>
    );
}
export default BasicRoutes;
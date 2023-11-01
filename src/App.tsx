import React from 'react';
import './App.css';
import './style/MainSlider.css'
import { NavBar } from './components/NavBar/NavBar';
import { AppRouter } from './components/AppRouter';
import { BrowserRouter } from 'react-router-dom';

function App() {
    return (
        <BrowserRouter>
        <div className='app_container w-100 h-100'>
            <NavBar />
            <AppRouter/>
        </div>
        </BrowserRouter>
    );
}

export default App;

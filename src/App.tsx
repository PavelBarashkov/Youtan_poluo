import React from 'react';
import './App.css';
import './style/MainSlider.css';
import { AppRouter } from './components/AppRouter';
import { BrowserRouter } from 'react-router-dom';
import { NavBar } from './modules/Menu';
import { Footer } from './modules/Footer/Footer';

function App() {
    return (
        <BrowserRouter>
            <div className='app_container w-100 h-100'>
                <NavBar />
                <AppRouter/>
                <Footer/>
            </div>
        </BrowserRouter>
    );
}

export default App;

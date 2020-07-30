import React from "react";
import "./Header.css";
import logo from './logo.png';

function Header() {
    return <header className="App-header">
        <img src={logo} className='header-logo' />
        <h1 className='header-info'>Система комплексного мониторинга состояния молочных коров</h1>
    </header>;
}

export default Header;
